---
title: "Red Herring: Run 86 Wave 35 Bundle — Kalshi Perps, Cold-Start Agent Marketplaces (Wave 13+), Human-Labor Video Methods, Polymarket US Domestic (Needs Verification)"
date: 2026-05-31
tags: [passive-income, not-viable, red-herring, capital-dependent, cold-start, agent-marketplace, kalshi, human-required, polymarket, prediction-markets]
---

# Run 86 Wave 35 — Not Viable

Five patterns evaluated in the May 31, 2026 research run, plus one "worth monitoring" item flagged for future verification. All fail the agentic income test at current information quality.

---

## 1. Kalshi Perpetual Futures — Capital-Dependent Derivatives Trading

### What It Claims to Be
Kalshi (CFTC-regulated DCM) launched perpetual futures contracts on BTC and ETH in May 2026. Unlike Kalshi's traditional yes/no event contracts, these are continuous-settlement derivatives that can be traded with leverage. AI trading bots can connect via Kalshi's REST + WebSocket API with no rate limits documented.

### Why It Doesn't Work Agentically
- **Capital-dependent trading, not service income.** Perpetual futures P&L is entirely driven by capital deployed and market direction accuracy. This is the same disqualifier as Kalshi cross-market arb, Polymarket directional bots, and all BTC/ETH trading strategies documented since Run 1.
- **Unlimited downside risk.** Leverage instruments require continuous human oversight in drawdown scenarios. An agent running unsupervised can lose principal faster than gains accumulate.
- **Fits established red herring pattern.** This is the 9th "AI trading bot on derivatives platform" idea evaluated (previous: Hyperliquid vaults, GMX liquidity, Kalshi event arb, Polymarket crypto direction bots, prediction market cross-platform arb, Bybit grid bots, dYdX strategy vaults, drift-protocol perpetuals). All failed on capital dependency.

### Scores
| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 5 | API available but trading P&L is capital-dependent |
| Setup effort | 5 | Kalshi API is well-documented |
| Yield potential | 4 | Depends entirely on capital deployed and prediction accuracy |
| Risk | 2 | Perpetual futures = unlimited downside; leverage amplifies losses |
| **Overall** | **4.0** | |

### Source
Web search sweep (May 31, 2026). Kalshi May 2026 product launch. kalshi.com/markets/perps

---

## 2. Cold-Start Agent Task Marketplaces — Wave 13 Bundle (execution.market, opentask.ai, BuildMVPFast)

### What They Claim to Be
Three new agent-for-hire platforms that appeared in May 2026 Reddit/HN sweep:
- **execution.market**: Claude Code agents listed as workers on a task marketplace; buyers post bounties, agents execute
- **opentask.ai**: "Open marketplace for AI agent tasks" — post a task, AI agent completes it for USDC
- **BuildMVPFast.io**: Human-curated list of AI agents you can hire to build MVPs; agent operators get paid per build

### Why They Don't Work Agentically
- **Cold-start earn-side problem (13th confirmed instance).** All three have no documented transactions from agent operators. Buyer side may have minimal activity. No revenue sharing data, no confirmed USDC payouts to agents.
- **Human-required for quality control.** MVP building and complex task execution require human review of agent output before delivery. Platforms with quality guarantees make this explicit in ToS.
- **Matches exact pattern.** Previously documented failed instances: agent-task-marketplace, OpenClaw task market, Circle Agent Marketplace (curated gate), AgentNexus, TaskChain, ClaudeForHire, PromptWorker, AgentBounty, AskAnAgent, RunMyAgent, BuildOnAgent, AgentShop. All same lifecycle — platform launched, no agent-side revenue documented.

### Scores
| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 5 | Technical execution possible |
| Setup effort | 5 | Listing an agent is straightforward |
| Yield potential | 2 | Zero verified earn-side transactions across 13+ instances |
| Risk | 5 | Low platform risk; high opportunity cost |
| **Overall** | **4.25** | |

### Source
Reddit sweep r/SideProject, r/AiAutomations (May 24-31, 2026).

---

## 3. Joshua Mayo "4 Ways to Make Money With Claude AI" — Etsy + Consulting Methods

### What It Claims to Be
YouTube video (wz9CmUZ4jRg, 104K views as of May 2026) by Joshua Mayo covering 4 income methods with Claude AI. Methods include: (1) creating Etsy digital products (worksheets, templates, planners), (2) building Claude-powered websites for clients, (3) creating mini-courses, (4) consulting/coaching.

### Why It Doesn't Work Agentically
- **Methods 1 (Etsy) already covered.** [[hyper-niche-etsy-digital-products]] documents the Etsy digital product mechanism. No new mechanism here; Mayo's framing adds no agentic automation angle beyond what's already documented.
- **Methods 2-4 are pure human service work.** Website-for-clients = client services. Mini-courses = content creation requiring human expertise. Consulting = entirely human labor. Claude is a tool, not the income mechanism.
- **Video format = educational entertainment, not novel research.** High view count reflects Mayo's audience, not mechanism novelty.

### Scores
| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 2 | Client services require human relationships |
| Setup effort | 6 | Easy to start freelancing |
| Yield potential | 5 | Human-time dependent |
| Risk | 7 | Low risk, but not passive |
| **Overall** | **5.0** | |

### Source
YouTube Data API search (May 2026). Video ID: wz9CmUZ4jRg

---

## 4. Sabrina Ramonov "Teaching Claude AI" Course — Human Consulting Model

### What It Claims to Be
YouTube video (100K+ views) by Sabrina Ramonov covering her method for income: teaching others how to use Claude effectively via courses, coaching, and community membership.

### Why It Doesn't Work Agentically
- **Pure human labor.** Teaching, coaching, and community management all require the human's time, expertise, and presence. Claude is the subject matter, not the worker.
- **Matches "human consulting/agency work" red herring pattern.** This is the same pattern as: Claude freelance agency, prompt engineering consulting, AI workflow design services, AI tutoring, automation consulting. All require human delivery.

### Scores
| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 1 | Human teaching is definitionally non-agentic |
| Setup effort | 5 | Course/community requires significant human effort to build |
| Yield potential | 6 | High earning potential but entirely human-time-dependent |
| Risk | 7 | Sustainable model but not passive |
| **Overall** | **4.75** | |

### Source
YouTube Data API search (May 2026). Sabrina Ramonov channel.

---

## 5. Claude Opus 4.8 Dynamic Workflows — Infrastructure Research Preview

### What It Claims to Be
Anthropic research preview (May 2026) of "dynamic workflow compilation" in Claude Opus 4.8 — the model can plan and rewrite its own multi-step execution graph mid-task, enabling complex agentic pipelines without pre-defined scaffolding. Described as an advancement in autonomous agent reliability.

### Why It's Not an Income Mechanism
- **Infrastructure tool, not income source.** Dynamic workflow capability improves Claude agents' ability to execute complex tasks, but it doesn't create a new monetization channel by itself.
- **No documented earning pathway.** No marketplace, no API pricing delta, no platform that pays for this capability.
- **Same pattern as past capability announcements.** Previous false starts: Claude MCP server release (Sept 2024), Claude Projects launch, Claude tool use release — all improved capabilities but didn't create new income mechanisms independently.

### Scores
Not scored — infrastructure research, not an income mechanism.

### Source
Web search sweep (May 31, 2026). Anthropic blog / model card announcement.

---

## ⚠️ Worth Monitoring: Polymarket US Domestic Platform (Unverified Fee Structure)

### What Was Found
Unverified sources (quantvps.com, tradingvps.io — VPS providers, not official Polymarket docs) report that Polymarket now operates TWO distinct platforms:
1. **Global Polymarket** (current VIABLE report: [[polymarket-maker-rebates-market-making]]): Polygon/USDC, 25% maker rebate on taker fees
2. **US Domestic Polymarket** (CFTC-regulated DCM): Reportedly 0.30% taker fee / 0.20% maker rebate on total contract premium; requires US KYC via iOS app

### Why Not Evaluated as Viable Yet
- **Source quality insufficient.** Fee structure reported by VPS provider blog posts, not official Polymarket documentation or official announcements. The 0.20% maker rebate on total premium is structurally different from the 25%-of-taker-fees model and needs official confirmation.
- **KYC friction is uncharacteristic for agentic operations.** US-only, iOS app verification, proof of address — high setup bar for bot operators.
- **API availability unclear.** Sources don't confirm whether the US domestic platform has a public CLOB REST API equivalent.

### Recommended Follow-Up Action
Check official Polymarket documentation (docs.polymarket.com) for US domestic platform details. If confirmed: evaluate as a distinct opportunity from [[polymarket-maker-rebates-market-making]] since the 0.20%-of-premium structure would be more predictable (less sensitive to taker fee rate fluctuations) and CFTC regulated (reduced legal risk).

---

## Regulatory Signal: Spain Blocks Polymarket and Kalshi

Not a new income mechanism, but a relevant risk update for all existing prediction market VIABLE ideas.

Reuters (May 26, 2026) and HN (1081 points) confirmed Spain's CNMV issued regulatory orders blocking Polymarket and Kalshi for Spanish users. Italy and France have issued similar warnings in past months. Pattern: EU member states applying MiFID II derivatives rules to US prediction markets.

**Impact on VIABLE reports:**
- [[polymarket-maker-rebates-market-making]]: Adds EU regulatory risk note
- [[polymarket-weather-bot-gfs-edge]]: Same
- [[polymarket-kalshi-cross-platform-arbitrage]]: Already flagged as declining-edge; this adds geographic risk
- [[kalshi-weather-power-market-making]]: Kalshi is CFTC-regulated but EU users of any Kalshi strategy should be aware

This risk is documented in agent-memory.md under "Emerging Risk Signals."

---

*Run 86, Wave 35. Five items evaluated. Zero new VIABLE ideas this run. One item flagged for monitoring (Polymarket US domestic, pending official source). Two risk signals noted (Spain regulatory block, Polymarket 15-min market taker fees introduced).*
