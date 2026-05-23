# Bertila

Single-page Next.js website for [Bertila](https://bertila.es), real estate professional specialised in **nuda propiedad**, **vivienda inversa** and **hipoteca inversa** for clients over 65 across Catalonia.

The repository contains two pieces:

| Folder | Purpose |
|---|---|
| [`app/`](app/) | Next.js 14 (App Router) + TypeScript + Tailwind + Framer Motion |
| [`terraform/`](terraform/) | AWS infrastructure (Amplify Hosting + Route53) |

---

## Local development

```bash
cd app
npm install
npm run dev          # http://localhost:3000
npm run build        # production build
```

The site is bilingual (ES default, CA toggle) and uses a custom React Context for translations — no i18n library. Legal pages also switch language.

### Key folders inside `app/`

```
app/
├── app/                  # Next.js routes
│   ├── page.tsx          # Home (single page with all sections)
│   ├── sitemap.ts
│   ├── robots.ts
│   ├── aviso-legal/
│   ├── privacidad/
│   ├── politica-cookies/
│   └── accesibilidad/
├── components/           # Header, Hero, About, Services, Testimonials,
│                         # Contact, Footer, CookieBanner, LegalPageShell…
├── lib/
│   ├── i18n/             # I18nContext + translations + server-side lang detection (ES + CA)
│   ├── site-config.ts    # Phone, email, legal data
│   └── structured-data.ts# JSON-LD (LocalBusiness, Organization, WebSite, Services)
├── public/               # SVG favicon, ICO, manifest, photos
└── scripts/              # One-off scripts (e.g. screenshots, see below)
```

### Generating screenshots (optional)

`scripts/screenshots.mjs` and `scripts/connector-shots.mjs` use Playwright to capture the site. Playwright is **not** a permanent dependency. If you want to regenerate screenshots:

```bash
cd app
npm install --save-dev playwright
npx playwright install chromium
node scripts/screenshots.mjs            # all pages, desktop + mobile
node scripts/connector-shots.mjs        # focused section captures
npm uninstall playwright                # cleanup
```

Output goes to `screenshots/` at the repo root.

---

## Deployment — AWS Amplify (two phases)

The Terraform config in [`terraform/`](terraform/) deploys the site to AWS Amplify in `eu-west-1`. Everything uses the **`bertila` AWS profile**.

```bash
# Verify the profile works first
aws sts get-caller-identity --profile bertila
```

### Phase 1 — Amplify on a default URL

Used during development and review. Amplify hosts the site and gives you a public URL like `https://main.xxxxxxxxxx.amplifyapp.com`. No custom domain or Route53 resources are created.

1. Install the **AWS Amplify Hosting** GitHub App on the repository owner (one-time, no PAT needed):

   <https://github.com/apps/aws-amplify-hosting> → Install → grant access to `YOUR_USERNAME/bertila`. Skip if already installed.

2. Copy the example variables file:

   ```bash
   cd terraform
   cp terraform.tfvars.example terraform.tfvars
   ```

3. Edit `terraform.tfvars` and fill in:

   ```hcl
   github_repo          = "https://github.com/Caballosanex/bertila"
   branch               = "main"
   enable_custom_domain = false        # ← keep false for Phase 1
   domain_name          = "bertila.es"
   ```

4. Apply:

   ```bash
   terraform init
   terraform plan
   terraform apply
   ```

5. After the plan succeeds, Terraform outputs the Amplify default URL:

   ```
   amplify_default_url = "https://main.xxxxxxxxxx.amplifyapp.com"
   ```

   Amplify will start the first build automatically (≈3–5 min).

### Phase 2 — Custom domain `bertila.es`

Once the client approves the deployment, switch on the custom-domain block. This will:

- Create the `bertila.es` hosted zone in Route53.
- Attach the domain to the Amplify app (with both apex and `www` subdomain).
- Output the four AWS nameservers you need to set at the domain registrar.

1. Edit `terraform.tfvars`:

   ```hcl
   enable_custom_domain = true
   ```

2. Apply:

   ```bash
   terraform apply
   ```

3. Terraform now outputs `route53_nameservers`. Either:

   a. **Transfer the .es domain to Route53 Domains** (recommended — single control plane). The transfer is initiated via the AWS CLI (region must be `us-east-1`):

      ```bash
      aws route53domains transfer-domain \
        --region us-east-1 --profile bertila \
        --domain-name bertila.es \
        --duration-in-years 1 \
        --auth-code "<EPP/auth code from current registrar>" \
        --admin-contact   file://contact.json \
        --registrant-contact file://contact.json \
        --tech-contact    file://contact.json \
        --auto-renew
      ```

      .es transfers typically complete in 5–7 days and require the domain to be **unlocked** at the current registrar and the WHOIS admin email to be reachable.

   b. **Keep the domain at the current registrar** and just point the nameservers to Route53. Replace the registrar's nameservers with the four values from the `route53_nameservers` output.

   Either way, once nameservers propagate, Amplify validates the SSL certificate and the site becomes available at `https://bertila.es` and `https://www.bertila.es`.

### Rolling back

Set `enable_custom_domain = false` and `terraform apply` — the Route53 zone and the Amplify domain association are removed. The default amplifyapp.com URL keeps working.

---

## Brand and design notes

- Primary colour: `#0A174C` (navy)
- Accent: `#C9A961` (warm gold)
- Typography: Inter (UI) + Fraunces (headings)
- Layout focused on accessibility for users over 65 — high contrast, large tap targets, `prefers-reduced-motion` honoured
- All hero/services/testimonials text comes from the client's existing copy at <https://bertila.es>

## Legal contact

Bertila Palà Ysamat — NIF 46237995Z
C/ Salvador Morato 6º A, Castillui de la Marca, 08732 Barcelona
+34 610 69 85 23 · bertypala@gmail.com
