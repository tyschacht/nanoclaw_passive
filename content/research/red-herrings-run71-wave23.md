---
title: "Red Herring: LinkedIn Automation Income Cluster"
date: 2026-05-18
tags: [passive-income, not-viable, red-herring, linkedin, automation, tos-violation, saas]
---

# LinkedIn Automation Income Cluster — Not Viable

## What It Claims to Be

Three related signals converged this run around LinkedIn as an agentic income surface. First: an r/AiAutomations post (score 52, May 15 2026) about a developer who "accidentally built a $60k/year SaaS" by creating Claude agents that monitor LinkedIn for buying signals (SDR hiring posts, competitor engagement, niche comment threads), score leads against an ICP, and automatically start personalized LinkedIn conversations. Second: HN Show HN 48153575 (5 pts, May 11 2026) for "Allman" — a MIT-licensed CLI that reverse-engineers LinkedIn's messenger inbox using Claude Code + Playwright, enabling AI to handle LinkedIn DMs like email. Third: the broader market of LinkedIn AI SDR platforms ($40–80/mo/seat SaaS, multiple vendors) validates real buyer demand for automated signal-based outreach.

## Why It Doesn't Work Agentically

- **LinkedIn User Agreement Section 8.2 explicit ban:** "You agree that you will not... use bots or other automated methods to access the Services, add or download contacts, send or redirect messages." The automated conversation-starting step is a direct ToS violation. LinkedIn has sued Hiretual, HireEZ, and multiple other scraping/automation vendors. Commercial platforms Dripify, Expandi, and MeetAlfred are continuously blocked and forced into cat-and-mouse workarounds; accounts using them face permanent bans.
- **Allman is a fragile reverse-engineering hack:** The creator explicitly notes "their sharding/access is brutal, so it'll likely break as-is." Reverse-engineered endpoints break on every LinkedIn frontend deploy. Not production-stable enough to build an income mechanism on.
- **The $60k/year "SaaS" isn't passive by nature:** The product is sold to sales agencies that operate it manually — the human sales rep must review leads and decide which to contact. Automating the contact step would expose *those clients* to account bans, creating liability. The income from selling the SaaS is also audience-dependent (you still need to acquire customers).
- **Even "signal detection" violates robots.txt:** Monitoring LinkedIn public posts at scale via scraping violates their crawling policies. LinkedIn's public search API (via v2/search) is gated to approved partner use cases; bulk buying-signal monitoring is not an approved use.

## Scores

| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 6 | Technically automatable in isolation but operationally fragile; accounts ban in days |
| Setup effort | 5 | Claude agents + Playwright + scoring logic — moderate complexity |
| Yield potential | 6 | $60k ARR case study is real but requires customer acquisition for the SaaS model |
| Risk | 2 | LinkedIn ToS violation, account ban risk, potential C&D or litigation |
| **Overall** | **4.75** | Risk score alone disqualifies; pattern identical to x-twitter-autonomous-account-agent |

## Source

- Reddit: r/AiAutomations post 1te5c3h (score 52, May 15 2026) — "$60k/year LinkedIn signal SaaS"
- HN: 48153575 Show HN: MIT OSS LinkedIn DMs for Agents — Allman CLI (tarkaai/allman-cli, 5 pts, May 11 2026)
- Web: LinkedIn User Agreement Section 8.2, konnector.ai LinkedIn automation analysis (May 2026)

## Red Herring Pattern

Same family as `x-twitter-autonomous-account-agent` (automated social media account bans). LinkedIn is *more aggressive* than Twitter/X about automation bans — they have sued vendors, not just suspended accounts. Any income mechanism that requires autonomous LinkedIn messaging is blocked at the ToS layer regardless of how clever the signal detection is. Add to permanent red herring filter: "LinkedIn automation for income = ToS ban."
