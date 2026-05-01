---
title: "Red Herring: Wave 9 Bundle — Polymarket Builder Program, Idlen Dev Ads, Robin Markets, Simmer"
date: 2026-05-01
tags: [passive-income, not-viable, red-herring, polymarket, market-making, developer-tools, defi-yield]
---

# Wave 9 Red Herring Bundle — Not Viable

Four ideas from Run 35 research that failed the agentic income test for distinct reasons.

---

## 1. Polymarket Builder Program (Telegram Bot + Builder Codes)

### What It Claims to Be
Polymarket launched a Builder Program in May 2026 with $2.5M+ in grants. Developers get a "builder code" that tags orders routed through their app; Polymarket distributes weekly USDC rewards proportional to generated trading volume. Top builder "Betmoar" (a Telegram bot) drives $12M+/week in volume. Source: builders.polymarket.com, Polymarket official Twitter (@PolymarketBuild).

### Why It Doesn't Work Agentically
- **User acquisition is irreducibly human.** The program explicitly warns against "building without users." Volume = users trading through your app. Getting Polymarket traders to use YOUR Telegram bot vs. Betmoar or PolyCop requires marketing, community seeding, and sustained human promotion. The agent builds the bot (agentic), but the bot earns $0 without users (not agentic).
- **Reward rates are undisclosed.** Polymarket explicitly does not publish per-dollar reward rates. The leaderboard shows volume ranks only; actual USDC payouts are calculated case-by-case. You can't model income without knowing rates.
- **1-2 week approval gating.** After submitting your app, Polymarket reviews it manually. Not fully autonomous deployment.

### Scores

| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 5 | Agent builds/operates the bot; human must seed users and promote |
| Setup effort | 5 | Bot coding is easy; Polymarket review adds friction |
| Yield potential | 7 | Real if users exist — betmoar proves the model works |
| Risk | 8 | Polymarket ToS compliant by design |
| **Overall** | **6.25** | Real income mechanism — but fails agentic threshold at 5/10 |

### Source
builders.polymarket.com; Bitget News "Who is making money with Builder Codes"; polytrackhq.app builder codes guide (May 2026)

---

## 2. Idlen Developer Ads Extension

### What It Claims to Be
Idlen (idlen.io) is a VS Code and Chrome extension that displays non-intrusive developer tool ads during AI response wait times (while Claude/ChatGPT generates). Developers earn 70% revenue share. Claimed yield: €20-100/month. Available on Chrome Web Store and VS Code Marketplace. Source: https://www.idlen.io/

### Why It Doesn't Work Agentically
- **Requires human developer presence.** Idlen shows ads to the human sitting at VS Code or Chrome. A Claude Code agent running in a cloud terminal has no VS Code window, no browser rendering, and no human screen time to monetize.
- **Monetizes human wait time, not agent work.** The income is tied to the number of AI prompts a human sends, not to any autonomous agent activity. This is passive income for human developers, not for autonomous agents.
- **No API or programmatic participation.** Extension-only. No way for a headless agent to install or benefit from this.

### Scores

| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 1 | Zero — explicitly requires human at VS Code or Chrome |
| Setup effort | 9 | One-click install for humans |
| Yield potential | 3 | €20-100/mo is below minimum viable threshold |
| Risk | 9 | Zero ToS risk |
| **Overall** | **5.5** | Legitimate product but fundamentally NOT agentic |

### Source
https://www.idlen.io/ and idlen.io/developers/platforms; Chrome Web Store listing (May 2026)

---

## 3. Robin Markets — Staking Polymarket Positions for Yield

### What It Claims to Be
Robin Markets (robin.markets) lets Polymarket traders stake their outcome tokens (YES/NO) into vaults. The platform matches opposing positions, merges them into USDC (delta-neutral), and deploys capital to Yearn/Morpho/Aave yield protocols. Raised $475K from Fabric VC + Animoca + Gnosis co-founder. Source: crypto.news, intellectia.ai (May 2026 funding round).

### Why It Doesn't Work Agentically
- **Capital-dependent yield, not labor-derived income.** Exactly the DeFi yield red herring pattern. You need capital (Polymarket positions) to earn. APY is proportional to position size, not agent work.
- **Requires existing Polymarket positions.** You must already have capital deployed and winning positions on Polymarket to stake. This is an enhancement to existing positions, not a standalone income mechanism.
- **No documented API for autonomous staking.** The V1 product is wallet-connect only. No REST API or programmatic staking endpoint found in docs.

### Scores

| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 3 | Wallet-connect only; no API; capital-dependent |
| Setup effort | 6 | Wallet connect + stake transaction |
| Yield potential | 4 | DeFi APY on staked capital, not meaningful at small sizes |
| Risk | 5 | Smart contract risk + Polymarket position risk stacked |
| **Overall** | **4.5** | Capital-dependent DeFi yield in disguise |

### Source
robin-markets.gitbook.io/robin-markets-docs; crypto.news "Robin Markets raises $475,000" (May 2026); defiprime.com Polymarket Ecosystem Guide

---

## 4. Simmer — Prediction Market Paper Trading Platform

### What It Claims to Be
Simmer (simmer.markets) is "the agent harness for trading Polymarket and Kalshi autonomously." Agents start with 10,000 $SIM virtual tokens, paper-trade prediction markets, build track records, and can "graduate" to real USDC trading. Python SDK (`pip install simmer-sdk`), SKILL.md available on OpenClaw, strategies publish to ClawHub. Source: docs.simmer.markets; simmer.markets/skill.md

### Why It Doesn't Work Agentically
- **$SIM is virtual paper money with no USD value.** The documentation explicitly states $SIM is not convertible. Real-money graduation requires a human operator to claim the agent and fund real USDC trading.
- **The actual income mechanism is still Polymarket/Kalshi.** Simmer is a training layer over existing platforms. Real trading on Polymarket is already covered in multiple existing reports. Simmer adds no new earning mechanism.
- **Strategy publishing goes to ClawHub (already a dead end).** ClawHub is a free registry — no creator revenue sharing. Running strategies via Simmer doesn't monetize the strategy itself.

### Scores

| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 4 | Agent can paper-trade autonomously; real money requires human activation |
| Setup effort | 8 | `pip install simmer-sdk` is trivial |
| Yield potential | 1 | $SIM has zero monetary value; platform is training/research only |
| Risk | 10 | Zero — no real money involved |
| **Overall** | **5.75** | Useful infrastructure for practicing strategies; not an income mechanism |

### Source
simmer.markets; docs.simmer.markets; defiprime.com Polymarket Ecosystem Guide; PyPI simmer-sdk package
