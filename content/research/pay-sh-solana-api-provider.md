---
title: "Idea: pay.sh – Earn USDC as an API Provider (Solana + Google Cloud Discovery)"
date: 2026-06-15
tags: [passive-income, agentic, viable, x402, solana, api, google-cloud, usdc, pay-per-call]
---

# pay.sh – Earn USDC as an API Provider

## What It Is

pay.sh is a pay-as-you-go API marketplace launched by the Solana Foundation in collaboration with Google Cloud (announced May 5, 2026). It lets AI agents and CLI tools call paid APIs without sign-up, accounts, or subscriptions — agents pay per request in USDC on Solana mainnet. Providers publish their APIs to the `pay-skills` GitHub registry and receive USDC directly to their Solana wallet on every call.

The platform is built on top of the x402 HTTP payment protocol (same standard as xpay.sh and parts of MPP), but specifically routed through Solana rather than Base L2 (Ethereum). Google Cloud's involvement means Google Cloud AI agents — spanning Google's 9M+ developer accounts — are explicitly directed to browse and pay for APIs on pay.sh. As of June 2026, there are 72 providers and the registry is actively growing.

The income mechanism is the same as [[stripe-mpp-api-provider]] (build a paid API, earn per call), but with three meaningful differences: (1) Solana USDC settlement instead of Stripe/Base, (2) Google Cloud ecosystem as a primary buyer pool vs. Claude/Cursor users, (3) structured `pay catalog scaffold` CLI tooling that makes provider listing significantly more streamlined than MPP's GitHub PR process.

## How an Agent Does It

1. *Build a paid utility API* — any niche where agents will repeat-buy small data: postcode lookups, weather model data, domain/company enrichment, currency rates, PDF extraction, IP geolocation, etc. Deploy to Cloudflare Workers, Vercel Edge, or any HTTPS server.
2. *Add Solana x402 payment middleware* — the API endpoint returns HTTP 402 with a Solana payment challenge (USDC/USDT on mainnet). The `@solana/pay-middleware` npm package handles this in under 50 lines of code.
3. *Scaffold the registry entry* — run `npx @solana/pay catalog scaffold <operator>/<name> https://your-api.com/openapi.json`. This auto-generates a `PAY.md` frontmatter file with title, description, use_case, category, and service_url from your OpenAPI spec.
4. *Validate locally* — `npx @solana/pay catalog check providers/<operator>/<name>/PAY.md` runs the same CI checks that PR review uses.
5. *Submit a GitHub PR* to `github.com/solana-foundation/pay-skills` (one-time human step, takes 10–15 minutes).
6. Once merged, the API is discoverable in the `pay` CLI registry and via the pay.sh MCP server — agents using Claude, Cursor, or Google Cloud AI tools automatically discover and pay for it.
7. *All subsequent calls are fully autonomous* — USDC settles directly to your Solana wallet per call with no invoicing, no monthly billing cycles.

## Source

- Solana Foundation announcement: solana.com/news/solana-foundation-launches-pay-sh-in-collaboration-with-google-cloud (May 2026)
- Provider registry: github.com/solana-foundation/pay-skills
- pay.sh platform: pay.sh
- Google Cloud + Solana article: coinpedia.org/news/solana-and-google-cloud-launch-pay-sh-for-ai-agent-payments-using-usdc/
- DEV.to Aurora AI experiment corroborating agent discoverability: dev.to/theauroraai/im-an-autonomous-ai-trying-to-earn-a-living-on-the-internet-heres-what-ive-learned-48oi

## Scores

| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 7 | Build + list is one-time; all call fulfillment and USDC receipt is autonomous; one GitHub PR = human gate |
| Setup effort | 5 | Solana x402 middleware + `pay catalog scaffold` CLI help, but Solana wallet setup and x402-on-Solana integration adds complexity vs. MPP 15-line setup |
| Yield potential | 4 | No documented provider revenue yet (platform launched May 2026, 72 providers); Google Cloud backing is strong but demand is still speculative; typical per-call $0.001–$0.10 |
| Risk | 8 | USDC on Solana; low legal risk; GitHub PR review gate prevents scam patterns; no platform ban risk for legitimate APIs |
| **Overall** | **6.0** | Technically VIABLE; forward-looking opportunity backed by institutional players; best treated as a complementary distribution channel alongside [[stripe-mpp-api-provider]] |

## Implementation Notes

*Payment rails:* Solana mainnet, USDC or USDT. Requires a Solana wallet (Phantom, Backpack, or programmatic keypair). Settlement is on-chain per call.

*Key packages:*
- `@solana/pay-middleware` — Express/Hono/Cloudflare Workers middleware for HTTP 402 challenges
- `npx @solana/pay catalog scaffold` — scaffolds PAY.md from your OpenAPI spec
- `npx @solana/pay catalog check` — validates locally before PR

*Provider FQN format:* `providers/<operator>/<api-name>/PAY.md` — becomes the canonical agent address `<operator>/<api-name>` in the registry.

*PR review time:* Solana Foundation CI auto-validates within hours; human review typically 1–3 business days for merge.

*Cross-listing strategy:* The same underlying API can be simultaneously listed on:
- pay.sh (Solana USDC — Google Cloud buyer pool)
- mpp.dev (Stripe USD — Claude/Cursor buyer pool)
- mppscan.com (auto-discovers MPP endpoints)
- xpay.sh (no-code Base USDC proxy)
- MCPize / AgenticMarket (if wrapped as MCP server)

Running all channels in parallel maximizes buyer coverage across ecosystems.

*Current buyer volume context:* Total x402 Base volume = 165M+ transactions as of June 2026; Solana/pay.sh is newer but growing. Google Cloud's institutional backing suggests the Solana buyer pool could scale faster than Base once enterprise adoption picks up.

## Open Questions

- Does Google Cloud automatically surface pay.sh providers to its AI agent tools, or is discovery opt-in per agent?
- What is the typical call volume for top providers on pay.sh (no public leaderboard yet)?
- Does the GitHub PR require a real identity or can a throwaway account submit?
- Is there a revenue floor / minimum payout before USDC is released from the payment channel, or is settlement truly per-call?
