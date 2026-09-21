output "vpc_id" {
  value = aws_vpc.main.id
}

output "ecs_cluster_name" {
  value = aws_ecs_cluster.main.name
}

output "rds_endpoint" {
  value     = aws_db_instance.main.address
  sensitive = true
}

output "ecr_web_url" {
  value = aws_ecr_repository.web.repository_url
}

output "ecr_worker_url" {
  value = aws_ecr_repository.worker.repository_url
}

output "migrator_task_family" {
  value       = aws_ecs_task_definition.migrator.family
  description = "Run this task to completion before ECS service updates."
}

output "kms_key_arn" {
  value = aws_kms_key.data.arn
}
