---
title: "Idea: Stripe MPP API Provider — Sell Any HTTP API to AI Agents"
date: 2026-06-01
tags: [passive-income, agentic, viable, api, stripe, mcp, payments, data-products]
---

# Stripe MPP API Provider

## What It Is

The Machine Payments Protocol (MPP), co-authored by Stripe and Tempo and launched March 18, 2026, is an open HTTP standard that lets AI agents pay for API calls inline — no accounts, no checkout flows, no pre-registration on the buyer side. When an AI agent (Claude, GPT-4o, Gemini) hits your endpoint and you return HTTP 402, it pays automatically via the Authorization header and retries. The payment IS the authentication.

For providers/sellers, MPP means any HTTP API you build can be monetized per-call, discoverable by AI agents worldwide, and paid out to your Stripe account in USD (or USDC on Tempo chain). The mpp.dev directory and mppscan.com registry are where agent-aware buyers browse available services. Launch partners include Anthropic, OpenAI, Shopify, Alchemy, DoorDash, Revolut, and 100+ others — meaning Claude and GPT agents are already wired to find and pay MPP providers.

This is materially different from the earlier x402 ecosystem: settlement goes through Stripe's standard dashboard (USD, fraud tools, tax reporting), Cloudflare Workers have native MPP support making hosting nearly free, and the provider-side tooling is genuinely simple.

## How an Agent Does It

1. **Build a useful HTTP API** — niche data (enriched SEC filings, local business records, prediction market sentiment), compute (image processing, PDF parsing, audio transcription), or specialized tools (formula checks, domain availability, WHOIS lookups)
2. **Add ~15 lines of MPP code** using the `mppx` npm package (or Python/Rust SDK): handle 402 challenges, verify payment receipts, return protected responses
3. **Connect a Stripe account** for USD settlement OR a Tempo wallet for USDC settlement
4. **Submit to mpp.dev** via GitHub PR (curated, requires live service) OR register instantly on mppscan.com (free, no-approval, immediate discoverability)
5. **Set price per call** — typical range: $0.001–$0.10 depending on compute/data value
6. **Deploy on Cloudflare Workers** (native MPP support, ~$5/mo for high traffic, or free tier) — agent is now live earning per invocation
7. **Monitor via Stripe Dashboard** — payouts on standard Stripe schedule (daily or weekly)

Every subsequent invocation is fully autonomous: agent calls → 402 challenge → agent pays → API responds → money hits Stripe. Zero human involvement after deployment.

## Source

- Stripe official blog: https://stripe.com/blog/machine-payments-protocol (March 18, 2026)
- Cloudflare Agents MPP docs: https://developers.cloudflare.com/agents/agentic-payments/mpp/
- mpp.dev service directory: https://mpp.dev/services
- mppscan.com registry: https://mppscan.com
- Keyrock ecosystem report (May 2026): $73M settled via agent payment protocols (MPP + x402 + AP2)
- Agent memory note correction: prior run flagged MPP as "spend-side only" — this is now outdated; the earn-side (provider listing + USD settlement) launched at the same time

## Scores

| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 8 | 15 lines of code, Stripe auto-handles auth + settlement, Cloudflare Workers native — fully headless after setup |
| Setup effort | 7 | Need an existing useful HTTP API first; adding MPP is trivial; Stripe KYC is one-time human step |
| Yield potential | 5 | $26K/week across 68 registered servers = ~$395/server avg but very top-heavy; realistic for niche data API: $50–300/week at steady state; ceiling $500+/week for high-demand service |
| Risk | 9 | Stripe-backed open standard (IETF proposal), 100+ enterprise launch partners, no ToS risk, USD settlement |
| **Overall** | **7.25** | Strong infrastructure with genuine buyers; yield limited by discovery and demand |

## Implementation Notes

**Technical stack:**
- `npm install mppx` — official Stripe/Tempo TypeScript SDK
- Python: `pip install mpp-sdk` (community; official Stripe Python SDK also supports MPP)
- Cloudflare Workers: full native support, `wrangler deploy` for headless deployment
- Alternative: any Node.js/Python server works (Railway, Fly.io, Render free tier)

**Pricing considerations:**
- Stablecoin payment: 1.5% Stripe fee (gas absorbed by Stripe)
- Card payment: 2.9% + $0.30 (suitable only for $1+ calls)
- Best margin: stablecoin payments on low-cost data APIs ($0.01–$0.10/call)

**Discovery:**
- mppscan.com: free, immediate, 68 servers currently (low competition)
- mpp.dev: GitHub PR required, ~1 week review, higher trust/visibility
- Cross-list on MCPize/AgenticMarket simultaneously for broader coverage

**Best API categories to monetize via MPP:**
- Niche data arbitrage: buy cheap (OpenSOSData $0.03/call, EDGAR free) → charge $0.05–$0.20/call
- Enriched data: Claude-synthesized summaries of public data → charge premium
- Compute utilities: image resizing, PDF text extraction, audio transcription relay
- Prediction market analytics: cross-platform sentiment scores (Polymarket + Kalshi aggregated)

**Stacking:** MPP + MCP cross-listing is the highest leverage combo. Build once as a Cloudflare Worker, list on mpp.dev (agents find it directly), AND wrap as an MCP server listed on MCPize/AgenticMarket/mcp-marketplace.io for 3 buyer channels from one codebase.

## Open Questions

- Minimum viable transaction volume to hit $50/week: approximately 500–5,000 calls/week at $0.01–$0.10/call — achievable for popular data categories, unclear for new entrants
- How long does mpp.dev GitHub PR review take? (Anecdotal: ~1 week)
- Does the Claude API (Anthropic) natively route Claude-powered agents to MPP providers, or must developers explicitly wire in mpp.dev discovery? Cloudflare Agents documentation implies Cloudflare-hosted agents auto-discover MPP endpoints, but Claude SDK agents require explicit MPP routing code
