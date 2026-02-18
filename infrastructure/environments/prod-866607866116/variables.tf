variable "aws_region" {
  description = "AWS region for infrastructure"
  type        = string
  default     = "us-east-1"
}

variable "environment" {
  description = "Environment name"
  type        = string
  default     = "prod"
}

variable "project_name" {
  description = "Project name for resource naming"
  type        = string
  default     = "rescuenet360-marketing"
}

variable "enable_custom_domain" {
  description = "Enable custom domain and ACM certificate"
  type        = bool
  default     = false
}

variable "custom_domain" {
  description = "Custom domain (e.g., rescuenet360.com)"
  type        = string
  default     = ""
}

variable "route53_zone_id" {
  description = "Route53 hosted zone ID (optional, leave empty if using external DNS)"
  type        = string
  default     = ""
}
