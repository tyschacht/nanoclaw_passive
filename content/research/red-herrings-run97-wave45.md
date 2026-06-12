---
title: "Red Herring: Run 97 Wave 45 Bundle"
date: 2026-06-12
tags: [passive-income, not-viable, red-herring, fablepool, robinhood-mcp, dex-arb, notion-templates]
---

# Run 97 Wave 45 — Not Viable

## FablePool — No Earning Mechanism

### What It Claims to Be
FablePool (fablepool.com, 432 HN pts June 11 2026) is a crowdfunding platform where users post "big prompts," backers pool credits ($0.01 each, $0.25 minimum), and when a milestone fills, Claude Fable 5 builds it publicly. All output is MIT licensed.

### Why It Doesn't Work Agentically
- **No earning mechanism for any human participant.** The proposer (who submits the prompt) receives zero compensation. The only roles are: proposer (earns nothing) and backer (spends money).
- **Money flows one direction only:** backers → FablePool/Anthropic. There is no rev-share, royalty, or bounty for anyone.
- **No API.** fablepool.com/api returns 404. Requires Google OAuth + web UI only. No programmatic participation possible.
- **The AI is the "hired builder," not a participant who earns.** Claude Fable 5 generates the output but Anthropic captures the API revenue. FablePool captures platform fees.

### Scores
| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 1 | No earning mechanism exists at all |
| Setup effort | 9 | Trivially easy to post a prompt |
| Yield potential | 1 | $0 to any participant |
| Risk | 10 | No risk because no money |
| **Overall** | **3.0** | Interesting product, zero income potential |

### Source
HN: 48496539 (432 pts, June 11 2026)

---

## Robinhood MCP Agentic Trading — Capital-Dependent (Wave 2)

### What It Claims to Be
Multiple YouTube videos this week (Ryan Doser `w4QrQdulH0g`, Trading Smarter with AI `RC1YUr7wkzw`, Autopilot Passive Income `WRW6L6HVmhg`) cover using Robinhood's official MCP server (launched May 27, 2026) with Claude Code to autonomously buy/sell stocks and options.

### Why It Doesn't Work Agentically
- Already documented in red-herrings-run81-wave31: capital-dependent trading; subscription/advisory model blocked by SEC/FINRA.
- The new Robinhood MCP enables *execution* but doesn't change the fundamental issue: income requires capital at risk. Every trade is a bet, not a royalty.
- The "$3,168 in 4 days" claim (Autopilot Passive Income channel, 4,666 views) is unaudited, short-duration, and uses undisclosed capital amount. Classic "screenshot P&L" format.

### Scores
| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 7 | Execution is fully autonomous via MCP |
| Setup effort | 7 | MCP + Claude Code = relatively easy |
| Yield potential | 4 | Capital-dependent; loss is as likely as gain |
| Risk | 3 | Financial loss risk; SEC/FINRA if offered as subscription |
| **Overall** | **4.5** | Covered in run81; no new information |

### Source
YouTube: Ryan Doser `w4QrQdulH0g`, Trading Smarter with AI `RC1YUr7wkzw`, Autopilot Passive Income `WRW6L6HVmhg` (June 2026)

---

## DEX Arbitrage Bot with Claude — Capital-Dependent

### What It Claims to Be
YouTube: BryanDEV channel (`9IkVsluZBzQ`, 7,108 views, June 9 2026): "Deploying an Ethereum DEX Arbitrage Bot with Claude AI (Real Results + Full Setup)." Claude Code writes a bot that scans Uniswap/SushiSwap price differences and executes arbitrage trades.

### Why It Doesn't Work Agentically
- Capital-dependent: needs ETH in wallet to execute trades. Losing the capital = losing income.
- Gas costs on Ethereum mainnet ($5–$50/tx) eat margins on small price discrepancies.
- True on-chain arb profitable opportunities last milliseconds and require validator co-location (MEV). This is the slower "retail DEX arb" that institutional bots already dominate.
- Falls under the "paste contract code → fund with ETH → click start" red herring category, despite being more technically legitimate.

### Scores
| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 6 | Bot runs autonomously once deployed |
| Setup effort | 5 | Claude builds the code but Ethereum/Alchemy setup is moderate |
| Yield potential | 4 | Capital-dependent; retail arb margins near-zero after gas |
| Risk | 3 | Capital loss risk; Ethereum gas unpredictability |
| **Overall** | **3.5** | Red herring variant of MEV pattern |

### Source
YouTube: BryanDEV `9IkVsluZBzQ` (7,108 views, June 9 2026)

---

## Notion Template Marketplace — Waitlist Blocker

### What It Claims to Be
Notion's marketplace (notion.com/marketplace) lets creators sell templates with 90% revenue share (Notion takes 10% + $0.40/tx). Top creators: Easlo $500K+, Thomas Frank $1M+ from 2 templates. Income potential is real.

### Why It Doesn't Work Agentically
- **Multi-stage human-gated onboarding:** (1) creator profile web UI, (2) waitlist application — "may take a few months to get reviewed," Notion approves at discretion, (3) Stripe identity verification, (4) web form per template submission.
- **No listing API.** The Notion REST API has zero marketplace endpoints. No programmatic way to create or update listings.
- **Updates also require web UI.** Even price changes and description edits must go through web form.
- The only automated piece is an inbound purchase webhook (`marketplace.purchase` event) — receive-only, cannot create anything.
- This is structurally worse than Framer (VIABLE, 6.5/10): Framer requires one-time manual click per template, then instantly live; Notion requires waitlist + months of delay + review per template.
- A human would need to be involved at multiple non-automatable steps indefinitely.

### Scores
| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 4 | Template generation ✓ agentic; listing creation, management ✗ web UI only; waitlist = unknown-duration blocker |
| Setup effort | 2 | Waitlist approval may take months; Stripe KYC; per-template review forms |
| Yield potential | 8 | Real income documented: $500K–$1M+ for top creators |
| Risk | 8 | No ToS concerns; legitimate platform |
| **Overall** | **5.5** | Fails agentic viability threshold; resolves WATCHLIST from Run 63 |

### Source
Web: notion.com/help/selling-on-marketplace (confirmed June 2026); r/passive_income community anecdotes; ezycourse.com, automateed.com income guides
