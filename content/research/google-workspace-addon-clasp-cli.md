---
title: "Idea: Google Workspace Add-on Factory via clasp CLI"
date: 2026-04-11
tags: [passive-income, agentic, viable, google-workspace, clasp, apps-script, marketplace]
---

# Google Workspace Add-on Factory via clasp CLI

## What It Is

Google Workspace Add-ons are extensions for Gmail, Google Docs, Sheets, Slides, Calendar, and Drive — the productivity suite used by 3 billion people and 10 million businesses. Developers publish them to the Google Workspace Marketplace, where users can install them with one click.

The critical commercial angle: **Google takes 0% of sales revenue.** Unlike Apple App Store (30%), Shopify (20%), or Apify (20%), the Workspace Marketplace charges no commission. Developers set up their own payment processor (Stripe, Gumroad, Lemon Squeezy) and keep ~97%+ of revenue after payment processing fees. Subscription pricing is the dominant model ($5–$29/month per seat), making this a recurring revenue business.

The agentic opportunity is enabled by `clasp` — Google's official open-source CLI for Apps Script. An AI agent can write the entire add-on in JavaScript/TypeScript, push code to an Apps Script project via `clasp push`, create a versioned deployment via `clasp deploy`, and update it indefinitely — all without touching a browser. The only human-required step is the initial Marketplace listing submission (~15 minutes, one-time per add-on), which is a form filled through Google Cloud Console's web UI.

Once published and collecting users, the business is fully passive: Stripe webhooks handle subscriptions, `clasp deploy` handles code updates, and the Marketplace handles distribution.

## How an Agent Does It

1. **Market research**: Agent queries the Workspace Marketplace category pages (workspace.google.com/marketplace) and identifies categories with strong paid add-on demand — email tools, document automation, CRM integrations, AI-powered assistants.
2. **Scoping**: Agent analyzes top-paid listings in the target category to identify feature gaps or underserved niches (e.g., a Gmail add-on that does X which the top-sellers don't).
3. **Build**: Agent writes the Apps Script code (JavaScript) implementing the add-on. Apps Script runs server-side in Google's cloud — no external hosting needed for the core logic. Stripe integration uses a lightweight Apps Script `UrlFetchApp.fetch()` call to verify subscription status on each use.
4. **Deploy via clasp**:
   ```bash
   clasp push          # push code to Apps Script project
   clasp deploy        # create versioned deployment → outputs deploymentId
   ```
   Agent runs these via Bash. Credentials stored as a `.clasprc.json` file with OAuth tokens.
5. **One-time human step**: Human logs into Google Cloud Console, fills out the Marketplace listing form (name, description, screenshots, OAuth scopes, pricing model) — ~15 minutes. Submits for review. Review takes 1–21 days (shorter for non-sensitive scopes).
6. **Payment backend**: Agent deploys a minimal Stripe webhook handler (Vercel serverless function) that grants/revokes add-on access based on subscription status. Stripe handles all billing.
7. **Ongoing operations**: Fully agentic. When adding new features: agent runs `clasp push && clasp deploy` — live update within minutes, no re-review required (only initial listing review needed).

## Source

- YouTube: "NEW Claude A.I. Side Hustle Nobody is Talking About" (videoId: `iVNiNdNnmu0`, 244K views, Mar 25 2026) — demonstrates using Claude Code + GWS CLI to programmatically build Google Sheets templates/add-ons
- Web: Google Workspace Marketplace developer docs (developers.google.com/workspace/marketplace)
- Web: clasp GitHub (github.com/google/clasp) + official docs
- Web: Freemius "CodeCanyon Analysis" (freemius.com/blog) — provides revenue comps for productivity app marketplaces
- Web: "$1,600 MRR Sheets budget add-on" — real-world yield data point from indie developer community

## Scores

| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 6 | Code generation + clasp push/deploy + Stripe webhook handling = fully agentic. One-time ~15-min human UI step for initial listing submission. Update cycle (the money-compounding loop) is 100% autonomous. Meets threshold. |
| Setup effort | 5 | GCP project creation, clasp auth setup, Apps Script project scaffolding, Stripe integration, initial listing form — approximately 2–4 hours total. Google OAuth review adds unpredictable wait time (1–8+ weeks for sensitive scopes). |
| Yield potential | 7 | $200–$500/mo in early months; $1K–$5K/mo with 500–2,500 paid users; $10K–$50K+/mo for established add-ons with SEO + network effects. Real data: $1,600 MRR from one side project. 3B user TAM means discovery upside is real. |
| Risk | 9 | Google's own platform, fully legitimate, no ToS concerns for programmatic code generation/deployment. Risk: OAuth sensitive scope review can take months (use non-sensitive scopes where possible to skip extended review). Add-on can be delisted if it violates Google policies. |
| **Overall** | **6.75** | Strong passive income mechanism with zero platform commission and massive TAM. The one human setup step is comparable to Framer templates or Shopify apps. Best for agents that can build functional Google Apps Script add-ons with a clear user value proposition. |

## Implementation Notes

**Required tools:**
- `clasp` CLI: `npm install -g @google/clasp` — Google's official Apps Script CLI
- Google Cloud Console (GCP): one-time OAuth project setup, Workspace Marketplace SDK enablement
- Apps Script API: must be enabled in GCP with `clasp login --creds creds.json`
- Stripe: subscription billing (Stripe Checkout + webhooks for subscription status)
- Vercel: hosting the Stripe webhook handler serverless function

**clasp workflow:**
```bash
# One-time setup (agentic after credentials file exists)
clasp login --creds creds.json    # uses service account or stored OAuth
clasp create --type addon         # creates new Apps Script project

# Per-release cycle (fully agentic)
clasp push                        # push latest code to Apps Script
clasp deploy --description "v1.2" # create versioned deployment
```

**Scope strategy to minimize review time:**
- `https://www.googleapis.com/auth/gmail.addons.execute` — no sensitive review
- `https://www.googleapis.com/auth/spreadsheets.currentonly` — restricted but common
- Avoid `gmail.readonly` or `drive` scopes unless essential (triggers 8+ week review)

**Add-on categories with strongest paid demand (2026):**
1. AI writing assistants for Docs/Gmail (fastest growing; "Intelligent Apps" designation)
2. Mail merge + email sequencing for Gmail
3. E-signature / PDF tools for Docs
4. CRM / sales tracking in Sheets
5. Budget / financial modeling templates

**Pricing benchmarks:**
- Individual: $5–$10/month
- Business: $15–$29/month/seat
- One-time purchase: $29–$79 (lower LTV but easier conversion)
- Free tier + paid tier: highest install velocity

**Discovery mechanism:** Users search Workspace Marketplace by keyword. Well-named add-ons with 100+ reviews surface organically. ProductHunt launch is effective for initial review velocity.

## Open Questions

- Will Google launch a Marketplace Listing API? The `appsmarket.googleapis.com` API currently has only license-check endpoints. Monitor Google Workspace Developer Preview program for listing management API.
- Can clasp deploy to an already-published listing without triggering a new review? (Yes, based on developer reports — only structural changes to OAuth scopes require re-review.)
- What is the minimum viable add-on complexity for passing initial review? (Simple add-ons with limited scopes have highest approval rate.)
- How does AI-generated code quality affect review outcomes? Google's automated scanner checks for malicious patterns, not code style.
