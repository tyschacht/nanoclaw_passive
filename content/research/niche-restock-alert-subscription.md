---
title: "Idea: Niche Restock Alert Subscription Service"
date: 2026-06-12
tags: [passive-income, agentic, viable, monitoring, subscription, telegram, n8n, whop, niche]
---

# Niche Restock Alert Subscription Service

## What It Is

A scraper bot monitors a set of retailer and marketplace websites for a specific hard-to-find product category — out-of-print board games, limited sneakers, vintage vinyl, rare Lego sets, etc. When a restock or price drop is detected, subscribers receive an instant Telegram (or Discord/email) notification. Subscribers pay $3–$10/mo via a Whop storefront.

The mechanism was documented live on r/passive_income (June 7, 2026, 419 upvotes): a collector built a bot to monitor 8 retailer sites for out-of-print tabletop games, charged 32 people $3/mo, and the whole system runs unattended. The post explicitly says "two weekends of work, runs on a Raspberry Pi." An agent can do this with no hardware at all.

The pattern is distinct from generic price-tracking tools (Camelcamelcamel, Honey) because it targets a passionate niche that commercial tools ignore — small-batch collectibles, tabletop crowdfunding, regional Etsy drops, region-locked apparel, etc. Niche = less competition + higher subscriber loyalty + less churn.

## How an Agent Does It

1. **Niche discovery**: Agent searches Reddit and Discord for communities where members complain about missing restocks. Subreddits like r/boardgames, r/sneakers, r/HardwareSwap, r/lego frequently have "missed the restock again" posts. Claude identifies the top 3–5 products/brands mentioned.
2. **Scraper build**: Agent writes an n8n workflow (or Apify Actor) that polls retailer product pages every 15–30 minutes. Stock status is extracted via CSS selector or structured JSON (most retailers have `inStock: true/false` in their page JSON-LD). Alternatively, use Apify Web Scraper actor (already in library) for pages without clean structured data.
3. **Alert delivery**: n8n HTTP → Telegram Bot API `sendMessage` when status changes to "In Stock" or price drops below threshold. Per-subscriber routing via Telegram bot `chat_id` stored in a Google Sheet or Airtable linked to the Whop subscriber list.
4. **Billing**: Whop storefront with monthly subscription ($3–$10/mo). Whop webhook fires on new subscriber → adds `chat_id` to Telegram whitelist. Cancellation webhook removes them.
5. **SEO acquisition**: Claude Code generates a landing page targeting `"[niche] restock alerts"` keywords. Deploys to Vercel or Cloudflare Pages via CLI. Organic search brings subscribers without manual outreach.
6. **Maintenance**: Agent monitors itself — if a retailer changes their HTML structure, Playwright screenshot + Claude vision identifies the new selector. Alert if scraper hasn't fired in >48h.

## Source

- Reddit: r/passive_income post 1tz9a30 (419 pts, June 7, 2026) — "32 people pay me $3/mo to get board game restock alerts"
- URL: https://reddit.com/r/passive_income/comments/1tz9a30

## Scores

| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 8 | Scraping + alerting + billing all automatable; SEO landing page auto-generated; self-healing scraper via vision |
| Setup effort | 6 | n8n workflow + Whop storefront + Telegram bot + Vercel landing page — ~4–6 hours total |
| Yield potential | 6 | $3–10/mo per sub; 100 subs = $300–1K/mo; scales across multiple niches with same pipeline; ceiling ~$500/wk across 5 niches |
| Risk | 8 | Monitoring public retailer pages is legal (no login required); Telegram ToS allows bots; Whop is established; SEO is zero-risk |
| **Overall** | **7.0** | Strong agentic viability; yield ceiling modest per-niche but stackable |

## Implementation Notes

- **Scraping**: n8n HTTP Request node works for JSON-LD pages. For more complex sites, use Apify Web Scraper Actor (in library, `apify push` for headless deploy). For JS-heavy sites, Playwright in a Cloudflare Worker.
- **Telegram bot**: Create via BotFather → get token. `sendMessage` API: `https://api.telegram.org/bot{TOKEN}/sendMessage?chat_id={CHAT_ID}&text=...`
- **Billing**: Whop API (`whop.com/api`) supports webhook `subscription.created` and `subscription.cancelled` events. Free plan available for small volumes.
- **Landing page**: Target exact-match keywords: `"[product category] restock alerts [year]"`. Claude Code can generate and deploy a 3-page Next.js site in ~1 hour.
- **Niche selection criteria**: Community size (subreddit >50K members), scarcity (products that regularly sell out), price range ($30–$200 per item = high subscriber motivation), no existing dedicated alert service.
- **Multi-niche stacking**: Same pipeline serves unlimited niches. Each new niche = 1 new n8n workflow + 1 new Whop product + 1 new landing page. After first niche is profitable, agent clones and deploys for second niche autonomously.
- **Rate of live validation**: The r/passive_income poster has 32 paying subscribers without any SEO. With a proper landing page this could reach 150–300 subscribers per niche within 6 months.

## Open Questions

- What's the churn rate on niche alert subscriptions once people get what they want (successful purchase)? Model may need to expand to 50–100 SKUs per niche to maintain ongoing relevance.
- Can the Apify actor run continuously on a schedule without hitting compute cost limits at <$10/mo? (Expected yes at 1 call/30 min per 20 URLs.)
- Does Whop's free tier support webhooks, or is a paid plan required? (Starter at $0/mo but 3% fee; Pro at $39/mo removes fee — breakeven at ~$1,300 MRR.)
