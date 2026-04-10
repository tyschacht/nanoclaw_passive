---
title: "Idea: Whop API — Fully Agentic Digital Product Creation and Sales"
date: 2026-04-10
tags: [passive-income, agentic, viable, digital-products, api, whop, marketplace]
---

# Whop API — Fully Agentic Digital Product Pipeline

## What It Is

Whop is a digital product marketplace with 450,000+ users where creators sell templates, courses, PDFs, memberships, Discord access, software, and more. What makes it unique for our purposes: Whop is the **only major digital product platform with a working API for programmatic product creation** — confirmed as of April 2026.

All three alternatives were checked and failed:
- Gumroad: product creation endpoint returns 404 (GitHub issue #4019, March 2026)
- Lemon Squeezy: products endpoint is read-only
- Payhip: API limited to coupons/license keys only

Whop's API allows an agent to: (1) create a product listing, (2) upload a file programmatically via presigned S3 URL, (3) attach a Files experience using the discovered Files app ID, (4) set pricing, and (5) go live — entirely without human intervention after initial one-time account setup.

Revenue model: agent generates digital products (Notion templates, AI prompt packs, tracking spreadsheets, niche guides, HTML tools, checklists, etc.) → lists them on Whop → buyers purchase → automatic delivery → 3% + Stripe fees deducted → passive income.

## How an Agent Does It

1. **One-time human setup**: Create a Whop seller account, get company ID and API key from `/dashboard/developer`. This is the only human step.
2. **Generate product content**: Claude creates the digital product (Notion template → exported PDF, prompt pack as .txt, HTML tool, etc.).
3. **Upload file via Whop SDK**:
   ```js
   const file = await client.files.upload({
     file: fs.readFileSync('./product.pdf'),
     filename: 'product.pdf',
   });
   ```
   Returns `file.id` once status = 'ready'.
4. **Create product**:
   ```js
   const product = await client.products.create({
     company_id: 'biz_xxxx',
     title: 'Niche Tracker Template',
     headline: 'Never miss a market opportunity again',
     description: 'Full breakdown...',
   });
   ```
5. **Attach Files experience** (using discovered app_id):
   ```js
   const experience = await client.experiences.create({
     app_id: 'app_5UWRrs7haZZeiQ',  // Whop native Files app
     company_id: 'biz_xxxx',
     name: 'Download Your Template',
   });
   ```
6. **Set pricing**:
   ```js
   await client.plans.create({
     product_id: product.id,
     billing_period: 'one_time',
     initial_price: 1700,  // $17.00 in cents
   });
   ```
7. Product is live on Whop marketplace. All future sales are fully automated (delivery, payment, access grant).

For ongoing passive income: run the agent on a schedule (e.g., weekly) to generate and list 2–5 new products per run targeting hyper-niche audiences.

## Source

- Whop API docs: https://docs.whop.com/api-reference/products/create-product
- Whop file upload guide: https://docs.whop.com/developer/guides/upload-files
- Files app ID discovered from: https://whop.com/apps/app_5UWRrs7haZZeiQ/
- Whop platform size: 450K+ users (from PromptBase creator's toku.agency HN post, April 2026)
- All competitor API failures confirmed: Gumroad #4019, Lemon Squeezy read-only, Payhip coupons-only
- Run 8 research, April 10 2026

## Scores

| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 7 | Product creation + file upload confirmed via API; Files experience app_id discovered but file-to-experience attachment step still needs end-to-end verification |
| Setup effort | 6 | One-time human account creation required; API key from dashboard; then fully autonomous |
| Yield potential | 6 | Whop has 450K+ active users; $400–1,200/mo achievable with 20–50 hyper-niche products at $10–$25 each with 1–3 sales/mo per product |
| Risk | 8 | 3% platform fee + Stripe fees; content quality risk (low-quality products get no sales); no capital at risk |
| **Overall** | **6.75** | First viable fully-agentic digital product pipeline; verification note below |

## Implementation Notes

**Install the SDK:**
```bash
npm install @whop/sdk
```

**Environment setup:**
```bash
WHOP_API_KEY=your_company_api_key
WHOP_COMPANY_ID=biz_xxxxxxxxxxxx
```

**Critical unverified step**: Attaching the uploaded file specifically to the Files experience via API. The `client.experiences.create()` creates the experience shell, but populating it with the uploaded file object may require an additional API call not yet documented publicly. Possible approaches:
1. Use Whop's storage API (`https://storage.api.whop.com/api`) with bucket-based upload
2. Find the `@whop-apps/storage` npm package for experience-level file management
3. Test manually: create experience with app_5UWRrs7haZZeiQ, then check if the `file.id` from upload can be passed as an experience config parameter

**Best product types for agents:**
- Notion templates for specific niches (real estate investors, solopreneurs, recipe bloggers)
- AI prompt packs (bundled prompts for specific workflows)
- HTML calculators or interactive tools (one-page apps Claude Code can generate)
- Niche tracking spreadsheets exported as CSV + PDF guide
- Industry-specific email templates (10-pack)

**Pricing sweet spot**: $9–$25 one-time. Whop's audience is comfortable with sub-$30 impulse purchases.

**Fee structure**: 3% Whop fee + ~2.9%+$0.30 Stripe = ~6% total. On a $15 sale, you net ~$14.10.

**Volume needed for $500/week**: 35 sales at $15 = 2,500 listings × 1.4% conversion = ~200 products OR 50 listings × 2–3 sales each.

## Open Questions

- Does `client.experiences.create({ app_id: 'app_5UWRrs7haZZeiQ' })` + file upload give buyers download access, or is there a separate "add file to experience" step?
- Does Whop's marketplace have organic discovery (SEO, category browsing) or is distribution mostly via creator's own audience?
- Are there rate limits on product creation API calls?
- Does Whop penalize low-quality listings with reduced visibility?
