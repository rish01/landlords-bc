resource "aws_db_subnet_group" "main" {
  name       = "${var.project}-${var.environment}"
  subnet_ids = aws_subnet.private[*].id
}

resource "aws_security_group" "rds" {
  name   = "${var.project}-${var.environment}-rds"
  vpc_id = aws_vpc.main.id

  ingress {
    from_port       = 5432
    to_port         = 5432
    protocol        = "tcp"
    security_groups = [aws_security_group.ecs.id]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_db_instance" "main" {
  identifier                 = "${var.project}-${var.environment}"
  engine                     = "postgres"
  engine_version             = "18"
  instance_class             = var.db_instance_class
  allocated_storage          = 50
  max_allocated_storage      = 200
  storage_encrypted          = true
  kms_key_id                 = aws_kms_key.data.arn
  db_subnet_group_name       = aws_db_subnet_group.main.name
  vpc_security_group_ids     = [aws_security_group.rds.id]
  multi_az                   = true
  publicly_accessible        = false
  backup_retention_period    = 30
  deletion_protection        = true
  skip_final_snapshot        = false
  auto_minor_version_upgrade = true
  username                   = "lbc_admin"
  manage_master_user_password = true
  master_user_secret_kms_key_id = aws_kms_key.data.arn
}
