resource "aws_amplify_app" "bertila" {
  name                 = var.app_name
  repository           = var.github_repo
  iam_service_role_arn = aws_iam_role.amplify.arn

  # GitHub auth: Amplify uses the "AWS Amplify Hosting" GitHub App
  # (installed once at https://github.com/apps/aws-amplify-hosting on the
  # repository owner). No access_token / oauth_token needed — the App
  # authorization is account-scoped on the AWS side.
  lifecycle {
    ignore_changes = [access_token, oauth_token]
  }

  enable_auto_branch_creation = false
  enable_branch_auto_build    = true
  enable_branch_auto_deletion = false

  # WEB = static hosting on S3/CloudFront (cheapest tier). The Next.js app
  # uses output:"export" so every route is prerendered to plain HTML/JS.
  platform = "WEB"

  build_spec = <<-EOT
    version: 1
    applications:
      - appRoot: app
        frontend:
          phases:
            preBuild:
              commands:
                - npm ci
            build:
              commands:
                - npm run build
          artifacts:
            baseDirectory: out
            files:
              - '**/*'
          cache:
            paths:
              - node_modules/**/*
              - .next/cache/**/*
  EOT

  # Canonical host is the apex (bertila.es, no www). Redirect www → apex
  # with a 301 (permanent) so Google consolidates ranking signals and
  # Search Console doesn't flag the canonical mismatch.
  custom_rule {
    source = "https://www.${var.domain_name}"
    status = "301"
    target = "https://${var.domain_name}"
  }

  environment_variables = {
    AMPLIFY_DIFF_DEPLOY       = "false"
    AMPLIFY_MONOREPO_APP_ROOT = "app"
  }
}

resource "aws_amplify_branch" "main" {
  app_id      = aws_amplify_app.bertila.id
  branch_name = var.branch

  enable_auto_build = true
  stage             = "PRODUCTION"
  framework         = "Next.js - SSG"
}

resource "aws_amplify_domain_association" "bertila" {
  count = var.enable_custom_domain ? 1 : 0

  app_id      = aws_amplify_app.bertila.id
  domain_name = var.domain_name

  # Don't block terraform on certificate verification — ACM can only validate
  # once the nameservers point to this Route53 zone (either via NS change at
  # the current registrar or after the domain transfer completes).
  wait_for_verification = false

  sub_domain {
    branch_name = aws_amplify_branch.main.branch_name
    prefix      = ""
  }

  sub_domain {
    branch_name = aws_amplify_branch.main.branch_name
    prefix      = "www"
  }

  depends_on = [aws_route53_zone.bertila]
}
