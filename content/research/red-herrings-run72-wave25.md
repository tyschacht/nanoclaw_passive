---
title: "Red Herring: Wave 25 — Moomoo API Skills, Notion Workers, OwlPay Wallet, Data Broker Opt-Out"
date: 2026-05-19
tags: [passive-income, not-viable, red-herring, capital-dependent, no-marketplace, saturated-market]
---

# Wave 25 Bundle — Not Viable

Four ideas evaluated this run, all below threshold. Bundled here to prevent future re-evaluation.

---

## 1. Moomoo API Skills (moomoo.com/en/api-skills)

### What It Claims to Be
Moomoo (NASDAQ: FUTU) launched "API Skills" on April 23, 2026 — described as "agentic investing" that lets retail traders connect personal AI agents to Moomoo's trading infrastructure via natural language commands. Features: intent-driven strategy translation, 24/7 market monitoring across US/CA/HK/SG/JP, backtesting/paper trading.

### Why It Doesn't Work Agentically
- **Capital-dependent by design.** Income = profitable trades. The agent executes strategies your capital funds — not a labor-derived income stream. Same pattern as `alpaca-openclaw-stock-trading-bot` (net loss in 30-day live test, −$367), `ai-swing-trading-broker-api`, `autonomous-options-selling-broker-cli`.
- **No verified live P&L.** Moomoo's press release mentions backtesting and paper trading only. Zero documented live agent returns.
- **Moomoo earns from you** (commissions, spread) regardless of whether you profit. This is a spend-side API for traders, not an earn-side income mechanism.

### Scores
| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 7 | API is genuinely agent-native; natural language strategy translation is real |
| Setup effort | 7 | Easy API connection; paper trading default lowers barrier |
| Yield potential | 3 | Capital-dependent; at 10% annual on $10K = $19/week; same as DeFi yield pattern |
| Risk | 4 | Market risk + counterparty risk; profits not guaranteed |
| **Overall** | **5.25** | Fails yield threshold; same pattern as 6 prior trading red herrings |

### Source
Web: GlobeNewswire (Apr 23 2026) + FinancialIT + FintechNews Singapore coverage

---

## 2. Notion Workers (notion.com/blog/introducing-developer-platform)

### What It Claims to Be
Notion launched its Developer Platform on May 13, 2026, including "Workers" — custom server-side code deployed inside Notion that can run multi-step automated workflows, connect to external APIs, and power AI agents operating within workspaces.

### Why It Doesn't Work Agentically
- **No developer revenue share.** Notion Workers are a compute product for *Notion users* to run their own automation. There is no creator marketplace, no rev share program, and no mechanism for a developer to earn from others running their Workers.
- **Free-to-use (currently) → Notion credits (August 2026).** Workers cost Notion credits, paid by the workspace operator — not a source of income for the developer who built the Worker.
- **Not a marketplace.** Workers run inside a specific workspace; there's no discovery layer for external developers to find and subscribe to your Worker. Compare with [[google-workspace-addon-clasp-cli]] (actual marketplace with paid listings) — Notion Workers have no equivalent.
- **Confirmed by official docs:** "Starting August 11, 2026, Workers will run on Notion credits" — no mention of developer payouts anywhere in the launch materials.

### Scores
| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 7 | Workers are genuinely agentic and headlessly deployable |
| Setup effort | 8 | Well-documented, good SDK |
| Yield potential | 1 | $0 earnable; no monetization layer exists |
| Risk | 10 | Zero risk |
| **Overall** | **6.5** | Fails yield criterion entirely; 6.5 is misleading — this earns literally nothing |

### Source
Web: notion.com/blog/introducing-developer-platform (May 13 2026); TechCrunch "Notion just turned its workspace into a hub for AI agents" (May 13 2026)

---

## 3. OwlPay Agent Wallet (owlting.com)

### What It Claims to Be
OwlTing Group (NASDAQ: OWLS) launched OwlPay Agent Wallet on May 4, 2026 — a self-custody wallet specifically designed for AI agents to send, receive, and manage stablecoins. Supports Ethereum ecosystem, Stellar, and Solana. Integrates x402 standard. Works with Visa Direct for USDC funding. Agent "installs the wallet as a skill."

### Why It Doesn't Work Agentically
- **Spend-side infrastructure only.** OwlPay lets your agent *pay* others — not earn from others. The wallet is a payment tool, not an income mechanism.
- **Same x402 pattern as 16+ prior entries.** OwlPay adopts the x402 standard (HTTP 402 USDC micropayments). The earn-side of x402 already has an extensive cold-start problem documented in the library (see `x402-boring-utility-data-apis`, `x402-uk-data-mcp-live-deployment`, etc.) — building a provider on x402 rails requires traffic that doesn't exist yet.
- **No creator program.** OwlPay doesn't pay developers to build skills or integrations. There's no equivalent of an app marketplace.

### Scores
| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 7 | Wallet API is genuinely agent-native |
| Setup effort | 7 | Skill install is one-line |
| Yield potential | 1 | $0 earnable from the wallet itself |
| Risk | 9 | Low risk (self-custody) |
| **Overall** | **6.0** | Misleading score — this earns $0 directly; useful infrastructure for OTHER income mechanisms but not itself one |

### Source
Web: GlobeNewswire "OwlTing Group Launches OwlPay Agent Wallet" (May 4 2026); MEXC News coverage; StockTitan x402 adoption notice

---

## 4. Data Broker Opt-Out Subscription Service

### What It Claims to Be
Sparked by the 322-point HN post "Show HN: Auto-identity-remove – Automated data broker opt-out runner for macOS" (ID:48178184, May 18 2026) — a free open-source tool that automates opt-out requests to data brokers (Spokeo, BeenVerified, Whitepages, etc.). The adjacent business idea: build a *paid* subscription version of this service using Claude Code + Playwright.

### Why It Doesn't Work Agentically
- **Market is saturated with funded competitors.** Incogni (Surfshark-backed), Optery (635+ sites automated), DeleteMe, GhostMyData, and Aura already do exactly this. Incogni sends thousands of automated deletion requests and re-submits when data reappears. Building a new entrant competes against established brands with SEO moats.
- **California DROP platform (August 1, 2026) commoditizes the core value.** California's government DELETE request platform lets consumers send one request to 500+ registered data brokers for free. This undercuts the subscription rationale for the biggest US market.
- **The open-source post is a free product.** Auto-identity-remove is MIT-licensed, macOS-only, free. It confirms the pipeline is real but eliminates the proprietary tech advantage for a new paid service.
- **Income-generating agentic pipeline is weak.** Client acquisition requires marketing vs. incumbents with Google ranking and word-of-mouth. At $10-20/month subscription, you need 500+ subscribers to reach $5K/month — against Incogni's established user base.

### Scores
| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 7 | Opt-out request automation via Playwright is real (Optery confirms AI automation is used) |
| Setup effort | 4 | Need to build opt-out flows for 200+ brokers; update as brokers change their forms |
| Yield potential | 4 | Saturated market; $500-1500/mo ceiling for a new entrant |
| Risk | 6 | CFAA grey area for automated form submission; Captcha arms race; broker ToS issues |
| **Overall** | **5.25** | Below threshold; market captured by incumbents; California DROP destroys the value prop |

### Source
HN: Show HN ID:48178184 (322 pts, May 18 2026) github.com/stephenlthorn/auto-identity-remove; Web: TechTimes "Best Data Broker Removal Services in 2026"; privacy.ca.gov/drop (California DROP platform)
