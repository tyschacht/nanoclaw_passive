---
title: "Idea: US Public Records MCP Arbitrage Server"
date: 2026-05-05
tags: [passive-income, agentic, viable, mcp, government-data, b2b, data-arbitrage]
---

# US Public Records MCP Arbitrage Server

## What It Is

US government data — Secretary of State business entity filings, building permits, local business registrations — is public, high-value, and poorly aggregated for AI agents. Commercial aggregators like [OpenSOSData](https://opensosdata.com/) charge $0.0314 per lookup covering all 53 US jurisdictions (50 states + DC + PR + USVI). Reselling this data via a remote MCP server on paid marketplaces (MCPize, AgenticMarket, mcp-marketplace.io) creates a straightforward 3–10x margin arbitrage. AI agents doing B2B prospecting, KYB compliance, due diligence, or real estate analysis are willing to pay $0.10–$0.30 per call — data that costs you $0.03.

The opportunity was validated live on r/modelcontextprotocol (May 2026): a developer built and deployed a remote MCP server covering Secretary of State lookups for 18 US states, building permits for 1,000+ US cities, and YellowPages local business search. The community immediately asked about rate-limiting and monetization — confirming there is agent demand for exactly this type of tool. The developer scraped directly from state websites (free but maintenance-heavy). The cleaner path is to use OpenSOSData as the data layer and focus on the MCP packaging + distribution.

## How an Agent Does It

1. **Set up data sources.** Register for OpenSOSData API key ($0 to start, then $0.0314/lookup prepaid). For building permits, aggregate from city open-data portals (e.g., `data.seattle.gov`, `data.lacity.org` — typically free REST APIs with no auth).
2. **Build the MCP server.** Claude Code writes a Cloudflare Worker or Railway-deployed Node.js server exposing MCP tools: `lookup_business_entity(state, name)`, `search_building_permits(city, date_range, type)`, `search_local_businesses(location, category)`. Each tool hits the appropriate data source.
3. **Deploy headlessly.** `wrangler deploy` (Cloudflare) or `railway up` (Railway). One-time setup; all subsequent scaling is automatic.
4. **List on all four paid MCP marketplaces.** Submit to MCPize, AgenticMarket, mcp-marketplace.io, and MCP-Hive (launching May 11). Set per-call pricing at $0.10–$0.30 per tool invocation. One-time manual listing per marketplace.
5. **Revenue accrues automatically.** Every time a Claude Code, Cursor, or other MCP-capable agent calls your server, the marketplace bills the agent's account and credits your Stripe Connect wallet.
6. **Scale by adding data types.** Add FAA aircraft registry, USPTO patent assignments, PACER court filings (CourtListener API — free), EPA enforcement actions, FCC license lookups. Each new data type increases tool utility and per-call value.

## Source

- r/modelcontextprotocol post (score: 1, May 2026): Dev showcases a working remote MCP server for SOS lookups (18 states) + building permits (1,000+ cities) + YellowPages; community asks about monetization and rate limiting — confirming agent demand.
- OpenSOSData (opensosdata.com) commercial API: $0.0314/lookup, all 53 US jurisdictions, real-time data.
- Apify US Business Entity Search Actor (apify.com) — confirmed MCP integration exists and charges per-result, validating buyer demand for this data type from AI agents.
- Web research: Cobalt Intelligence and OpenCorporates confirmed as alternative data sources; Cobalt credit-based (~$0.05–0.10/lookup); OpenCorporates $0.10–0.50/lookup.

## Scores

| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 8 | Data source API + MCP deployment + marketplace listing = nearly end-to-end agentic; only manual step is one-time marketplace listing forms |
| Setup effort | 7 | Cloudflare Workers + OpenSOSData key + MCP tool schema = 2–4 hours; Claude Code can write the worker; one-time submission to 4 marketplaces |
| Yield potential | 7 | Buy at $0.03/call, sell at $0.10–0.30; 50 AI agents × 100 calls/day = 5,000 calls/day × $0.07 margin = $350/day = $2,450/week at scale; realistic start: $100–200/week in first 30 days |
| Risk | 8 | All public government data; OpenSOSData is a commercial API; no ToS or legal risk; Cloudflare Workers handles abuse/rate-limiting |
| **Overall** | **7.5** | Strong agentic fit; distinct from x402-boring-utility-data-apis (lower-value utility data); distinct from regulatory-filings-compliance-product-pipeline (that builds products FROM data; this SERVES data); first MCP server specifically for US government public records |

## Implementation Notes

- **Data source choice:** OpenSOSData ($0.0314/call) is fastest to launch. Building your own scraper (Playwright against state SOS sites) is free but requires maintenance as states change UI. Start with OpenSOSData for the first 6 months; migrate to own scrapers when volume justifies it.
- **MCP tool schema:** Use the MCP SDK (`@modelcontextprotocol/sdk`) for Node.js. Tool names should be descriptive: `us_business_entity_lookup`, `building_permit_search`, `local_business_search`. Return JSON with status, registration details, filing dates, agent names.
- **Cloudflare Workers** (recommended): Free tier covers 100K requests/day. Paid plan at $5/mo handles 10M requests. Deploy with `wrangler deploy`. Configure OpenSOSData API key as a Cloudflare Worker secret (`wrangler secret put OPENSOSDATA_KEY`).
- **Revenue uplift:** Cross-list on all 4 marketplaces. Add government data types over time. Most valuable additions: CourtListener (federal case search, free), SEC EDGAR company filings (free), FAA aircraft lookup (free), OSHA citations (free CSV). Each new data type raises perceived value.
- **Pricing guidance:** $0.10/call for basic lookups, $0.25/call for multi-state aggregated searches, $0.50/call for bundled report (entity + permits + court records in one call). Start low to attract first adopters.
- **Rate limiting:** Build token-bucket rate limiting in the Worker (5 calls/second per API key) to prevent runaway agent loops from burning your OpenSOSData budget.

## Open Questions

- Can OpenSOSData deliver sub-2-second responses? (Required for good MCP tool UX)
- What is the maximum daily budget risk if a high-traffic agent hammers the endpoint before rate limiting kicks in?
- Do any MCP marketplaces have categorical discovery for "government data" or "compliance" tools? (If yes, optimize listing category for discoverability)
- Building permit data: which cities have free REST APIs vs. which require Playwright scraping?
- Would a "Business Intelligence Bundle" (entity + permits + court in one call at $0.75) generate higher revenue than three separate tools at $0.10 each?
