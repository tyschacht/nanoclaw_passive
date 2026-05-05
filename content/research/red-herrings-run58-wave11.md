---
title: "Red Herring: Wave 10 Bundle — HyperLiquid HIP-4, dotMCP 5th Marketplace"
date: 2026-05-05
tags: [passive-income, not-viable, red-herring, prediction-markets, mcp, hyperliquid]
---

# Wave 10 Dead Ends: HyperLiquid HIP-4 + dotMCP

## HyperLiquid HIP-4 Outcome Markets

## What It Claims to Be

HyperLiquid launched HIP-4 Outcome Markets on mainnet May 2, 2026 — binary prediction contracts on HyperLiquid's native L1 (HyperCore), settling to 0 or 1, denominated in USDH (HyperLiquid's stablecoin backed by BlackRock, custodied by JPMorgan). HyperLiquid's perps API is among the best in DeFi (200K orders/second, sub-50ms), and the same REST + WebSocket infrastructure at api.hyperliquid.xyz now covers HIP-4 markets. An Emil Nielsen video (May 3, 2026) and a Sharbel A. video (May 4, 2026) both covered connecting AI agents to HIP-4.

## Why It Doesn't Work Agentically

- **No maker rebate program.** All existing viable prediction market bot reports (gemini-predictions-maker-rebate-bot, opinion-opn-maker-rebate-market-making, limitless-exchange-mcp-maker-rewards) rely on maker rebates as the passive income mechanism — you earn simply by providing liquidity, regardless of directional correctness. HIP-4 has zero maker rebate; income requires capital deployed plus a directional edge.
- **Market creation requires 1 million HYPE tokens.** Creating new prediction markets on HIP-4 requires staking 1M HYPE, which at current prices is a multi-million-dollar capital barrier. This eliminates any passive market-creation revenue model for individual agents.
- **Capital-dependent trading is not passive income.** The same pattern as coinbase-cdp-defi-yield-optimization, valr-ai-service-crypto-making, and etoro-agent-portfolio-popular-investor: the bot earns money by risking capital, not by providing a service. Income is directly correlated with capital at risk.

## Scores

| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 7 | API is excellent; same as proven HyperLiquid perps API |
| Setup effort | 4 | Need USDH capital + production node infrastructure (Chainstack/QuickNode for rate limits) |
| Yield potential | 4 | Capital-dependent; no rebates; new market with unproven liquidity depth |
| Risk | 4 | Capital risk; new prediction market with volatile edge; HYPE token custody risk |
| **Overall** | **4.75** | Not viable — capital-dependent, no rebate mechanism |

## Source

Emil Nielsen YouTube: "HyperLiquid HIP-4 Outcome Markets + Polymarket CLOBv2 Upgrade" (ovKd-afZta0, 526 views, May 3, 2026). HyperLiquid docs: api.hyperliquid.xyz.

---

## dotMCP — Fifth MCP Marketplace

## What It Claims to Be

dotMCP (dotmcp.io) is a new MCP server marketplace where developers publish tools and earn when AI agents connect to them. Servers are deployed as sandboxed edge workers globally. Revenue share: 80% to creator, 20% platform. Payments via Stripe Connect. Server listing is manual (import OpenAPI spec or Postman collection via dashboard).

## Why It Doesn't Work Agentically

- **Inferior economics to existing platforms.** dotMCP offers 80% rev share vs MCPize (85%), AgenticMarket (90%/80%), mcp-marketplace.io (85%), and MCP-Hive (0% for founding providers). There is no reason to prioritize dotMCP over existing options.
- **Manual listing, no CLI.** Same listing limitation as all other MCP marketplaces. Cross-listing same server on all 5 is marginally better than 4, but the marginal gain from adding a 5th marketplace with lower rev share is minimal.
- **No differentiated buyer base.** dotMCP does not appear to have a distinct buyer community (e.g., MCPize targets Claude Code users, AgenticMarket targets Cline users). No documented marketplace volume or seller earnings.

## Scores

| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 6 | Build and list an MCP server — same as 4 existing platforms |
| Setup effort | 6 | One extra web form submission to add to existing cross-list strategy |
| Yield potential | 4 | Redundant with existing; no differentiated buyer base; lower rev share |
| Risk | 9 | No risk, just low value |
| **Overall** | **6.25** | Not a meaningful addition; below VIABLE threshold as standalone; add to cross-listing checklist if you're already listing on the other 4 |

## Source

Web research, May 5, 2026: dotmcp.io platform review. Agent research confirmed as separate platform from MCPize.
