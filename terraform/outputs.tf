output "amplify_app_id" {
  description = "Amplify App ID."
  value       = aws_amplify_app.bertila.id
}

output "amplify_default_url" {
  description = "Default Amplify URL for the deployed branch (use this during phase 1)."
  value       = "https://${aws_amplify_branch.main.branch_name}.${aws_amplify_app.bertila.default_domain}"
}

output "amplify_app_console_url" {
  description = "URL to the Amplify console for this app."
  value       = "https://${aws_amplify_app.bertila.arn != "" ? "eu-west-1" : "eu-west-1"}.console.aws.amazon.com/amplify/home?region=eu-west-1#/${aws_amplify_app.bertila.id}"
}

output "route53_nameservers" {
  description = "Route53 nameservers — only populated when enable_custom_domain = true. Configure these at the domain registrar."
  value       = var.enable_custom_domain ? aws_route53_zone.bertila[0].name_servers : []
}

output "custom_domain_status" {
  description = "Whether the custom domain integration is enabled."
  value       = var.enable_custom_domain ? "enabled (${var.domain_name})" : "disabled — using Amplify default URL"
}
