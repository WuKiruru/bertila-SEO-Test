resource "aws_route53_zone" "bertila" {
  count = var.enable_custom_domain ? 1 : 0

  name    = var.domain_name
  comment = "Hosted zone for ${var.domain_name} — managed by Terraform"
}

resource "aws_route53_record" "amplify_verification" {
  for_each = var.enable_custom_domain ? {
    for dvo in aws_amplify_domain_association.bertila[0].certificate_verification_dns_record :
    dvo => dvo
  } : {}

  zone_id = aws_route53_zone.bertila[0].zone_id
  name    = split(" ", each.value)[0]
  type    = split(" ", each.value)[1]
  records = [trimsuffix(split(" ", each.value)[2], ".")]
  ttl     = 300

  allow_overwrite = true
}

resource "aws_route53_record" "apex" {
  for_each = var.enable_custom_domain ? {
    for sd in aws_amplify_domain_association.bertila[0].sub_domain :
    sd.prefix => sd
    if sd.prefix == ""
  } : {}

  zone_id = aws_route53_zone.bertila[0].zone_id
  name    = var.domain_name
  type    = "CNAME"
  records = [each.value.dns_record != "" ? split(" ", each.value.dns_record)[2] : ""]
  ttl     = 300
}

resource "aws_route53_record" "www" {
  for_each = var.enable_custom_domain ? {
    for sd in aws_amplify_domain_association.bertila[0].sub_domain :
    sd.prefix => sd
    if sd.prefix == "www"
  } : {}

  zone_id = aws_route53_zone.bertila[0].zone_id
  name    = "www.${var.domain_name}"
  type    = "CNAME"
  records = [each.value.dns_record != "" ? split(" ", each.value.dns_record)[2] : ""]
  ttl     = 300
}
