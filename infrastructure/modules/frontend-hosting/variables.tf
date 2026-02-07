variable "environment" {
  description = "Environment name (e.g., prod, staging, dev)"
  type        = string
}

variable "project_name" {
  description = "Project name for resource naming"
  type        = string
}

variable "enable_custom_domain" {
  description = "Enable custom domain with ACM certificate"
  type        = bool
  default     = false
}

variable "custom_domain" {
  description = "Custom domain name (e.g., rescuenet360.com)"
  type        = string
  default     = ""
}

variable "route53_zone_id" {
  description = "Route53 hosted zone ID for custom domain (optional)"
  type        = string
  default     = ""
}
