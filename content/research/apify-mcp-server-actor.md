---
title: "Idea: Apify MCP Server Actor — Agent-Native Data Tools with Pay-Per-Event"
date: 2026-04-17
tags: [passive-income, agentic, viable, mcp, apify, api, data-tools, pay-per-event]
---

# Apify MCP Server Actor

## What It Is

Apify — the web scraping and automation platform with 100K+ monthly signups — added **MCP Server** as a first-class Actor type in 2026. Instead of building a traditional web scraper, you build a Model Context Protocol server that exposes data tools (e.g., Google Maps lookup, LinkedIn profile fetch, real estate data, company enrichment) and deploy it as an Apify Actor via the same `apify push` CLI command. AI coding assistants (Claude Code, Cursor, Copilot, Gemini CLI) connect to it natively.

The key difference from listing an MCP server on MCPize or AgenticMarket: Apify brings its own 100K+ monthly developer/data user base as built-in buyers. When an Apify user searches for a "LinkedIn MCP tool" or "real estate data MCP," your Actor appears in the Apify Store alongside traditional scrapers. Billing is handled by Apify's pay-per-event system — you call `Actor.charge('lookup', count=1)` per MCP invocation, and Apify's infrastructure handles billing to the end user and your payout at 80% revenue share.

This is meaningfully distinct from the existing [[apify-actor-marketplace]] report (which focuses on traditional scrapers/crawlers for business data) and from the MCPize/AgenticMarket/mcp-marketplace.io cluster (which targets AI developers specifically searching an MCP directory). The Apify MCP actor approach captures a broader, higher-buying-intent audience of data professionals who are already paying for Apify subscriptions.

## How an Agent Does It

1. **Design the MCP server tool spec** — Claude Code designs a set of MCP tools around a data category with clear demand (e.g., `google_maps_enrichment`, `linkedin_company_lookup`, `zillow_property_data`). Aim for 3-10 tools per server.

2. **Write the Actor code** — Claude Code writes a TypeScript/JavaScript Actor using Apify's Actor SDK plus the `@modelcontextprotocol/sdk` package. Each MCP tool handler calls `Actor.charge('toolName', count=1)` before returning results.

3. **Test locally** — Run `apify run` in local mode to validate tools and charge events. No browser needed.

4. **Deploy** — `apify push` deploys headlessly to Apify Cloud. The Actor appears in Apify Store automatically.

5. **Publish as MCP server** — Mark the Actor as an MCP server type in Apify console metadata (one-time web step, ~2 minutes). Set per-event pricing (e.g., $0.01-$0.10 per lookup depending on data value).

6. **Passive earning loop** — Users connect their Claude Code / Cursor to the Actor via the standard MCP URL (e.g., `https://mcp.apify.com/actors/your-actor-name`). Every tool invocation triggers a charge event. Apify handles billing, quota enforcement, and payout.

7. **Update cycle** — Claude Code runs `apify push` on a schedule to fix bugs or add tools. No re-review required for updates.

## Source

- Apify MCP Server Handbook April 2026: https://use-apify.com/blog/mcp-server-handbook-2026
- Apify MCP developer docs: https://apify.com/mcp/developers
- Apify blog: How to Build and Monetize an AI Agent on Apify: https://blog.apify.com/how-to-build-an-ai-agent/
- Discovered through April 2026 web research confirming MCP servers as highest-ROI actor category

## Scores

| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 8 | Claude Code writes + deploys via `apify push` CLI; one-time 2-min web metadata step; updates headless |
| Setup effort | 7 | Actor SDK + MCP SDK integration; need solid data source knowledge; moderate build complexity |
| Yield potential | 7 | Top actors earn $1K-$10K+/mo; MCP actors newer category but Apify's 100K+ users is strong distribution |
| Risk | 8 | Apify ToS explicitly supports this; 80% rev share confirmed; no data ToS risk if sourcing from legitimate APIs |
| **Overall** | **7.5** | Strong distribution advantage vs standalone MCP marketplaces; additive to [[apify-actor-marketplace]] and [[mcpize-paid-mcp-server-marketplace]] |

## Implementation Notes

**Tech stack:**
- Apify Actor SDK: `npm install apify`
- MCP SDK: `npm install @modelcontextprotocol/sdk`
- CLI: `npm install -g apify-cli`, then `apify login`
- Deploy: `apify push` from project directory

**Pay-per-event setup:**
```javascript
import { Actor } from 'apify';
// Inside each MCP tool handler:
await Actor.charge({ eventName: 'lookup', count: 1 });
```

**Pricing guidance:** Set $0.01-$0.05 for simple lookups (email, social profile), $0.10-$0.50 for complex enrichment (full company research, multi-source aggregation). Apify takes 20% + platform costs.

**High-demand categories confirmed by Apify Store data:**
- Google Maps business enrichment
- LinkedIn company/person lookup
- Real estate property data (Zillow/Redfin)
- TikTok/Instagram creator discovery
- Finance/stock data enrichment

**Revenue share mechanics:** 80% of gross revenue after Apify's platform costs. Monthly payouts to bank/PayPal once threshold reached ($50 minimum). Tax forms required once/year.

**Rate limits:** Actor runs are subject to Apify's standard compute quotas; MCP server Actors typically consume minimal compute since each tool call is fast.

## Open Questions

- Does an Apify MCP server benefit from cross-listing on MCPize/AgenticMarket simultaneously, or does double-listing cause issues?
- What's the typical conversion rate of Apify Store browse-to-purchase for MCP server Actors vs traditional scraper Actors?
- Can the Actor metadata/pricing configuration be set via Apify API (fully headless) or is the console step truly required?
- As of April 2026: Apify rental model is retired (April 1) — confirm all new monetization MUST use pay-per-event; check Actor.charge() docs for MCP-specific patterns
