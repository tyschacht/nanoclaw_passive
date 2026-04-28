---
title: "Idea: Class Action Settlement Autopilot"
date: 2026-04-28
tags: [passive-income, agentic, viable, gmail-api, saas, legal, subscription, whop]
---

# Class Action Settlement Autopilot

## What It Is

Only 9% of eligible people actually claim class action settlements — the FTC's own median. That means 91% of court-ordered settlement money goes unclaimed, either reverting to defendants or cy pres funds. The gap exists because: (1) people don't know about settlements they qualify for, (2) settlement notification emails routinely land in spam, and (3) filling out claim forms is tedious.

An agent can close this gap as a monetizable SaaS. The mechanism: maintain a live database of open class action settlements by scraping topclassactions.com (RSS feed), classaction.org, and settlement-specific domains; connect to users' Gmail via OAuth to scan their inbox *and* spam folder for settlement notification emails (data breach notices, product recall alerts, etc.); cross-reference the user's email history against settlement eligibility criteria (date ranges, product purchases, geographic requirements); surface matching settlements with pre-filled claim URLs. Revenue model: subscription ($5–10/month) or commission on recovered funds (15–25% collected only after payout). The builder posting this on r/AIIncomeLab stated 91% unclaimed rates and that their commission model "charges after you get paid instead of a monthly subscription."

Existing competitors (Lantern by Labaton Sucharow) are law firm–owned apps focused only on their own firm's cases. No indie service covers the full settlement universe with Gmail integration and auto-notification.

## How an Agent Does It

1. **Daily settlement DB update** — scheduled scraper polls topclassactions.com/category/lawsuit-settlements/open-lawsuit-settlements/ (RSS available), classaction.org/settlements, and FTC settlement pages. Parses each settlement for: eligibility requirements, claim deadline, average payout, claim form URL. Stores structured records in a database.
2. **Gmail scan on user onboard** — on user OAuth connect, agent uses Gmail API (readonly scope) to search for settlement-related emails: keywords like "settlement", "class action", "data breach", "claim", filtered by sender domain patterns. Scans both inbox and spam. Extracts claim IDs from email bodies.
3. **Eligibility matching** — agent cross-references user's email history (product purchase receipts, account creation confirmations, service use emails) against each open settlement's eligibility window. E.g. "purchased Tom's of Maine toothpaste between Nov 2020–Mar 2026" → match Gmail receipts from retailers.
4. **Notification + pre-fill** — generates a personalized digest of matching settlements with claim form URLs pre-populated with the user's data (name, email, address) where possible. Sends weekly email summary.
5. **Auto-filing (optional advanced tier)** — Playwright/Puppeteer browser automation fills and submits claim forms for standard settlement types. Agent handles the most common form patterns (name, email, checkbox eligibility, submit). Builder confirmed each form type takes ~20 hours to automate; prioritize highest-payout settlement categories first.
6. **Commission tracking** — for commission model: agent sends reminders at expected payout dates, user confirms receipt via webhook or email reply, Stripe invoice triggered for 20% of stated recovery.
7. **Whop listing** — list basic tier ($5/month, email scan + notifications) and premium tier ($10/month or 20% commission, includes auto-filing). Whop handles billing; agent handles everything else.

## Source

- Reddit: r/AIIncomeLab post "Idea for settlement claims tracking tool" (u/ builder, score 1, April 2026) — https://reddit.com/r/AIIncomeLab/comments/1sxs1pl/
- Reddit: r/passive_income "Make a little money from class actions" (score 37, April 2026) — https://reddit.com/r/passive_income/comments/1sxj4n9/ — validates real user demand and 91% unclaimed stat
- TopClassActions.com — settlement database source (RSS feed available)
- Lantern by Labaton Sucharow (lantern.labaton.com) — existing law-firm competitor; confirms commission model is accepted in this space

## Scores

| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 8 | Gmail API polling, settlement scraping, eligibility matching all fully headless; auto-filing via Playwright adds agentic filing; commission confirmation needs one human email reply |
| Setup effort | 5 | Settlement DB scraper + Gmail API integration is ~40–60 hrs; each auto-filing workflow is ~20 hrs more; prioritize 10 highest-payout settlement categories |
| Yield potential | 6 | Subscription: $5/mo × 500 users = $2,500/mo (~$580/wk); commission: 200 users × 4 claims/yr × $20 avg payout × 20% = $3,200/yr (~$60/wk) — hybrid model best |
| Risk | 7 | Settlement claiming is 100% legal; Gmail OAuth requires privacy policy and Google OAuth review; commission model standard for legal services; no ToS issues with public settlement data |
| **Overall** | **6.5** | Validated demand, real mechanism, defensible niche vs law-firm competitors |

## Implementation Notes

- **Gmail API**: `gmail.readonly` scope is sufficient; no need for broader access. Google OAuth verification required for production (sensitive scope review — allow ~2 weeks)
- **Settlement data sources**: topclassactions.com has RSS at /feed; classaction.org/settlements is scrapeable; pacer.gov for federal court filings
- **Playwright auto-filing**: Use Apify Actor for managed browser automation with `Actor.charge()` PPE billing — aligns auto-filing cost with per-claim revenue
- **Database**: Postgres with JSONB for flexible settlement eligibility schema; one row per open settlement
- **Claim form variety**: Each settlement has a unique claim URL (e.g., toothpastesettlement.com, powerschoolnaviancesettlement.com). The agent only needs to know the URL + basic form fields — no per-site scraping required
- **Commission collection**: Stripe Payment Links with a self-reported amount field; honor system with payout confirmation email match as secondary check
- **Whop Files API**: Use to distribute weekly settlement digest PDF to subscribers
- **Existing competition**: Lantern (law firm, only their cases), DoNotPay (shutdown), various browser extensions (not agentic). No direct Gmail-scanning indie service confirmed live

## Open Questions

- Does Google's OAuth review for `gmail.readonly` (sensitive scope) approve this use case? Need privacy policy + demo app review — timeline 2–4 weeks
- What is the realistic claim success rate when auto-filing? Need to test 10–20 settlement form types before launching auto-filing tier
- Can commission confirmation be automated via email parsing, or does it require user action? If user action required, default to subscription model only
- What is the churn rate for a settlement-focused subscription? Users may cancel after claiming their initial batch — need ongoing fresh settlement volume to retain
