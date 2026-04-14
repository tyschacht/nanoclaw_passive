---
title: "Idea: Reddit Real-Time Buyer Intent SaaS"
date: 2026-04-14
tags: [passive-income, agentic, viable, reddit, saas, lead-generation, b2b]
---

# Reddit Real-Time Buyer Intent SaaS

## What It Is

An agent continuously monitors high-traffic subreddits for posts where people are actively and explicitly seeking a product or service — right now. Unlike Google Reviews mining (which surfaces historical dissatisfaction) or cold outreach (which targets passive prospects), this captures *in-the-moment buying signals*: "Looking for a CPA who specialises in small business taxes," "Anyone know a reliable plumber in Austin?", "Need a graphic designer for a logo today." The agent scores each post for buyer intent, extracts contact context, and fires a real-time alert to a subscribed business.

This is the same model as Leadverse.ai, a solo-built tool that crossed $1,900 MRR in ~7 months. The Reddit API (read access) allows programmatic subreddit monitoring with no per-call cost. The LLM classification layer is inexpensive — a Claude Haiku call per post costs under $0.001. Clients pay a monthly SaaS fee for continuous monitoring of specific subreddits matching their service category. The agent does the monitoring, scoring, and alerting; humans only appear in the initial sales step.

The income is recurring. A plumber paying $99/month for "any post in r/Austin, r/DFW, r/houston mentioning a plumbing issue" generates reliable monthly revenue from a single sale. At 20 clients, that is $2,000/month. The marginal cost per additional client is near zero — the same agent loop serves all clients.

## How an Agent Does It

1. Client onboarding: Claude Code agent receives a webhook from a Stripe checkout → reads the order metadata (subreddits to monitor, keywords, business category) → writes a config row to a Postgres/Supabase table → immediately starts serving that client's feed.

2. Polling loop (runs every 2–5 minutes): Agent calls Reddit API (`/r/{subreddit}/new.json?limit=25`) for each monitored subreddit → filters posts newer than last-seen timestamp → stores new post IDs to prevent duplicate processing.

3. Intent classification: Each new post title + body is sent to Claude Haiku with a one-shot prompt: "Rate this post's buyer intent for a {business_category} on a scale 1–10 and return JSON." Posts scoring ≥7 continue; others are discarded.

4. Alert delivery: For high-intent posts, agent composes a brief alert (post title, URL, excerpt, intent score) → sends via Resend/SendGrid API to the client's email, or via Slack webhook if the client has integrated Slack. Delivery is immediate, typically within 5 minutes of the original post.

5. Weekly digest (optional upsell): Agent aggregates the week's alerts, generates a summary report with top opportunities and conversion tips, and emails it every Monday morning. This is a higher-tier feature ($199/month).

6. Client renewal: Stripe handles subscription billing automatically. If a card fails, agent flags the client account and pauses monitoring after a 7-day grace period — no human billing intervention needed.

## Source

- Leadverse.ai case study: https://reddit.com/r/AiAutomations/comments/1rwdzn5/ (score 189, April 2026)
- Revenue verification: https://trustmrr.com/startup/leadverse ($1,900 MRR documented)
- Reddit Data API: https://www.reddit.com/dev/api/

## Scores

| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 8 | Monitoring + scoring + alerting is fully autonomous; client acquisition is human but can pair with existing Google Reviews cold email pipeline |
| Setup effort | 6 | Reddit OAuth setup, Supabase config, LLM call, email delivery — ~1 weekend of Claude Code work |
| Yield potential | 7 | $1,900 MRR solo-proven; 20 clients at $99/mo = $2K/mo; ceiling $5–10K/mo at 50–100 clients with tiered pricing |
| Risk | 8 | Reddit API read access is explicitly permitted; no scraping needed; no ToS risk on monitoring-only pattern |
| **Overall** | **7.25** | |

## Implementation Notes

- Reddit API auth: register an app at reddit.com/prefs/apps → use OAuth2 Client Credentials flow (no user login needed for public subreddit reads). Rate limit: 60 requests/minute — sufficient for 10–20 active subreddits per client.
- Best vertical targeting: trades (plumbing, HVAC, electrical), legal (r/legaladvice adjacent), accounting (r/personalfinance, r/smallbusiness), healthcare/dental, home services. Each vertical has dedicated subreddits + geographic subs (r/Austin, r/Chicago, etc.).
- Classification prompt: include the business category and 3 example high-intent posts in the system prompt for few-shot accuracy. Claude Haiku at $0.80/1M tokens = ~$0.001 per classification → negligible at volume.
- Pair with cold email pipeline from [[ai-google-reviews-b2b-lead-intel]] to automate client acquisition: find businesses in target category → send personalized pitch with a sample alert from their local subreddit → close on $99/month.
- Stack: Reddit API + Supabase (config/state) + Claude Haiku (classification) + Resend (email delivery) + Stripe (billing). All have free tiers that cover initial build.
- Differentiation over Leadverse: focus on a single vertical (e.g., trades only) rather than general; or offer subreddit + geographic combinations that Leadverse doesn't surface.

## Open Questions

- What subreddits produce the highest conversion rate for which service categories? (Validate with 30-day test before selling.)
- Does Reddit's API ToS permit running alerts for commercial clients, or does it require a paid Enterprise Data API agreement? Check: https://www.redditinc.com/policies/data-api-terms — read-only access for non-commercial use is free; commercial use with monetization likely requires Enterprise Data API ($0.24/1K API calls, no hard ceiling documented as of April 2026).
- Churn rate: how many businesses get 1 alert, convert no leads, and cancel within 30 days? Test with 5 pilot clients before scaling.
- Can client acquisition itself be automated via the [[affitor-autonomous-affiliate-pipeline]] or [[ai-google-reviews-b2b-lead-intel]] cold email loop?
