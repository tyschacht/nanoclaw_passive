---
title: "Idea: Free Gov Data → LLM-Enriched MCP/x402 API + ARD Registration"
date: 2026-06-19
tags: [passive-income, agentic, viable, mcp, x402, mpp, government-data, ard, api]
---

# Free Government Data → LLM-Enriched API → MPP/x402 + ARD Discovery Pipeline

## What It Is

The US government publishes enormous volumes of high-value structured data for free: USPTO patent records, EDGAR corporate filings, OSHA violation citations, CourtListener federal court decisions, Census/BLS economic data, Data.gov datasets. This data is legally public, free to access, and deeply useful to AI agents doing research, compliance analysis, due diligence, or competitive intelligence. Yet almost none of it is packaged as fast, agentic-accessible, paid API endpoints.

The mechanism: pull this free data, enrich it with an LLM (extract entities, generate structured summaries, add semantic search), wrap it in a metered payment layer (MPP via mpp.dev or x402 on Base), serve it as an MCP server for maximum agent compatibility, and register it on the new Agentic Resource Discovery (ARD) specification at `/.well-known/ai-catalog.json` for first-mover discoverability. Cross-list the same server on MCPize, AgenticMarket, AWS Marketplace, and Google Cloud Marketplace for multi-channel passive income.

The income flows per-API-call in USD (via Stripe through MPP) or USDC (via x402). Registered providers on ARD are discoverable by any ARD-compliant agent runtime — the equivalent of early Google indexing for the emerging agent web. The ARD specification launched June 17, 2026 (Google + Linux Foundation) with Microsoft, Cisco, Databricks, Hugging Face, Nvidia, and Salesforce as co-signatories; the discoverable catalog is tiny today, making first-mover registration extremely high-leverage.

This idea is distinct from `us-public-records-mcp-arbitrage` (which uses paid OpenSOSData at $0.03/call as input) and `regulatory-filings-compliance-product-pipeline` (which generates PDF products sold on Whop). Here the data source is free government APIs, the delivery is metered per-call, and the value-add is LLM enrichment making raw government data actually useful to other AI agents.

## How an Agent Does It

1. **Data discovery (one-time, ~1 hour agent time):** Agent queries Data.gov catalog API (`api.data.gov`), USPTO Open Data Portal, CourtListener REST API, EDGAR EFTS full-text search, BLS Public Data API — all free, no auth required — to identify high-value datasets not already on x402 Bazaar or MPP directory. Filter for: structured JSON output, regular updates, B2B relevance (compliance, due diligence, patent research).

2. **Data pipeline (daily cron):** Agent fetches new records via public APIs, passes through Claude/DeepSeek for entity extraction and structured enrichment (e.g., "OSHA citation → structured JSON with company, violation type, fine amount, date, industry SIC code"). Stores in Supabase or Cloudflare KV.

3. **API server (one-time setup):** Deploy Cloudflare Worker with MPP middleware (`npm install mppx`, 15-line integration). Each endpoint returns enriched JSON, charges $0.01–0.10 per call depending on compute intensity. Alternatively wrap as MCP server using `openapi-mcp-generator` from OpenAPI spec.

4. **ARD registration (one-time, 15 minutes):** Create `ai-catalog.json` at `/.well-known/ai-catalog.json` on the service domain. Includes: service name, endpoint URL, pricing, data categories, MCP endpoint if applicable. Publish to domain. ARD crawlers index automatically.

5. **Marketplace cross-listing (one-time, 30 minutes):** List MCP server on MCPize (`mcpize.com/list`), AgenticMarket (CLI `agenticmarket publish`), and submit to AWS Marketplace MCP_SERVER product type. Set identical pricing. Revenue flows via Stripe Connect (MPP) and platform-specific rev share.

6. **Autonomous operation:** Agent monitors for data staleness (weekly diff check), updates enriched records as needed. MPP dashboard tracks revenue. No human needed after initial setup.

## Source

- ARD specification: agenticresourcediscovery.org (published June 17, 2026, Google + Linux Foundation)
- Gap identified from x402 Bazaar audit: government/open data packages are absent from the x402 provider catalog (June 2026 survey by this agent)
- MPP ecosystem stats: mppscan.com (June 19, 2026) — 638 providers, $7,510/week volume; gov data category = 0 providers
- Prior library signals: x402-boring-utility-data-apis (confirmed $3K/mo from UK postcode data), us-public-records-mcp-arbitrage (3-10x margin on OpenSOSData), stripe-mpp-api-provider (15-line setup confirmed)

## Scores

| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 8 | Data fetch + LLM enrichment + metered serving = fully autonomous loop; one-time human domain registration and initial MPP/marketplace setup |
| Setup effort | 7 | Cloudflare Worker + MPP + Supabase: 3-6 hours; ARD registration: 15 min; marketplace listings: 30 min |
| Yield potential | 6 | $50-300/week realistic (MPP ecosystem = $7,510/week total across 638 providers today; top earner $272/week); $500+/week possible at 2-3 well-chosen endpoints |
| Risk | 10 | Public government data, no ToS restrictions, no copyright; Cloudflare + Stripe = zero regulatory exposure |
| **Overall** | **7.75** | Strong agentic purity, low risk, modest yield ceiling but stackable across niches |

## Implementation Notes

**Best gov data candidates for first endpoints (highest B2B value):**
- USPTO patent lookup by inventor/assignee/class → $0.05/call (due diligence, IP research)
- EDGAR company filings + AI-extracted financial signals → $0.10/call (investment research, compliance)
- OSHA violation database by company/industry → $0.03/call (HR/safety compliance)
- CourtListener case search → already has REST API, add LLM case-summary layer → $0.05/call
- BLS wage data by occupation/metro → $0.02/call (hiring intelligence)

**Key tools:**
- `mppx` npm package: 15 lines adds MPP billing to any Node.js/Cloudflare Worker
- `openapi-mcp-generator` (`npx openapi-mcp-generator`): converts OpenAPI spec → MCP server
- `wrangler deploy`: pushes Cloudflare Worker (free tier = 100K req/day)
- `agenticmarket publish` CLI: one-command MCP marketplace listing
- ARD spec: `agenticresourcediscovery.org` — publish `ai-catalog.json`, done

**Cost structure:**
- Data: $0/call (government APIs are free)
- Enrichment: ~$0.001/call at DeepSeek V4 pricing ($0.14/M tokens)
- Cloudflare Workers: free tier covers first 100K requests/day
- MPP fee: 1.5% of revenue (Stripe stablecoin)
- Net margin: ~97% on revenue above API costs

**ARD first-mover window:** The ARD catalog is indexed by GitHub Agent Finder and Hugging Face Discover today. As of June 19, 2026 there are almost no registered services in the gov/open-data category. This is the early-web SEO window — register now, not in 6 months.

## Open Questions

1. What is actual agent call volume for the top x402/MPP providers? Is $272/week (StableEnrich) representative of a ceiling or an early benchmark?
2. Does ARD registration materially drive traffic, or is it still too early to measure?
3. Which gov data endpoints have the highest repeat-call rate from AI agents (i.e., the stickiest data)?
4. Will USPTO/EDGAR rate-limit aggressive polling? (Their ToS generally permits bulk access but rate limits vary — test before building)
5. Does PMXT (unified prediction market SDK) create an opportunity to package real-time sports/event market data as a metered endpoint on top of ProphetX and other new CFTC venues?
