resource "aws_amplify_app" "bertila" {
  name         = var.app_name
  repository   = var.github_repo
  access_token = var.github_token

  enable_auto_branch_creation = false
  enable_branch_auto_build    = true
  enable_branch_auto_deletion = false

  platform = "WEB_COMPUTE"

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
            baseDirectory: .next
            files:
              - '**/*'
          cache:
            paths:
              - node_modules/**/*
              - .next/cache/**/*
  EOT

  custom_rule {
    source = "/<*>"
    status = "404-200"
    target = "/index.html"
  }

  environment_variables = {
    AMPLIFY_DIFF_DEPLOY       = "false"
    AMPLIFY_MONOREPO_APP_ROOT = "app"
    _LIVE_UPDATES             = jsonencode([{ name = "Next.js version", pkg = "next-version", type = "internal", version = "latest" }])
  }
}

resource "aws_amplify_branch" "main" {
  app_id      = aws_amplify_app.bertila.id
  branch_name = var.branch

  enable_auto_build = true
  stage             = "PRODUCTION"
  framework         = "Next.js - SSR"
}

resource "aws_amplify_domain_association" "bertila" {
  count = var.enable_custom_domain ? 1 : 0

  app_id      = aws_amplify_app.bertila.id
  domain_name = var.domain_name

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
