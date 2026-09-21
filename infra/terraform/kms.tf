resource "aws_kms_key" "data" {
  description             = "${var.project}-${var.environment} data key (RDS, S3, secrets)"
  deletion_window_in_days = 30
  enable_key_rotation     = true
}

resource "aws_kms_alias" "data" {
  name          = "alias/${var.project}-${var.environment}-data"
  target_key_id = aws_kms_key.data.id
}
