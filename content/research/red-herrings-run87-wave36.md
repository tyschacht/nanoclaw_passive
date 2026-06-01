---
title: "Red Herring: Wave 36 Bundle — ugig.net, Kalshi Mention-Market No Strategy, DEV.to 12-Platform List Cleanup"
date: 2026-06-01
tags: [passive-income, not-viable, red-herring, cold-start, capital-dependent, agent-marketplace]
---

# Wave 36 Bundle — Not Viable

## What It Claims to Be

Three separate ideas surfaced during Run 87 (June 1, 2026) from YouTube, HN, Reddit, and the DEV.to "12 platforms" article:

1. **ugig.net** — An agent-native freelance gig marketplace where AI agents autonomously bid on gigs, do work, and collect USDC/SOL/ETH payments. Full OpenAPI spec, `account_type: "agent"` registration, programmatic auth. Claims agents browse, apply, and get paid without human involvement.

2. **Kalshi "Mention Market No" strategy** — Open-sourced bot (github.com/DanMcInerney) documented $6K profit by always betting "No" on Kalshi "mention markets" (will speaker say word X during event Y?) on contracts priced 20–85 cents. Laddered limit orders, 24–30 hour hold, exits before event conclusion.

3. **DEV.to "12 Platforms" article cleanup** — The May 2026 article (dev.to/kirothebot) surfaced several platforms already in the library (dealwork.ai, opentask.ai, execution.market, Toku, NEAR AI, MuleRun, x402). The one seemingly-new entry, "BuildMVPFast Agent Marketplace" with "31,000 transactions in first week," was a data attribution error — the 31K transactions belong to the MPP ecosystem (Stripe/Tempo), not BuildMVPFast (which is a B2B agency with no marketplace).

## Why They Don't Work Agentically

**ugig.net:**
- Cold-start confirmed: 148 gigs listed, 12–30 applications per gig — no evidence any agent has been paid
- Platform explicitly states: "No offramp and no exchange listing — still in pre-infrastructure stage. Not suitable for those needing to cash out immediately" — USDC earned cannot be converted to USD
- Zero independent reviews, testimonials, or third-party reports of completed transactions
- 17th+ instance of agent gig marketplace cold-start pattern (see also: dealwork.ai, TaskMarket, BountyBook, ClawGig, agenthansa, Beelancer, etc.)
- Paid tier required ($9–$29/mo) to list more than 10 gigs — costs money before earning any

**Kalshi "Mention Market No" strategy:**
- Capital-dependent: profits scale with capital deployed, not labor — exact same structural disqualifier as DeFi yield, OANDA trading, Coinbase CDP (red herring category #3)
- Edge has largely disappeared: the author confirms in the original article (mcinerney.ai) that as mention market liquidity grew, the pricing inefficiency was arbitraged away by other participants
- Tax treatment destroyed economics: state gambling tax laws assessed on total wagers (not just net profit), consuming approximately 80% of gross winnings — a $6K gross profit became ~$1.2K net
- Regulatory tail risk: ongoing state litigation against Kalshi over event contract legality
- Even at peak: required $1,000/contract to see meaningful returns — capital deployment, not agent labor

**BuildMVPFast "31K transactions" claim:**
- Source article (dev.to/kirothebot) author's own note: "Discovered May 13. Need to register and list." — author had not used it
- BuildMVPFast is a custom AI agency (buildmvpfast.com), not a marketplace
- The 31,000 transactions figure belongs to the MPP ecosystem (Stripe/Tempo), which IS viable — see separate VIABLE report: [[stripe-mpp-api-provider]]

## Scores

### ugig.net
| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 6 | API and agent registration exist |
| Setup effort | 7 | Easy signup |
| Yield potential | 2 | No offramp; cold-start; USDC stuck on platform |
| Risk | 7 | Low legal risk |
| **Overall** | **5.5** | Cold-start disqualifies |

### Kalshi Mention-Market No
| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 8 | Fully scriptable Kalshi API |
| Setup effort | 7 | Open-source repo available |
| Yield potential | 3 | Capital-dependent; edge diminished; 80% tax loss |
| Risk | 4 | Capital risk + regulatory + gambling tax |
| **Overall** | **5.5** | Capital-dependent disqualifies |

## Source

- ugig.net homepage + DEV.to article (dev.to/chovy) + GitHub profullstack/ugig.net (June 2026)
- Kalshi bot: mcinerney.ai/writings/how-i-botted-6k-prediction-markets-as-i-slept + github.com/DanMcInerney (HN: 48193019, ~2 pts)
- DEV.to: dev.to/kirothebot (May 2026) — 12 Platforms article
