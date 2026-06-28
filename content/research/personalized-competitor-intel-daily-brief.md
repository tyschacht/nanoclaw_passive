---
title: "Idea: Personalized Competitor Intelligence Daily Brief"
date: 2026-06-28
tags: [passive-income, agentic, viable, n8n, saas, competitor-monitoring, b2b, subscription]
---

# Personalized Competitor Intelligence Daily Brief

## What It Is

Small businesses and DTC brands pay $200-500/month for tools like SEMrush and Ahrefs to track competitors — but those tools produce raw dashboards that require manual interpretation. The gap: an automated service that watches a client's specific competitor set and delivers a plain-English daily or weekly brief by email, telling them exactly what changed and why it matters.

The mechanism is a self-serve SaaS: a client signs up via a landing page, enters their company URL and 3-5 competitor URLs, pays via Stripe, and the agent handles the rest. Every morning (or weekly) the agent scrapes competitor sites (pricing pages, product pages, blog/press pages, job boards) via SerpAPI + Apify, runs Claude synthesis to identify material changes, and emails a 200-word brief: "Competitor A dropped their Pro plan to $49. Competitor B published 3 blog posts targeting your main keyword. Competitor C is hiring for VP Sales (expansion signal)."

This is fundamentally different from the existing [[n8n-data-intelligence-subscription]] viable report (which is a generic market digest sent to all subscribers) — here, each client's monitoring is configured to *their* specific competitors. The value-add per client is 10x higher, and so is the price.

## How an Agent Does It

1. *Landing page + free trial*: Agent deploys a Claude Code-built landing page (Vercel). Visitor enters their company URL + 3-5 competitor URLs. Agent immediately runs a sample competitor scan and emails a free 1-day brief to demonstrate value.
2. *Stripe subscription gate*: On receipt of free brief, agent sends follow-up email with Stripe payment link ($97-197/mo). Stripe webhook activates client's monitoring workflow.
3. *Daily monitoring cron (n8n)*: For each active client, a scheduled n8n workflow fires at 6am: scrapes competitor URLs via Apify (pricing, blog, job listings, press pages), computes diff vs. prior day's snapshot (stored in Supabase), passes changes to Claude for synthesis.
4. *Brief generation*: Claude generates a 150-250 word email brief in plain English — no dashboards, no CSV exports, just "here's what you need to know." Tone tuned to client's industry on signup.
5. *Email delivery*: Brief sent via Resend/Sendgrid. If zero material changes, agent sends a reassuring "No significant changes from your competitors today" message.
6. *Client self-service portal*: Minimal Next.js UI (agent-built) for clients to add/remove competitors and adjust alert thresholds. All changes propagate to n8n workflow config in Supabase.
7. *Churn reduction loop*: If a client hasn't opened their last 5 emails, agent sends a "We noticed you haven't been reading your briefs — want to switch to weekly?" outreach via email.

## Source

Surfaced from r/AiAutomations (post 1t1p6dw, 26 pts, May 2026): builder documented n8n + SerpAPI + Groq + Google Sheets + Gmail competitor monitoring pipeline for clients at $50-200/client/mo. Watchlist entry since May 2026, elevated to VIABLE in June 28 research run after confirming distinct mechanism from existing reports and validating market gap (SMBs pay $200-500/mo for SEMrush/Ahrefs; done-for-you narrative brief is underserved).

## Scores

| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 7 | Fully autonomous post-onboarding. Client self-serve via form; no human needed in delivery or monitoring loop. Discovery via SEO is agentic over time. |
| Setup effort | 5 | Claude Code builds n8n workflow + landing page + Stripe + Supabase + Apify integration. Realistically 1-2 weeks of agent work. Non-trivial. |
| Yield potential | 6 | At $97-197/mo per client: 5 clients = $500-1K/mo. 20 clients = $2-4K/mo. Realistic ceiling without paid acquisition. |
| Risk | 8 | SerpAPI ToS permits automated competitor research. Apify ToS fine for public-page scraping. No legal risk. Low financial risk. |
| **Overall** | **6.5** | Above VIABLE threshold. Distinct from existing library entries. |

## Implementation Notes

*Tech stack:*
- *n8n (self-hosted on Railway/Fly.io)*: scheduling + workflow orchestration + email delivery
- *SerpAPI ($50/mo)*: Google search for competitor news/press
- *Apify ($49/mo)*: website scraping for pricing/blog/job pages
- *Claude API*: synthesis and brief writing (~$0.01-0.05 per brief)
- *Supabase (free tier)*: client config storage + daily snapshots for diff
- *Vercel (free)*: landing page + light client portal
- *Resend ($20/mo)*: transactional email delivery
- *Stripe*: $97-197/mo subscription billing

*Total infrastructure cost: ~$120-200/mo. Profitable at 2-3 clients.*

*Competitor data sources (free or cheap):*
- Competitor blog: RSS feed polling via n8n native node (free)
- Pricing page changes: Apify web scraper ($0.006/run)
- Job listings: LinkedIn public search via SerpAPI
- Press/news: Google News API via SerpAPI
- Twitter/X mentions: Not recommended (ToS) — skip

*Differentiation from SEMrush/Ahrefs:* Those tools produce raw keyword/backlink data. This produces a *narrative brief* a non-technical founder can read in 60 seconds.

*Cross-sell opportunity:* Pairs naturally with [[ai-google-reviews-b2b-lead-intel]] (Google Reviews pipeline already finds SMB clients who are losing to competitors) and [[geo-llm-brand-monitoring-agent]] (LLM brand mentions).

## Open Questions

- SerpAPI rate limits: 100 searches/mo on free plan. At $50/mo Hobbyist (5,000 searches), can serve ~30 clients at 5 searches/day each. Need to validate scaling math.
- What makes clients NOT churn? Presumably: catching a real competitor move that they acted on. First 90 days = critical to demonstrate value. Could add "competitor caught" success metric to retention loop.
- Does Apify allow scheduled scraping of the same competitor URLs daily without bot detection triggering? Most public-facing pricing/about pages are fine. Authenticated pages are not.
- Is there enough organic SEO traffic for "competitor monitoring email" keywords? Alternative: ProductHunt launch for initial clients.
