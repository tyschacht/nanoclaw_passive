---
title: "Red Herring: Run 85 Wave 34 Bundle — Phone Compute Workers, Token Skill Markets, Devnet Protocols, OpenClaw Service Models"
date: 2026-05-30
tags: [passive-income, not-viable, red-herring, token-dependency, physical-hardware, devnet, service-model, openclaw]
---

# Run 85 Wave 34 — Not Viable

Four distinct patterns evaluated in the May 30, 2026 research run. All fail the agentic income test.

---

## 1. Dispatch.computer — Phone Compute Workers

### What It Claims to Be
A decentralized AI compute marketplace where the Seeker app turns any idle smartphone into a compute worker node. Phones process AI tasks (LLM inference, summarization, classification) over WebSocket while idle, earning BOLT (Solana SPL token) plus USDC on Monad per completed job. Cryptographic ed25519 verification per task, ERC-8004 on-chain reputation.

### Why It Doesn't Work Agentically
- **Requires physical hardware a Claude Code agent cannot control.** The Seeker app runs on a physical iOS/Android device. A Claude Code agent executes in a cloud VM — there is no path to install or operate a phone app autonomously.
- **Income is hardware staking, not agentic labor.** The phone CPU/NPU does the compute work. This is asset deployment (same as DeFi yield optimization) not labor-derived income.
- **Token dependency (BOLT on Solana).** Primary income is BOLT tokens with no guaranteed USD floor. USDC is on Monad chain (not Base) — additional bridge friction.

### Scores
| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 1 | Requires physical smartphone app — Claude Code agents cannot operate phone apps |
| Setup effort | 3 | Human must install app on phone; no agentic path |
| Yield potential | 3 | Token value unproven; USDC on secondary chain |
| Risk | 5 | Phone compute risk low; token volatility moderate |
| **Overall** | **3.0** | |

### Source
HN research sweep (May 30, 2026). dispatch.computer

---

## 2. SkillMarket.space — $SKILL Token Bonding Curve Marketplace

### What It Claims to Be
A tokenized marketplace for AI agent skills on Solana. Developers deploy a skill (scraper, swap executor, chain analyzer) and it auto-creates a bonding curve token. Every invocation splits: 70% creator / 20% $SKILL stakers / 10% protocol. Compatible with Claude Code; agents discovering and paying for skills use the bonding curve pricing.

### Why It Doesn't Work Agentically
- **Purely token-denominated income.** Creator earnings are in $SKILL SPL tokens and bonding-curve tokens, NOT USD or USDC. Matches the "gig economy platforms with virtual token rewards" red herring pattern ($CLAW/$ASTRA/$BOLT/BotCoins all same lifecycle).
- **No USD/USDC payout mechanism documented.** No confirmed withdrawal to cash.
- **Bonding curve = illiquid exit.** Realizing earnings requires selling tokens into the curve — thin liquidity if skill is rarely invoked.
- **Solana ecosystem, not Base.** Most established agentic payment rails (x402, Circle Agent Stack) operate on Base L2. Separate toolchain, smaller AI agent audience.

### Scores
| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 6 | Skill deployment headless; Claude Code can build skills |
| Setup effort | 6 | Skill authoring is straightforward |
| Yield potential | 2 | Token income with no verified USD floor |
| Risk | 3 | Token price exposure; bonding curve exit risk |
| **Overall** | **4.25** | |

### Source
HN research sweep (May 30, 2026). skillmarket.space

---

## 3. AgentLink / skill.md Protocol — Solana Devnet

### What It Claims to Be
An agentic gig protocol where any HTTP-capable agent reads one URL, POSTs to `/join` to receive a Solana wallet, bids on `/jobs`, delivers work via API, and earns SOL via on-chain escrow. Fully autonomous at the task level — no human in the loop for gig discovery and delivery.

### Why It Doesn't Work Agentically
- **Devnet only — no real income today.** All funds are test SOL on Solana Devnet. No production mainnet with real buyers or payments exists.
- **SOL denomination.** Even on mainnet, income would be volatile SOL, not USD/USDC.
- **Cold-start buyer problem (13th+ instance).** Confirmed recurring pattern: elegant technical design + zero buyer demand. Same cohort as BountyBook, ClawGig, SwarmDock, 0xWork, BeeLancer, AgentPact, etc.

### Scores
| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 7 | Technically clean HTTP protocol |
| Setup effort | 7 | POST /join is a one-liner |
| Yield potential | 1 | $0 earnable today (Devnet) |
| Risk | 5 | Devnet zero risk; mainnet TBD |
| **Overall** | **5.0** | |

### Source
HN: https://news.ycombinator.com/item?id=46917375 + theagentlink.xyz (May 30, 2026)

---

## 4. OpenClaw "Setup Services" Income Methods (YouTube)

### What It Claims to Be
"Every Way to Make Money With OpenClaw" (Youri van Hofwegen, 8,925 views, May 29, 2026) documents 6 income streams: (1) VPS setup services for clients ($150–400/install), (2) custom SKILL.md files on Claw Hub/Gumroad/Etsy, (3) digital template packs ($49–99), (4) Hostinger + OpenRouter affiliate links, (5) Agent-as-a-Service retainers ($200–500/mo per client), (6) Skool paid communities.

### Why It Doesn't Work Agentically
- **Methods 1, 5, 6 are pure service models.** VPS setup, monthly agent management, and community moderation all require ongoing human involvement. Client acquisition is fully human-bottlenecked.
- **Method 2 (SKILL.md files) is already covered.** Selling skills on Gumroad is documented in `gumroad-cli-digital-product-factory` (VIABLE, 8.0/10) and `agent37-claude-skill-marketplace` (VIABLE, 7.0/10). Claw Hub itself is a free directory with no monetization layer.
- **Method 3 (template packs) is already covered.** Documented in `whop-n8n-automation-templates`, `gumroad-cli-digital-product-factory`, `regulatory-filings-compliance-product-pipeline`, and `custom-ai-brand-voice-whop`.
- **Method 4 (affiliate) requires audience.** Content distribution drives affiliate income, not autonomous agent activity.

### Scores
| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 3 | Setup/community methods irreducibly human; only digital product sub-method is agentic (already covered) |
| Setup effort | 5 | Variable by method |
| Yield potential | 5 | Income claims real but for human operators |
| Risk | 7 | Low risk; Claw Hub has no monetization (free directory) |
| **Overall** | **5.0** | |

### Source
YouTube: Youri van Hofwegen, "Every Way to Make Money With OpenClaw" (DojCf6noL18, 8,925 views, May 29, 2026)
