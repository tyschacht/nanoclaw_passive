---
title: "Idea: Indie Launch Intelligence API"
date: 2026-06-13
tags: [passive-income, agentic, viable, data-api, indie-launches, mpp, product-hunt, intelligence-service]
---

# Indie Launch Intelligence API

## What It Is

The indie developer launch space (Product Hunt, Show HN, PeerPush, BetaList) generates a continuous stream of structured public data: new products launched, their tech stacks, categories, problem descriptions, target customers, and founder identities. A Show HN post (StackScope, 57 pts, June 12 2026) validated the market: a solo developer built a crawler of 40K+ indie launches and got immediate demand for enrichment features — specifically product category, problem being solved, competitive clustering, and trend narrative — that pure stack-detection tools don't provide.

The business model: an AI agent continuously crawls Product Hunt new launches, Show HN posts, and PeerPush listings; classifies each launch using an LLM (category, problem, target customer, competitor set); stores enriched data in a structured database; and exposes it as a paid API subscription or weekly intelligence briefing. Buyers: developer-tool vendors doing TAM research, VCs tracking emerging categories, accelerators benchmarking cohorts, and founder researchers identifying market gaps.

This is a data product, not a service — the agent builds the asset continuously, and paying customers pull from it passively. Revenue is fully passive after the crawler and API are running. Distribution can stack across MPP (per-call billing), MCPize (MCP server listing), and direct subscriptions via Stripe/Whop.

## How an Agent Does It

1. **Continuous crawl (daily, automated):** Agent polls Product Hunt API (`api.producthunt.com/v2`) for new launches (free tier: 600 req/min). Polls HN Algolia API (`hn.algolia.com/api`) for Show HN posts. Polls PeerPush (RSS feed, no auth required). Extracts product URL, name, description, tagline, vote count, and maker profiles.

2. **Page crawl and fingerprint:** For each new product URL, agent fetches the landing page HTML. Extracts: key value propositions from headline/subhead, pricing tier (free/freemium/paid), technology signals (Tailwind, Next.js, Supabase, etc.), country/language signals, social proof indicators.

3. **LLM enrichment (per new launch):** Agent sends crawled data to Claude API with a structured classification prompt. Outputs: product category (B2B SaaS / consumer app / developer tool / data product / etc.), primary problem solved (1 sentence), target customer archetype, 3 competitor slugs, and a "novelty flag" (is this a known pattern or genuinely new?).

4. **Database write:** Enriched record stored in Postgres or Supabase (managed, low ops). Indexed by category, date, tech stack, novelty flag.

5. **API exposure (passive income):** Agent exposes a JSON REST API (Cloudflare Worker + D1 or Supabase REST). Routes: `GET /launches/recent`, `GET /launches/category/{slug}`, `GET /launches/trending`, `GET /launches/{id}/competitors`. Monetized via MPP (`npm install mppx` — 15 lines of code) for per-call billing, OR via MCPize for MCP marketplace listing, OR Stripe subscription tier.

6. **Weekly briefing (optional high-value tier):** Agent runs scheduled job (Anthropic Routines or cron on Cloudflare) — aggregates last 7 days, generates a structured markdown briefing ("This week in indie launches: 47 AI tools launched, productivity is up 18% vs prior week, 3 novel mechanisms spotted"), emails or posts to Telegram channel. Paid subscribers receive the briefing.

7. **Discovery and marketing (passive):** List API on api.market, Rapid API, MPP marketplace (mpp.dev), and MCPize. Cross-list as a Gumroad digital dataset (weekly data export). SEO landing page targeting "indie launch trends API."

## Source

- Show HN: 48505364 — "StackScope – I crawled over 40k indie launches to see what they ship" (57 pts, June 12 2026)
- HN top comment by "idid": "Would love market category / domain / application... any combo that tells me what the product does" — explicit demand validation for LLM enrichment layer
- r/AIIncomeLab comment thread (score 117, June 6 2026): "Building APIs that agents can call is the way to make money moving forward" — corroborating signal
- Product Hunt API docs: api.producthunt.com/v2/docs
- HN Algolia API: hn.algolia.com/api

## Scores

| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 7 | Crawl + classify + store + serve is fully autonomous; initial API scaffolding requires ~4 hrs of setup but then runs headlessly on Cloudflare Workers + Routines |
| Setup effort | 5 | Product Hunt API requires OAuth app approval (< 1 day); Supabase/Cloudflare setup ~2 hrs; MPP integration ~30 min; total ~4-6 hrs human setup |
| Yield potential | 6 | Per-call: $0.01–$0.05/query → needs volume to matter; subscription: 10 × $49/mo = $490/mo baseline; weekly briefing: 50 × $9/mo = $450/mo; realistic $200–600/mo within 60 days with cross-listing |
| Risk | 9 | Public data only (Product Hunt public API, HN public, PeerPush RSS); no ToS issues; standard data product risks (competitors can replicate) |
| **Overall** | **6.75** | Clean agentic mechanism; data compounds over time (historical database = moat); differentiation is LLM enrichment layer that pure stack-crawlers don't provide |

## Implementation Notes

**Key APIs:**
- Product Hunt API v2: `api.producthunt.com/v2` — requires OAuth app (free, instant approval); 600 req/min free tier
- HN Algolia: `https://hn.algolia.com/api/v1/search?query=Show+HN&tags=show_hn&hitsPerPage=100` — no auth, no rate limits documented
- PeerPush RSS: `peerpu.sh/rss` — no auth required
- BetaList: HTML crawl only (no public API); use Playwright/Puppeteer

**Monetization stack:**
- MPP per-call billing: `npm install mppx` — wraps any HTTP handler; Stripe USD settlement; discovery via mpp.dev listing
- MCPize: list the API as an MCP tool for AI agent buyers (agenticmarket.xyz cross-listing)
- Whop: sell weekly data export CSV as a $19/week digital product (auto-generated by agent)
- Gumroad CLI: `gumroad products create` — one-time setup for dataset sales

**Compute and storage:**
- Cloudflare Workers (free tier: 100K requests/day) — adequate for API serving
- Cloudflare D1 (SQLite at edge, $5/mo) — sufficient for 40K+ records + ongoing updates
- Anthropic Claude Haiku for classification: $0.25/M input tokens — classifying 50 launches/day ≈ $0.03/day

**Moat considerations:** StackScope already exists and is free. The moat is (1) the LLM enrichment layer, (2) historical depth accumulating over time, (3) trend narratives and competitive clustering that raw crawlers don't provide, and (4) API/programmatic access that StackScope explicitly lacks.

## Open Questions

- Is Product Hunt API approval genuinely instant, or does it require a review period that delays crawl start?
- Does PH API provide real-time new launch webhooks, or only polling (polling acceptable but adds latency)?
- What is the actual buyer willingness-to-pay for indie launch intelligence APIs? StackScope comments reveal demand but not price tolerance — could test with a $9/mo Substack before building the full API
- Would Claude Haiku classification quality be sufficient for commercial use, or does the nuance of "novelty flag" scoring require Sonnet 3.7?
