variable "environment" {
  description = "Environment name (e.g., prod, staging, dev)"
  type        = string
}

variable "project_name" {
  description = "Project name for resource naming"
  type        = string
}

variable "recipient_email" {
  description = "Recipient email address for pilot application notifications"
  type        = string
  default     = "ed.lent@rescuenet360.com"
}

variable "web3forms_access_key" {
  description = "Web3Forms API access key for sending free webhook notifications"
  type        = string
  default     = ""
}

variable "email_webhook_url" {
  description = "Custom webhook URL (e.g. Formspree, Slack, Zapier) for form notifications"
  type        = string
  default     = ""
}

