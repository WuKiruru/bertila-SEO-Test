terraform {
  required_version = ">= 1.5.0"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }

  backend "local" {
    path = "terraform.tfstate"
  }
}

provider "aws" {
  region  = "eu-west-1"
  profile = "bertila"

  default_tags {
    tags = {
      Project     = "bertila"
      ManagedBy   = "terraform"
      Environment = "production"
    }
  }
}
