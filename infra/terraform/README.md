# Terraform skeleton (PR-01)

AWS **ca-central-1**. Systems of record stay in Canada.

This is a **skeleton**: modules are named and wired enough that staging/prod can be filled in, not a complete production apply. Do not `apply` until variables, account IDs, and secrets are real.

## Resources

| Resource | Purpose |
|---|---|
| VPC + public/private subnets | Network |
| ECS Fargate cluster | `web`, `worker`, **migrator** one-shot task |
| RDS PostgreSQL Multi-AZ | System of record + pg-boss |
| ElastiCache Redis | Cache + rate limit only (not jobs, not sessions) |
| S3 quarantine + clean | Uploads (PR-16); SSE-KMS |
| KMS | RDS, S3, secrets |
| ECR | Web + worker images |
| IAM OIDC (placeholder) | GitHub Actions deploy |

**Migrations** run as an ECS task (`lbc-migrator`) **before** new web/worker tasks receive traffic. Never `drizzle migrate` inside the web container at boot.

## Usage

```bash
cd infra/terraform
cp terraform.tfvars.example terraform.tfvars
# fill in account, domain, etc.
terraform init
terraform plan
```
