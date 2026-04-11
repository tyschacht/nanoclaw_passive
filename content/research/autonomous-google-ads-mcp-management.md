---
title: "Idea: Autonomous Google Ads Management via MCP"
date: 2026-04-10
tags: [passive-income, agentic, viable, google-ads, mcp, b2b-service, ppc]
---

# Autonomous Google Ads Management via MCP

## What It Is

Google Ads management is a $5B/year agency industry where businesses typically pay $500–$2,000/month for a human to optimize their campaigns. In March 2026, the open-source **cohnen/mcp-google-ads** MCP server added write operations — meaning a Claude Code agent can now not only audit a Google Ads account but actually execute changes: create campaigns, modify bids, pause underperforming keywords, adjust budgets, and generate responsive search ad variants.

This unlocks a fully agentic PPC management service that costs the client $400–$800/month and requires zero ongoing human labor on the service-provider side after OAuth setup. The agent connects to the client's Google Ads account via developer token + OAuth2, runs a weekly audit using the 7-dimension scorecard (wasted spend, match type hygiene, ad strength, conversion tracking, impression share, Quality Score, ROAS), implements approved changes via the API, and delivers a plain-English report automatically.

The technical foundation is solid: the Google Ads API is a production REST API, fully documented, with write operations covering CampaignService, AdGroupCriterionService, AdGroupBidModifierService, BudgetService, and KeywordPlanService. The cohnen/mcp-google-ads MCP server wraps all of this behind natural-language Claude Code prompts, eliminating the need to hand-write API requests.

## How an Agent Does It

1. **OAuth setup (once per client)**: Agent walks through a CLI-prompted OAuth2 flow to capture `refresh_token` for the client's Google Ads account. Stored securely in environment variables.
2. **Weekly audit trigger**: Cron job or Claude Code `--schedule` flag fires every Monday morning.
3. **Data pull**: Agent queries the Google Ads API for the last 90 days of campaign, ad group, keyword, and ad performance data via GAQL queries through the MCP tool.
4. **7-dimension audit**: Agent scores each dimension, identifies specific waste (e.g., "keyword [cheap flight tickets] has 0 conversions at $847 spend — pause immediately").
5. **Change execution**: Agent calls MCP write tools to pause high-waste keywords, lower bids on low-ROAS ad groups, create RSA copy variants for underperforming ads, and reallocate budget to top-performing campaigns.
6. **Report generation**: Agent formats a Markdown report → converts to PDF or sends via email API (SendGrid/Mailgun).
7. **Client delivery**: Report delivered to client email automatically. No human touches the workflow.

## Source

- GitHub: [cohnen/mcp-google-ads](https://github.com/cohnen/mcp-google-ads) — MCP server with confirmed write operations
- Reddit: r/SideProject post `1si35g4` (April 10 2026) — "toprank" plugin author describes 4-minute audit replacing 3-hour manual process via Google Ads API
- get-ryze.ai: "Claude + Google Ads MCP: The Future of AI PPC Management" (April 2026) — integration guide
- stormy.ai: "How to Automate Google and Meta Ads with Claude Code" (April 2026) — deployment playbook

## Scores

| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 7 | cohnen/mcp-google-ads write operations confirmed; agent executes changes via API; OAuth setup is one-time per client |
| Setup effort | 4 | Google Ads developer token requires formal application + approval (1–2 weeks); OAuth per client adds friction; MCP install is straightforward (`npm install`) |
| Yield potential | 8 | $400–$800/mo per client; at 10 clients = $4K–$8K/mo; PPC agencies typically charge $1K–$3K/mo so this undercuts market significantly |
| Risk | 5 | Agent errors can waste client budget (real financial liability); Google Ads ToS requires disclosed automated management; dynamic markets may need human override; smart contract-style liability exposure |
| **Overall** | **6.0** | Meets VIABLE threshold (agentic ≥ 6, overall ≥ 6); best paired with existing lead-gen pipelines for client acquisition |

## Implementation Notes

**MCP Server Setup:**
```bash
npm install -g mcp-google-ads
# or clone cohnen/mcp-google-ads and install dependencies
```

**Required credentials:**
- Google Ads Developer Token (apply at developers.google.com/google-ads/api/docs/get-started/dev-token; approval takes 1–2 weeks)
- OAuth2 client credentials (GCP console)
- Customer ID for each managed account
- Optional: Manager account (MCC) for multi-client management

**Key API write operations (via MCP):**
- `campaigns.mutate` — enable/pause campaigns, modify budget
- `adGroupCriteria.mutate` — add/remove keywords, adjust keyword bids
- `ads.mutate` — create RSA (Responsive Search Ad) variants
- `campaigns.suggestSmartCampaignBudget` — budget optimization
- `keywordPlanCampaigns.mutate` — keyword planning

**Client acquisition** (compatible with existing VIABLE pipelines):
- [[ai-google-reviews-b2b-lead-intel]] — already identifies businesses with weak online presence; same companies likely run Google Ads
- [[geo-llm-brand-monitoring-agent]] — GEO monitoring clients already trust you with brand intelligence; upsell to Ads management

**SKILL.md pattern (weekly agent loop):**
```
Load google-ads MCP
Connect to account {CLIENT_CUSTOMER_ID}
Retrieve 90-day performance report via GAQL
Score against 7-dimension audit checklist
Identify keywords with 0 conversions and spend > $100 → pause
Lower bids on ad groups with ROAS < 1.5
Create 3 RSA variants for ads with Ad Strength < "Good"
Send weekly report via {SENDGRID_API_KEY}
```

**Pricing:** Position at $400–$600/mo for accounts spending $2K–$10K/month on ads. Target: SMBs where an agency is too expensive but self-management wastes 20% of budget.

## Open Questions

- Does Google Ads ToS explicitly require "meaningful human review" of all automated changes? (Check: [Google Ads API terms](https://developers.google.com/google-ads/api/docs/get-started/dev-token))
- What is the liability exposure if an agent accidentally pauses a client's main campaign during peak season?
- Is there a configuration that requires client approval before changes are applied (two-phase: audit → approve → execute)?
- How does this interact with Google's Smart Bidding (AI-vs-AI scenario where both Google's algo and your agent are adjusting bids)?
- Can a manager account (MCC) token service multiple clients without separate OAuth flows?
