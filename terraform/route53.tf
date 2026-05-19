resource "aws_route53_zone" "bertila" {
  count = var.enable_custom_domain ? 1 : 0

  name    = var.domain_name
  comment = "Hosted zone for ${var.domain_name} — managed by Terraform"
}

# Amplify exposes the certificate-validation DNS record as a single
# space-separated string: "<name> <type> <value>".
locals {
  amplify_cert_parts = var.enable_custom_domain ? split(" ", aws_amplify_domain_association.bertila[0].certificate_verification_dns_record) : []

  # Apex / www CNAME target (CloudFront distribution that Amplify provisions).
  amplify_apex_target = var.enable_custom_domain ? trimsuffix(
    split(" ", [for sd in aws_amplify_domain_association.bertila[0].sub_domain : sd.dns_record if sd.prefix == ""][0])[2],
    ".",
  ) : ""

  amplify_www_target = var.enable_custom_domain ? trimsuffix(
    split(" ", [for sd in aws_amplify_domain_association.bertila[0].sub_domain : sd.dns_record if sd.prefix == "www"][0])[2],
    ".",
  ) : ""
}

resource "aws_route53_record" "amplify_verification" {
  count = var.enable_custom_domain ? 1 : 0

  zone_id = aws_route53_zone.bertila[0].zone_id
  name    = local.amplify_cert_parts[0]
  type    = local.amplify_cert_parts[1]
  records = [trimsuffix(local.amplify_cert_parts[2], ".")]
  ttl     = 300

  allow_overwrite = true
}

# Apex: CNAMEs are NOT allowed at the zone apex in Route53. Use an ALIAS
# record pointing to the CloudFront distribution Amplify provisions.
# The CloudFront hosted-zone ID is a fixed AWS-published constant.
resource "aws_route53_record" "apex" {
  count = var.enable_custom_domain ? 1 : 0

  zone_id = aws_route53_zone.bertila[0].zone_id
  name    = var.domain_name
  type    = "A"

  alias {
    name                   = local.amplify_apex_target
    zone_id                = "Z2FDTNDATAQYW2" # Global CloudFront hosted zone
    evaluate_target_health = false
  }

  allow_overwrite = true
}

resource "aws_route53_record" "www" {
  count = var.enable_custom_domain ? 1 : 0

  zone_id = aws_route53_zone.bertila[0].zone_id
  name    = "www.${var.domain_name}"
  type    = "CNAME"
  records = [local.amplify_www_target]
  ttl     = 300

  allow_overwrite = true
}

# TXT record for Google Search Console domain verification.
# Created only when var.google_site_verification is set.
resource "aws_route53_record" "google_site_verification" {
  count = var.enable_custom_domain && var.google_site_verification != "" ? 1 : 0

  zone_id = aws_route53_zone.bertila[0].zone_id
  name    = var.domain_name
  type    = "TXT"
  ttl     = 300
  records = ["google-site-verification=${var.google_site_verification}"]

  allow_overwrite = true
}
