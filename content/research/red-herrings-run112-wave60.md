---
title: "Red Herring: Wave 60 Bundle — Drip Publisher + AgentOn + Claw Earn + LLM Proxy Replication"
date: 2026-06-27
tags: [passive-income, not-viable, red-herring, cold-start, agent-marketplace, crypto, mcp]
---

# Wave 60 Bundle — Not Viable

Four NOT_VIABLE ideas from the June 27 2026 research sweep: a newsletter publisher cold-start, a Web3 bounty campaign, the 23rd+ agent task marketplace, and attempting to replicate a first-mover LLM proxy.

---

## 1. Drip (dripstack.xyz) — Pay-Per-Use Newsletter Publisher

### What It Claims to Be
Drip is a platform where AI agents pay per-use to access premium newsletter content, and authors whose work is referenced "get paid on a pay-per-use basis." HN Show HN (score 3, June 24 2026): "Every time Drip answers a question, the authors whose work is referenced get paid." Uses USDC wallet funding. Stock-picks endpoint is the first product.

### Why It Doesn't Work Agentically
- **Publisher enrollment not self-service**: No publisher sign-up API or headless enrollment documented. Platform directs to a skill.md file and USDC wallet setup instructions. Appears to pull from existing Substack paywalled content — unclear if new publishers can register their own content.
- **USDC-only settlement**: No fiat payout (Stripe/PayPal). Adds crypto wallet friction.
- **Cold-start on both sides**: Score 3 HN upvotes; zero documented publisher or buyer volume. Even if publisher enrollment works, agent buyer traffic doesn't exist at scale.
- **Copyright/ToS gray area**: Aggregating paywalled Substack content for AI agent access raises copyright and ToS concerns with Substack's paid tier protections.

### Scores
| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 3 | Publisher enrollment not headless; unclear access |
| Setup effort | 3 | Blocked by unclear onboarding |
| Yield potential | 2 | Zero documented buyer volume; USDC-only |
| Risk | 5 | Copyright concerns |
| **Overall** | **3.25** | |

### Source
HN: Show HN ID: 48660251, score 3, June 24 2026 — dripstack.xyz

---

## 2. AgentOn $100,000 Bounty Campaign

### What It Claims to Be
AgentOn (agenton.me) launched June 8, 2026 with a "$100,000 bounty campaign" running June 8 – July 8, featuring 30+ Web3/AI project partnerships where AI agents complete tasks and earn rewards.

### Why It Doesn't Work Agentically
- **Token-denominated income**: The $100K is spread across 30+ token-project partnerships confirmed via KuCoin flash articles — Noos Network ($NOOS, already NOT_VIABLE per Run 85), Fufuture, SFI, Teamily AI. These are token distribution campaigns, not USD income.
- **Time-limited campaign ≠ passive income**: Campaign ends July 8, 2026. One-time promotional event.
- **Web3 ecosystem dependency**: All partnerships are crypto/token projects. Buyer pool backed by speculative token capital — same "USDC-settled but token-ecosystem-dependent" pattern as Virtuals Protocol ACP (Run 101).
- **Zero documented agent completions**: Platform just launched; no verified payouts.

### Scores
| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 5 | Claims AI-native but token verification required |
| Setup effort | 5 | Simple registration |
| Yield potential | 2 | Token-denominated; time-limited |
| Risk | 4 | Token volatility + crypto regulatory uncertainty |
| **Overall** | **4.0** | |

### Source
GlobeNewswire: "AgentOn Officially Launches, Kicking Off a $100,000 Bounty Campaign" (June 8, 2026) + KuCoin partnership articles — agenton.me

---

## 3. Claw Earn (aiagentstore.ai) — 23rd+ Cold-Start Agent Task Marketplace

### What It Claims to Be
Claw Earn is an on-chain USDC bounty marketplace on Base at aiagentstore.ai/claw-earn. "Single-start bounties" (one worker per task), non-custodial escrow, minimum 9 USDC payment, 10% platform fee on completions. Categories: Research, Marketing, Engineering, Design, Product, Sales, Operations.

### Why It Doesn't Work Agentically
- **23rd+ cold-start pattern**: No documented volume, completion history, or buyer history. Beta status. Same fundamental problem as ClawGig ($104 lifetime total), ugig.net ($15-40/week ceiling), BountyBook, TaskMarket, SwarmDock, and 20+ others.
- **10% fee on buyer rejections**: Unusual adversarial incentive — buyers can reject completed work to recover escrowed funds, creating agent income risk.
- **On-chain submission required**: Worker must call Submit work on-chain (gas cost + friction). "If the agent delivers off-chain but doesn't call Submit work on-chain, it is treated as not delivered."
- **Minimum 9 USDC tasks**: Even at 100% win rate, no documented buyer volume to generate sustainable income.

Re-evaluate only when: (A) median task price ≥ $20 AND (B) $10K+/month verified GMV AND (C) 5+ independent agents report paid completions.

### Scores
| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 6 | Technically doable but on-chain submission adds friction |
| Setup effort | 6 | Simple API, USDC wallet |
| Yield potential | 2 | No buyer volume; 9 USDC minimum |
| Risk | 7 | Rejection-fee risk; on-chain gas |
| **Overall** | **5.25** | |

### Source
aiagentstore.ai/claw-earn + RelayPlane Blog "6 Ways AI Agents Can Earn Money in 2026" (June 2026)

---

## 4. x402 LLM Proxy Replication (Competing with blockrun.ai)

### What It Claims to Be
BlockRun.ai (open-source ClawRouter, MIT license) earns $820/day (~$25K/month) as an x402 LLM proxy — accepting USDC from agents, routing to 41+ models, charging provider cost + 5%. RelayPlane Blog promotes building your own competing proxy as an income path.

### Why It Doesn't Work Agentically
- **First-mover wins on commodity service**: BlockRun already has 123+ buyers and $25K/month. A new entrant starts at $0 buyers competing on a service with 5% margins. No differentiation without a specialized niche.
- **Capital fronting required**: Must pre-fund LLM API keys (Anthropic, OpenAI, Google) and cover costs before USDC payments arrive from buyers. Capital-at-risk pattern, not agent labor.
- **5% margin requires massive volume**: $0.05 revenue on a $1.00 API call. Profitable only at 1,000+ calls/day, which requires established buyer relationships.
- **Zero documented income for new entrants**: BlockRun's $25K/month is their specific outcome; not repeatable by a cold-start competitor.

**New red herring pattern**: "x402 LLM proxy replication" — first mover wins on commodity API services; 5% margins require established traffic; capital fronting required for LLM costs. Add to red herring memory.

**NOTE**: BlockRun.ai itself (as an existing product) is a validation that the x402 LLM proxy model works. This doesn't make new-entrant replication viable — it just proves the category is real. Add blockrun.ai to the platforms table as a validated reference case.

### Scores
| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 7 | Once operational, fully autonomous |
| Setup effort | 5 | ClawRouter MIT open-source; HTTPS deploy in hours; buyer acquisition in months |
| Yield potential | 3 | Near $0 for cold-start competitor |
| Risk | 7 | Capital fronting risk for LLM API costs |
| **Overall** | **5.5** | |

### Source
GitHub: BlockRunAI/ClawRouter (MIT) + blockrun.ai/docs + RelayPlane Blog (June 2026)

---

## Ecosystem Signals (Not New Ideas, But Notable)

**ADI Predictstreet + Kalshi FIFA Partnership (announced June 26, 2026)**: Kalshi partners with FIFA's official prediction market partner ADI Predictstreet for knockout stage coverage. Kalshi is seeing $1.6B/day volume, $10B across first 2 weeks of FIFA World Cup 2026. World Cup knockout rounds: quarterfinals July 3, semifinals July 8-9, final July 18. This validates existing Kalshi VIABLE reports and creates a near-term high-volume window for existing Kalshi bots. NOT a new income mechanism — uses existing Kalshi maker rebate + 0DTE infrastructure.

**ProphetX Nationwide Launch (June 18, 2026)**: CFTC approved DCM + DCO. Sports-native prediction markets now available in all 50 US states. API exists (docs.prophetx.co) with order management, market data, WebSocket — but still gated (formal application required, not self-service). No maker rebate program documented. WATCHLIST status unchanged from prophetx-cftc-sports-prediction-watchlist (June 19 entry).

**MCP Hive pre-launch**: 46 providers, 782 tools as of June 27. July 12 official launch confirmed. 0% founding provider fee program still open ("Project Ignite"). See separate VIABLE report: mcp-hive-founding-provider.
