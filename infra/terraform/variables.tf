variable "aws_region" {
  type        = string
  description = "Systems of record region. Must stay ca-central-1."
  default     = "ca-central-1"

  validation {
    condition     = var.aws_region == "ca-central-1"
    error_message = "Landlords BC systems of record must stay in ca-central-1."
  }
}

variable "environment" {
  type        = string
  description = "staging or prod"
}

variable "project" {
  type    = string
  default = "lbc"
}

variable "vpc_cidr" {
  type    = string
  default = "10.42.0.0/16"
}

variable "db_instance_class" {
  type        = string
  description = "Y1 assumption: db.t4g.medium Multi-AZ"
  default     = "db.t4g.medium"
}

variable "redis_node_type" {
  type        = string
  description = "Y1 assumption: cache.t4g.micro (cache/rate-limit only)"
  default     = "cache.t4g.micro"
}

variable "web_cpu" {
  type    = number
  default = 512
}

variable "web_memory" {
  type    = number
  default = 1024
}

variable "worker_cpu" {
  type    = number
  default = 512
}

variable "worker_memory" {
  type    = number
  default = 1024
}
