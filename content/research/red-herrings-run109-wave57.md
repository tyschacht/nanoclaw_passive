---
title: "Red Herring: Run 109 Wave 57 Bundle — Minia2a, x402stock, Intelica, Meta Prediction Markets"
date: 2026-06-24
tags: [passive-income, not-viable, red-herring, marketplace, x402, prediction-markets]
---

# Run 109 Wave 57 — Not Viable Bundle

## Items in This Bundle

---

### 1. Minia2a — Agent-to-Agent Marketplace (USDC on Base)
*HN post 48627509, score 2, June 22, 2026 — https://minia2a.uk*

#### What It Claims to Be
A peer-to-peer marketplace where AI agents register HTTP endpoints, get discovered by other AI agents, and receive payment via USDC on Base L2. Seller keeps 95%. Uses Google A2A protocol + Coinbase x402. No KYC. Currently has 4 services listed.

#### Why It Doesn't Work Agentically
- **Cold-start is the ceiling**: 4 services at launch. This is the 11th agent-to-agent marketplace evaluated (prior: dealwork.ai, opentask.ai, ugig.net, ClawGig, BountyBook, TaskMarket, 0xWork, Claw Earn, TaskBounty, beelancer). All share the same cold-start problem: agents don't discover new marketplaces autonomously. The buyer side is also an agent, but agents don't browse new marketplaces without human orchestration.
- **No transaction volume documented**: No public metrics, no confirmed trades on the platform as of June 24.
- **Architecture is sound but discovery remains human-gated**: The 95% seller cut and non-custodial USDC settlement are genuinely better economics than prior platforms, but economics alone don't solve discovery. Agents need a reason to route their requests to minia2a.uk specifically rather than the x402/MPP providers they already know about.

*What distinguishes Minia2a from prior cold-starts:* The A2A buyer side is automated (no human buyer needed). If the x402 ecosystem's agent-to-agent traffic grows, Minia2a could become a genuine discovery layer. Re-evaluate at 90 days (September 2026) when transaction volume can be confirmed.

#### Scores
| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 6 | Registering an endpoint is fully agentic; earning depends on buyer agent discovery |
| Setup effort | 8 | Trivially easy to list an existing x402 service |
| Yield potential | 2 | 4 services, zero documented transaction volume |
| Risk | 9 | Non-custodial, no ToS concerns |
| **Overall** | **6.25** | Below threshold due to cold-start volume problem |

#### Source
HN: https://news.ycombinator.com/item?id=48627509

---

### 2. x402stock.xyz — Stock Data API for Agents
*HN post 48615173, score 2, June 21, 2026 — https://x402stock.xyz/*

#### What It Claims to Be
Stock market data APIs built specifically for AI agents, using x402 pay-per-call protocol. Agents pay per API call for financial data.

#### Why It Doesn't Work Agentically
- **Already covered by existing VIABLE category**: llm-optimized-financial-data-api (Run 108, 7.25/10) explicitly documents the same pattern in the crypto/financial data niche. Building a stock-data variant of the same concept is an implementation detail, not a new income mechanism.
- **No differentiated pricing or positioning found**: x402stock.xyz had no publicly visible pricing or endpoint list as of June 24. Unknown if this is genuinely live or just a landing page.
- **Low barrier to competition**: Stock market data is available free from Yahoo Finance/Polygon.io. The value-add (LLM-optimized formatting) is the same insight already documented in the existing VIABLE report.

*Action*: Build a stock-data variant as described in the existing [[llm-optimized-financial-data-api]] report rather than treating x402stock.xyz as a new opportunity.

#### Scores
| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 8 | Same as existing financial data API report |
| Setup effort | 5 | Standard x402 API build |
| Yield potential | 5 | Crowded; undifferentiated without a clear data edge |
| Risk | 9 | Open protocol |
| **Overall** | **6.75** | Viable as implementation variant, NOT as new distinct idea |

#### Source
HN: https://news.ycombinator.com/item?id=48615173

---

### 3. Intelica — Competitive Intelligence API at $0.05/call
*HN post 48592817, score 2, June 18, 2026 — https://api.intelica.dev*

#### What It Claims to Be
A competitive intelligence data API charging AI agents $0.05 per call via x402 protocol. No signup or subscription required for the agent making requests.

#### Why It Doesn't Work Agentically
- **This is a BUYER-side x402 API, not an income opportunity**: Intelica is something an agent PAYS to use, not something an agent EARNS from. Evaluating it as a passive income mechanism is the wrong frame.
- **As a template to copy**: Building a competing competitive intelligence service is covered by the general x402 API category (stripe-mpp-api-provider, llm-optimized-financial-data-api). Not worth a standalone report.
- **No buyer volume documented**: Score 2 on HN; no testimonials or volume data found.

#### Scores
| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | N/A | Wrong frame — this is a cost not an income |
| **Overall** | **N/A** | Not evaluable as passive income mechanism |

#### Source
HN: https://news.ycombinator.com/item?id=48592817

---

### 4. Meta Prediction Markets — Upcoming Platform Signal
*HN post 48647928, score 89, June 23, 2026 — NYT article*

#### What It Claims to Be
Mark Zuckerberg has directed Meta to build a prediction markets application. No launch date confirmed. No API details available.

#### Why It Doesn't Work Agentically (Yet)
- **No platform exists yet**: No API, no public roadmap, no launch timeline. Cannot be traded or built on.
- **High uncertainty**: Meta has a history of announcing consumer fintech products that take years to ship (Meta Pay, Diem/Libra/Novi). This may not launch in 2026.

*However, this is a significant ECOSYSTEM SIGNAL*: If Meta launches a prediction market with a trading API:
- Cross-platform arbitrage bots (Polymarket ↔ Kalshi ↔ Meta) would immediately apply
- Builder code / referral programs would likely launch at or near launch
- Meta's 3B+ user base would be the largest liquidity injection in prediction market history

*Action*: Add to agent memory. Check HN and tech news monthly for API/launch announcements. When an API is confirmed, apply the existing cross-platform arbitrage pattern immediately.

#### Scores
| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | N/A | Platform does not exist yet |
| **Overall** | **N/A** | Watchlist only — no API to build on |

#### Source
NYT via HN: https://news.ycombinator.com/item?id=48647928
