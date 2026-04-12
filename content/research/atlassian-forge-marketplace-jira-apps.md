---
title: "Idea: Atlassian Forge Marketplace — AI-Built Jira/Confluence Apps"
date: 2026-04-12
tags: [passive-income, agentic, viable, enterprise, atlassian, jira, forge, marketplace]
---

# Atlassian Forge Marketplace — AI-Built Jira/Confluence Apps

## What It Is

The Atlassian Marketplace hosts apps for Jira, Confluence, Trello, and other Atlassian products — used by 250,000+ paying companies. Since January 2026, Atlassian restructured its revenue share: "Runs on Atlassian" Forge apps receive *100% of revenue* up to $1 million in lifetime earnings (0% platform fee). Standard Forge apps pay 16% to Atlassian, keeping 84%. By contrast, Shopify takes 20% and Apple takes 30%.

Forge is Atlassian's serverless app framework built on AWS Lambda under the hood. Developers write TypeScript/JavaScript, use the Forge CLI to deploy, and apps run entirely on Atlassian infrastructure. Billing, distribution, and customer management are all handled by Atlassian. Enterprise companies subscribe monthly at $5–$50+ per seat, and a single 100-seat Jira instance paying $10/seat = $1,000/month for the app developer.

## How an Agent Does It

1. Agent scans Atlassian Marketplace for underserved niches — low-review apps in high-value categories (reporting, automation, AI-assisted triage, analytics)
2. Agent writes the Forge app in TypeScript using the Forge SDK (`@forge/api`, `@forge/ui`, `@forge/resolver`) — Claude Code with the official Forge MCP Server for grounded development
3. Agent runs `forge deploy` and `forge install` to push to production and test on a dev Atlassian site
4. **One-time human step**: Submit listing via Atlassian Marketplace Partner Portal (~15 min form fill, 1-week review)
5. After approval, agent handles all subsequent versions via `forge deploy` + `forge publish` (fully CLI-driven)
6. Revenue flows monthly from Atlassian's billing system; no payment infrastructure needed

## Source

- Atlassian Blog: "Runs on Atlassian Apps Can Now Take Home 100% of Marketplace Revenue" (Oct/Jan 2026)
- Atlassian Developer Community: "Marketplace revenue share updates: 2026" thread
- Forge MCP Server: developer.atlassian.com/platform/forge/forge-mcp/
- Forge Platform Pricing: developer.atlassian.com/platform/forge/forge-platform-pricing/

## Scores

| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 7 | CLI-driven build+deploy; one-time human listing per app; updates fully agentic |
| Setup effort | 5 | Forge TypeScript framework has learning curve; Forge MCP Server helps a lot |
| Yield potential | 8 | 250K+ paying enterprise companies; $5-50/seat/mo; 100% rev share to $1M |
| Risk | 9 | Enterprise platform, 20+ year Atlassian track record, legit developer program |
| **Overall** | **7.25** | Best enterprise app store yield combined with best-in-class revenue share |

## Implementation Notes

**CLI setup:**
```bash
npm install -g @forge/cli
forge login
forge create my-jira-app --template jira-hello-world
forge deploy
forge install --site your-dev-site.atlassian.net
```

**Forge MCP Server**: Exposes authoritative Forge + Atlassian Cloud knowledge to Claude Code. Dramatically reduces hallucinations when writing Forge apps. Add to Claude Code config at developer.atlassian.com/platform/forge/forge-mcp/.

**"Runs on Atlassian" badge requirement**: App must contain no Connect modules, use OAuth authentication, and use Forge UI components. Meeting all three = 100% revenue share up to $1M lifetime.

**Platform compute costs**: Very low for simple apps. Free tier: 100,000 GB-seconds of compute/month, 1 GB logs, 730 GB-hours SQL storage. Most lightweight apps never exceed free tier.

**High-signal niches** (underserved on Marketplace as of April 2026):
- AI-powered sprint retrospective generator (Jira)
- Automated meeting notes → Confluence integration
- AI ticket triage and priority scorer
- Slack conversation → Jira ticket converter
- Custom dashboard widgets with LLM-generated insights

**Pricing strategy**: Monthly subscription model. Tier by Jira user count (1-10 users free, 11-100 = $X/month, 101+ = $Y/month). Atlassian handles the billing tiers via their Licensing API.

**Revenue estimator**: If your app charges $5/user/month and lands 5 companies with 50 users each = $1,250/month at 100% rev share.

## Open Questions

- Does the Atlassian Partner Portal listing form require any live demo or human interaction beyond the form fill?
- How long does the 1-week review typically take for AI-generated Forge apps?
- Does the Forge MCP Server fully cover all Forge SDK modules, or are there gaps?
- What percentage of "Runs on Atlassian" badge applicants get approved?
