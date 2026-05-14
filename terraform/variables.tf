variable "github_token" {
  description = "GitHub personal access token with repo scope used by Amplify to clone the repository."
  type        = string
  sensitive   = true
}

variable "github_repo" {
  description = "GitHub repository URL (e.g. https://github.com/USER/bertila)."
  type        = string
}

variable "branch" {
  description = "Git branch that Amplify will deploy."
  type        = string
  default     = "main"
}

variable "domain_name" {
  description = "Custom domain name for the site (used only when enable_custom_domain = true)."
  type        = string
  default     = "bertila.es"
}

variable "enable_custom_domain" {
  description = "Toggle for custom domain + Route53 resources. Set to true after the client approves the deployment."
  type        = bool
  default     = false
}

variable "app_name" {
  description = "Friendly name for the Amplify application."
  type        = string
  default     = "bertila"
}
