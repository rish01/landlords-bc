resource "aws_ecs_cluster" "main" {
  name = "${var.project}-${var.environment}"

  setting {
    name  = "containerInsights"
    value = "enabled"
  }
}

resource "aws_security_group" "ecs" {
  name   = "${var.project}-${var.environment}-ecs"
  vpc_id = aws_vpc.main.id

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_cloudwatch_log_group" "web" {
  name              = "/ecs/${var.project}-${var.environment}-web"
  retention_in_days = 30
  kms_key_id        = aws_kms_key.data.arn
}

resource "aws_cloudwatch_log_group" "worker" {
  name              = "/ecs/${var.project}-${var.environment}-worker"
  retention_in_days = 30
  kms_key_id        = aws_kms_key.data.arn
}

resource "aws_cloudwatch_log_group" "migrator" {
  name              = "/ecs/${var.project}-${var.environment}-migrator"
  retention_in_days = 90
  kms_key_id        = aws_kms_key.data.arn
}

resource "aws_ecs_task_definition" "web" {
  family                   = "${var.project}-${var.environment}-web"
  requires_compatibilities = ["FARGATE"]
  network_mode             = "awsvpc"
  cpu                      = var.web_cpu
  memory                   = var.web_memory
  execution_role_arn       = aws_iam_role.ecs_execution.arn
  task_role_arn            = aws_iam_role.ecs_task.arn

  container_definitions = jsonencode([
    {
      name      = "web"
      image     = "${aws_ecr_repository.web.repository_url}:latest"
      essential = true
      portMappings = [{ containerPort = 3000, protocol = "tcp" }]
      healthCheck = {
        command     = ["CMD-SHELL", "wget -qO- http://localhost:3000/healthz || exit 1"]
        interval    = 30
        timeout     = 5
        retries     = 3
        startPeriod = 20
      }
      logConfiguration = {
        logDriver = "awslogs"
        options = {
          awslogs-group         = aws_cloudwatch_log_group.web.name
          awslogs-region        = var.aws_region
          awslogs-stream-prefix = "web"
        }
      }
    }
  ])
}

resource "aws_ecs_task_definition" "worker" {
  family                   = "${var.project}-${var.environment}-worker"
  requires_compatibilities = ["FARGATE"]
  network_mode             = "awsvpc"
  cpu                      = var.worker_cpu
  memory                   = var.worker_memory
  execution_role_arn       = aws_iam_role.ecs_execution.arn
  task_role_arn            = aws_iam_role.ecs_task.arn

  container_definitions = jsonencode([
    {
      name      = "worker"
      image     = "${aws_ecr_repository.worker.repository_url}:latest"
      essential = true
      portMappings = [{ containerPort = 3001, protocol = "tcp" }]
      healthCheck = {
        command     = ["CMD-SHELL", "wget -qO- http://localhost:3001/healthz || exit 1"]
        interval    = 30
        timeout     = 5
        retries     = 3
        startPeriod = 20
      }
      logConfiguration = {
        logDriver = "awslogs"
        options = {
          awslogs-group         = aws_cloudwatch_log_group.worker.name
          awslogs-region        = var.aws_region
          awslogs-stream-prefix = "worker"
        }
      }
    }
  ])
}

# One-shot task: run drizzle migrate, then stop. Deploy pipeline runs this
# BEFORE replacing web/worker tasks. Never migrate at web boot.
resource "aws_ecs_task_definition" "migrator" {
  family                   = "${var.project}-${var.environment}-migrator"
  requires_compatibilities = ["FARGATE"]
  network_mode             = "awsvpc"
  cpu                      = 256
  memory                   = 512
  execution_role_arn       = aws_iam_role.ecs_execution.arn
  task_role_arn            = aws_iam_role.ecs_task.arn

  container_definitions = jsonencode([
    {
      name      = "migrator"
      image     = "${aws_ecr_repository.web.repository_url}:latest"
      essential = true
      command   = ["node", "-e", "console.log('migrator stub — drizzle migrate lands in PR-04')"]
      logConfiguration = {
        logDriver = "awslogs"
        options = {
          awslogs-group         = aws_cloudwatch_log_group.migrator.name
          awslogs-region        = var.aws_region
          awslogs-stream-prefix = "migrator"
        }
      }
    }
  ])
}
