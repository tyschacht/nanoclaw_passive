---
title: "Idea: xpay.sh Zero-Code MCP Monetization Proxy"
date: 2026-06-06
tags: [passive-income, agentic, viable, mcp, x402, usdc, proxy, zero-code]
---

# xpay.sh Zero-Code MCP Monetization Proxy

## What It Is

xpay.sh is an MCP proxy service that adds pay-per-call billing to *any existing MCP server* with zero code changes. You paste your MCP server URL into their "Monetize Wizard," set a per-tool price in USDC, provide a Base wallet address, and receive a new proxy URL to share with users. When an agent connects to the proxy URL and calls your tools, xpay intercepts the call, charges the agent in USDC via the x402 protocol, routes the request to your underlying server, and settles payment directly to your wallet.

The key differentiator from MPP/Stripe (which requires ~15 lines of server-side code) and Nevermined (which requires SDK integration): xpay requires *zero code changes* to the MCP server. Any deployed MCP server — including one running on a free Cloudflare Worker, Vercel function, or Render instance — can be monetized in minutes. xpay has been part of the official x402.org facilitator ecosystem since February 25, 2026.

The platform is non-custodial: USDC flows directly from buyer wallet to seller wallet via EIP-3009 `transferWithAuthorization`. xpay never holds funds.

## How an Agent Does It

1. **Build an MCP server** — any niche tool or data endpoint. Deploy anywhere (Cloudflare Workers, Vercel, Railway, Render, etc.).
2. **Register on xpay.sh** — open Monetize Wizard, paste MCP server URL, set per-tool prices (e.g., `search_records` = $0.01, `deep_analysis` = $0.25, `generate_report` = $0.50).
3. **Provide Base wallet address** — receives USDC settlements directly from buyer wallets.
4. **Share the proxy URL** — format: `your-server.mcp.xpay.sh/mcp`. List on MCPize, AgenticMarket, mppscan.com, mpp.dev for discovery.
5. **Agent runs autonomously** — xpay handles billing, routing, and settlement. Zero ongoing maintenance.
6. **Agent monitors earnings** — via xpay dashboard or Base wallet transaction history, Claude Code can read revenue data and adjust prices.

Because the proxy is server-side, the underlying MCP implementation can use *any* language (TypeScript, Python, Go, Rust). No SDK to install, no billing logic to maintain.

## Source

Web research — docs.xpay.sh/en/products/mcp-monetization + x402.org facilitator registry + DEV.to developer write-ups (June 2026). Confirmed live on official x402.org ecosystem page as of February 25, 2026.

## Scores

| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 9 | Zero code changes; proxy is fully autonomous once configured |
| Setup effort | 9 | Trivially easy — paste URL + set prices + provide wallet; done in <5 minutes |
| Yield potential | 6 | Same ceiling as MPP/x402 (call volume dependent); no fiat payout limits USD-native buyers |
| Risk | 7 | 5% fee eats margin vs MPP's 1.5%; USDC-only (crypto barrier for buyers); x402 ecosystem risk; no documented individual earnings |
| **Overall** | **7.75** | |

## Implementation Notes

- **Platform fee:** 5% per transaction (developer keeps 95%). Higher than MPP (1.5%) and Nevermined (1%). Best used for quick monetization of existing servers rather than purpose-built high-volume APIs.
- **Payment:** USDC on Base L2 only. No fiat settlement. Buyers need a Base-compatible wallet (Coinbase Wallet, MetaMask). This limits buyer pool compared to Stripe-based platforms.
- **Settlement:** Non-custodial. EIP-3009 transferWithAuthorization — funds go directly from buyer to seller; xpay facilitates but never holds.
- **Pricing granularity:** Per-tool pricing. You can price `light_query` at $0.001 and `complex_analysis` at $1.00 on the same server.
- **Complementary to MPP:** For existing servers already using MPP (~15-line integration), xpay offers no advantage. For new servers or inherited servers where you can't touch the code, xpay is the fastest path to monetization.
- **Best use case:** Wrap an existing open-source MCP server that has no built-in billing (e.g., a public Postgres MCP, a weather data MCP, a company registry lookup). Add xpay proxy → instant monetization.
- **Discovery strategy:** Once proxy URL is set, list on 4 channels: mppscan.com (instant, free), MCPize, AgenticMarket, mpp.dev (GitHub PR) — same strategy as documented in [[stripe-mpp-api-provider]] and [[openapi-spec-to-mcp-server-factory]].

## Open Questions

- Does xpay impose rate limits per buyer or seller?
- Can you run both an xpay proxy URL and a direct x402 endpoint simultaneously for the same server?
- Is there an analytics API to read revenue data programmatically (for agent-driven price optimization)?
- Will the 5% fee decrease as transaction volume grows?
