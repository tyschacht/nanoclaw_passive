---
title: "Red Herring: Wave 51 Bundle — Terminal Ads, OpenTask, execution.market, TurbineFi"
date: 2026-06-18
tags: [passive-income, not-viable, red-herring, terminal-ads, agent-marketplace, cold-start, spend-side, prediction-markets]
---

# Wave 51 Bundle — Not Viable

*Four new platforms evaluated on June 18 2026. All fail the agentic income test for distinct reasons.*

---

## 1. Bacon — Terminal Ad Network for Claude Code (geturbacon.dev)

### What It Claims to Be
An ad network that pays developers while Claude Code runs. Install `npx @geturbacon/wizard@latest`, see branded ads in the terminal during Claude Code inference ("spinner, statusline, strip, card, marquee" surfaces), and collect 50% of each ad placement fee. Builder is Oscar; shout-out to Kickbacks.ai (VS Code version) credited explicitly in the HN post.

### Why It Doesn't Work Agentically
- *Human-gated by design.* The entire mechanism requires a human sitting at the terminal watching ads. The product is fundamentally an "attention monetization" play — the developer's eyeballs are the inventory, not their compute.
- *Anti-bot detection explicitly in place.* Builder notes: "I also considered the loops and bots situation, so I made a 4 layer detection system to identify those weird patterns and included a 72hr hold before the payouts clear." Autonomous agent loops = detected + blocked.
- *Yield ceiling is trivially low.* Site states: "most devs make a few dollars a month, heavy users more." This is explicitly positioned as "found money for coding you were doing anyway, not a paycheck."
- *Variant of Kickbacks.ai.* Already evaluated in Run 99 (red-herrings-run99-wave47) at 5.25/10. Bacon is the terminal-native reboot of the same model — no structural difference.
- *Claude ToS risk.* Builder himself writes: "I genuinely hope this is not a speedrun to get me banned on claude."

### Scores
| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 2 | Anti-bot detection explicitly blocks loops; requires human eyeballs |
| Setup effort | 9 | `npx` install, takes 30 seconds |
| Yield potential | 1 | "A few dollars a month" stated on site; not weekly not passive |
| Risk | 5 | Claude ToS risk flagged by builder; Stripe payout via 72hr hold |
| **Overall** | **4.25** | |

### Source
HN 48572417 (3 pts, June 17 2026) + geturbacon.dev direct inspection

---

## 2. OpenTask.ai — Agent Task Marketplace with $TASK Token

### What It Claims to Be
A marketplace for autonomous agents to discover work, negotiate terms, deliver results, and earn payment. Claims multi-currency support: $TASK token, ETH, USDT, USDC, and fiat (Stripe/PayPal). Builder pitch: "OpenTask gives autonomous agents a place to find work, negotiate terms, coordinate delivery, settle payments, and carry reputation."

### Why It Doesn't Work Agentically
- *$TASK token as primary currency = red herring pattern.* Platforms that introduce a proprietary token alongside USDC almost always have the token as the primary incentive layer. Pattern confirmed across 22+ previous evaluations: token-denominated income ≠ fiat income unless explicit USD conversion is documented. No documentation of $TASK → USD conversion confirmed.
- *Cold-start, no volume data.* No active task counts, no documented agent earnings, no transaction metrics on the site or in any independent report. Kirothebot (DEV.to May 2026) includes it in "12 platforms" list with no verified earnings data; a commenter on that article explicitly requested "receipts" and "anonymized settlement traces" — none provided.
- *25th+ agent marketplace cold-start evaluation.* Same structural pattern as ClawGig ($104 total), dealwork.ai ($237 total), ugig.net ($1-5/task ceiling), agentmart.store ($5-30/week). Cold-start is endemic to this category.

### Scores
| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 6 | API documented; negotiation workflow is agentic |
| Setup effort | 7 | Registration then API |
| Yield potential | 2 | No verified task volume; $TASK token uncertainty |
| Risk | 6 | Low platform risk but token liquidity uncertain |
| **Overall** | **5.25** | |

### Source
kirothebot DEV.to "The Agent Economy Is Real: 12 Platforms" (May 2026) + opentask.ai direct scan + opentask.vip cross-reference (June 2026)

---

## 3. execution.market — AI Agents Hire Humans for Physical Tasks

### What It Claims to Be
A marketplace where AI agents hire humans to complete physical-world tasks the agent cannot do: pick up packages, take photos, verify store hours, geolocation-tagged presence checks, bureaucratic form filing, etc. 21 task categories. USDC on 9 EVM chains (Base, ETH, Polygon, Arbitrum, Avalanche, Optimism, Celo, Monad, SKALE). 11-13% platform fee.

### Why It Doesn't Work Agentically
- *Spend-side only, not earn-side.* This is a platform where AI agents PAY humans, not where agents EARN money. The "agent" is the buyer. The earners are human workers completing physical tasks.
- *Different problem, wrong direction.* execution.market solves the physical-world gap for AI agents — genuinely useful for multi-agent pipelines. But it cannot generate agentic income; it generates human income from AI buyers.
- *Not a red herring in the "bad product" sense* — the platform is legitimate and the mechanism works. It's simply not an income mechanism for agents; it's a spend mechanism.

### Scores (as income mechanism)
| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 1 | Agents are buyers, not earners |
| Setup effort | N/A | Cannot earn here as an agent |
| Yield potential | 1 | Zero; spend-side only |
| Risk | 9 | Platform itself is low-risk |
| **Overall** | **3.0** | Wrong direction entirely |

### Source
kirothebot DEV.to "The Agent Economy Is Real" (May 2026) + execution.market direct inspection (June 18 2026)

---

## 4. TurbineFi — Prediction Market Strategy Builder ($99-299/mo Subscription)

### What It Claims to Be
A platform where users describe prediction market trading strategies in plain English, TurbineFi auto-backtests them against 30 days of historical data, then deploys them to cloud sandboxes running 24/7. Supports Kalshi (live) and Polymarket (live). $99/mo Basic, $299/mo Pro (with API access). Has x402 integration for wallet provisioning.

### Why It Doesn't Work Agentically (as income mechanism)
- *TurbineFi is a TOOL you pay for, not an income mechanism.* At $99/mo minimum, it costs money to run. The income (if any) comes from the prediction market strategies themselves, which require capital and a genuine edge. The platform's existence doesn't create the edge.
- *No documented winning strategies.* The blog says "Olas Polystrat executing 4,200+ trades in its first month at 37% positive P&L" — but this is PR content; Olas is a separate AI agent ecosystem, not a TurbineFi user.
- *Already covered by existing VIABLE reports.* Multi-model ensemble prediction market strategies (polymarket-autonomous-whale-tracker, kalshi-multi-model-ensemble-bot, prediction-market-maker-kalshi) all document better approaches without a $99/mo subscription gate. The underlying strategy is the value, not the wrapper.
- *Capital-dependent.* Real returns require real capital. $99/mo subscription + capital risk = the same pattern as OANDA/Coinbase/Robinhood agentic trading.

### Scores
| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 7 | Cloud sandbox + NL strategy → backtest → deploy is solid pipeline |
| Setup effort | 5 | 7-day trial, then $99/mo recurring cost |
| Yield potential | 3 | Capital-dependent; must recoup $99/mo + earn above it |
| Risk | 4 | Capital risk + $99/mo cost floor |
| **Overall** | **4.75** | Tool cost undermines income math |

### Source
HN 47891447 (4 pts, April 2026) + turbinefi.com inspection + TurbineFi blog content (June 2026) + web search cross-validation

---

## Ecosystem Signal (Not a New Idea — Validation)

**x402 volume milestone confirmed:** HN 48367918 (6 pts, June 2026) reports "Agent payments reach 3.1M x402 transactions in 30 days." Corroborates the existing xpay-mcp-zero-code-proxy and stripe-mpp-api-provider VIABLE reports. x402 infrastructure is demonstrably live and growing.

**Google Antigravity 2.0 launched June 18 2026** as a standalone agent-first platform (decoupled from IDE). Skills.md SKILL.md cross-compatible with Claude Code, Codex, Cursor. Google's Official Skills Repository = *open source only* (no paid marketplace component). The Agensi.io SKILL.md monetization path (Run 41 VIABLE) remains the primary monetization layer for skills that also work in Antigravity.
