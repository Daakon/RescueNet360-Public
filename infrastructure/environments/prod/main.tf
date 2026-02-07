terraform {
  required_version = ">= 1.5"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
    archive = {
      source  = "hashicorp/archive"
      version = "~> 2.4"
    }
  }

  # Uncomment to use S3 backend for remote state
  # backend "s3" {
  #   bucket = "rescuenet360-terraform-state"
  #   key    = "marketing/prod/terraform.tfstate"
  #   region = "us-east-1"
  # }
}

# Primary AWS provider
provider "aws" {
  region = var.aws_region

  default_tags {
    tags = {
      Environment = var.environment
      Project     = var.project_name
      ManagedBy   = "Terraform"
    }
  }
}

# Secondary provider for ACM certificate (must be us-east-1 for CloudFront)
provider "aws" {
  alias  = "us_east_1"
  region = "us-east-1"

  default_tags {
    tags = {
      Environment = var.environment
      Project     = var.project_name
      ManagedBy   = "Terraform"
    }
  }
}

# Frontend Hosting Module
module "frontend_hosting" {
  source = "../../modules/frontend-hosting"

  providers = {
    aws           = aws
    aws.us_east_1 = aws.us_east_1
  }

  environment          = var.environment
  project_name         = var.project_name
  enable_custom_domain = var.enable_custom_domain
  custom_domain        = var.custom_domain
  route53_zone_id      = var.route53_zone_id
}

# Waitlist API Module
module "waitlist_api" {
  source = "../../modules/waitlist-api"

  environment  = var.environment
  project_name = var.project_name
}
