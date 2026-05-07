---
title: "Red Herring: Wave 13 Bundle — Pay.sh, Elastics, Aithon, Apiosk"
date: 2026-05-07
tags: [passive-income, not-viable, red-herring, x402, prediction-markets, agent-marketplace, telecom]
---

# Wave 13 Bundle — Not Viable

## What Each Claims to Be

Four items evaluated this run that failed the agentic passive income filter:

**Pay.sh (Solana + Google Cloud, May 6 2026)**: A joint Solana/Google Cloud launch of an API proxy that lets AI agents pay for 75+ APIs using USDC on Solana. Built on x402 protocol, "community API providers" listed alongside Google Cloud APIs (BigQuery, Vertex AI, Cloud Run). Announced the same day as Gumroad CLI v0.5.0. Framing is "agents pay for services" — the buyer side.

**Elastics (Warsaw, $2M pre-seed, May 5 2026)**: AI-native operating system for prediction markets. "Trade with Words" feature converts English strategy descriptions into live Polymarket/Kalshi/Limitless orders. Backed by ElevenLabs co-founders and a16z scout. Described as helping traders build workflows autonomously.

**Aithon MCP Server (OnePrivateEquity/aithon-mcp-server, GitHub)**: "B2B services marketplace where AI agents and human consultants compete to serve enterprise telecom buyers." AI agent acts as a telecom broker — compares Spectrum, Comcast, AT&T pricing and presents to SMB decision makers. Earns 10% carrier commission (industry standard) minus 5% Aithon platform fee. $1 one-time registration.

**Apiosk (production x402 on Base)**: "First production implementation of x402 protocol." 9 APIs live. 90% revenue share to providers (95% for first 100). Weather API at $0.001/call, crypto prices at $0.0005/call. No documented user volume.

## Why They Don't Work Agentically

**Pay.sh** — *Buyer-side infrastructure, not earn-side*:
- Pay.sh is a PAYMENT LAYER for agents buying APIs, not a marketplace where solo developers earn money
- The "community API providers" are enterprise partners pre-selected by Solana/Google (Dune Analytics, Nansen, Helius, etc.) — not a self-service developer listing program
- Provider enrollment documentation does not exist publicly as of May 7 2026
- Income mechanism: zero. This makes USDC spending easier for agents; it does not help agents earn

**Elastics** — *Personal trading tool, not a strategy marketplace*:
- Elastics is a free platform — no creator revenue program exists
- Helps users run their own prediction market strategies; does NOT have a marketplace to sell strategies to others
- $2M pre-seed = they're building the product, not paying creators yet
- No income mechanism for developers building on Elastics

**Aithon** — *B2B enterprise trust gap + cold start*:
- Telecom procurement decisions involve multi-year contracts, legal review, and executive sign-off — irreducibly human trust steps
- GitHub repo has 0 stars; no documented closed deals or agent earnings
- $1 entry fee signals no barrier but also no traction validation
- Even if the comparison step is agentic, deal closing requires human-level trust and follow-up
- Overall: 4.5/10 — cold-start + human trust bottleneck

**Apiosk** — *14th instance of x402 cold-start earn-side pattern*:
- 9 APIs live = extremely early stage
- No documented buyer demand, transaction volume, or provider earnings
- Same structural failure as: ClawTasks, BountyBook, TaskMarket, 0xWork, Claw Earn, TaskBounty, SwarmDock, Beelancer.ai, AgentPact, Nightmarket, MeshCore, xpay.sh, AgentBazaar, Apiosk
- The "first production implementation" claim is marketing, not a buy-side demand signal

## Scores

| Criterion | Pay.sh | Elastics | Aithon | Apiosk |
|---|---|---|---|---|
| Agentic viability | 1 | 6 | 5 | 6 |
| Setup effort | N/A | 7 | 7 | 7 |
| Yield potential | 1 | 5 | 3 | 1 |
| Risk | 8 | 8 | 6 | 5 |
| **Overall** | **N/A** | **6.5** | **5.25** | **4.75** |

## Sources

- Pay.sh: CoinDesk "Solana and Google Cloud Launch Pay.sh for AI Agent Micropayments" (May 6 2026); decrypt.co; banklesstimes.com
- Elastics: EU-Startups "Warsaw-based Elastics raises €1.7 million" (May 5 2026); tech.eu; elastics.ai homepage (platform is free, no creator income program)
- Aithon: github.com/OnePrivateEquity/aithon-mcp-server README (no earnings data; $1 registration; 5% success fee model)
- Apiosk: DEV.to Olivier Brinkman "How to monetize your API with USDC micropayments" — 9 APIs live, no volume data
