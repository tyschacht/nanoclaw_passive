---
title: "Idea: Polymarket Trade History MCP API — Query 1.3B Trades via Claude"
date: 2026-06-04
tags: [passive-income, agentic, viable, polymarket, mcp, data-api, prediction-markets, subscription]
---

# Polymarket Trade History MCP API

## What It Is

An agent syncs the full public Polymarket trade ledger (1.3B trades, 2.7M wallets) into a local Postgres database on a rolling schedule, then exposes it as a paid remote MCP server that lets Claude Code and other agents query the data in plain English — "which wallets made 10+ trades on the same contract 2 hours before settlement?", "show me the 50 most profitable wallets this month", "flag markets with unusual volume concentration."

The viral proof of demand came from a Reddit post on June 3, 2026 (r/ClaudeAI, post 1tvefqd) that reached 1,380 upvotes and 171 comments in under 24 hours. The OP wired Claude Code into a Postgres MCP pointed at the Polymarket ledger and discovered real-time insider trading patterns. Journalists, developers, and researchers immediately asked for paid API access. This is the strongest single-post proof of demand seen in this library.

The mechanism is identical to `us-public-records-mcp-arbitrage` (VIABLE 7.5/10) but applied to prediction market trade data: curate and structure public data → serve via paid MCP → earn from subscriptions and per-query fees.

## How an Agent Does It

1. **Data sync loop** (runs on Claude Code Routines or VPS cron, every 15 min): Pull new fills from Polymarket CLOB API (`/data-api/v2/trades`) → upsert into Postgres (trade ID, market, maker/taker wallet, price, size, timestamp, side)
2. **Wallet enrichment** (daily): Join with `/data-api/v2/portfolios` for wallet P&L, position history, and profit rank — no rate limits on public endpoints
3. **MCP server** (always-on): Expose via `@modelcontextprotocol/server-postgres` or FastMCP with Claude-friendly tool descriptions — `get_whale_trades(min_size, hours_back)`, `find_insider_wallets(market_slug, window_hours)`, `top_profitable_wallets(rank, period)`, `market_concentration_score(market_slug)`
4. **Billing layer**: Wrap the MCP server with MPP (`mppx init`) for per-query USDC billing at $0.005-0.05/query, OR list on MCPize/AgenticMarket as a subscription ($29-99/mo)
5. **Listing and discovery**: Publish to MCPize + AgenticMarket + mcp-marketplace.io simultaneously (cross-list from `mcp-server-cross-platform-distribution` playbook)
6. **Ongoing**: Agent syncs continuously, no human intervention needed after initial setup

## Source

Reddit: r/ClaudeAI post 1tvefqd — "I wired Claude Code into a database of every Polymarket wallet and trades via MCP. What do you want me to ask it next?" — 1,380 upvotes, 171 comments, June 3 2026. Multiple comments requesting paid access; journalists (at least one named in thread) asking for API keys. Post went viral on X/Twitter same day.

## Scores

| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 8 | Fully headless after setup — cron sync + serve + bill; no human needed per query |
| Setup effort | 4 | 2-3 days: Postgres instance, CLOB sync pipeline, MCP tool definitions, billing layer |
| Yield potential | 6 | Public data erodes moat quickly; first-mover gets $200-1,500/mo; viral validation = real demand exists |
| Risk | 8 | All data is on-chain/public; analysis not trading; no CFTC concerns; Polymarket ToS allows API usage |
| **Overall** | **6.5** | Meets VIABLE threshold (agentic 8/10 ≥ 6, overall 6.5 ≥ 6) |

## Why This Is Different From Whale Alerts (NOT_VIABLE)

The prior evaluation `polymarket-whale-alerts-telegram-subscription` (NOT_VIABLE 5.75/10, May 13 2026) failed because:
1. Telegram alert channel = **push model** requiring audience acquisition (subscriber bottleneck)
2. Free public tutorial (Bitquery video) kills value-add for push alerts

This mechanism avoids both:
1. MCP server = **pull model** — users discover via MCPize/AgenticMarket marketplace, zero outreach needed
2. Value-add is the **managed query interface** (pre-built tools, schema maintenance, real-time sync) — not just raw data; developers pay for the convenience layer, not the data itself

The 1,380 upvotes confirm demand specifically for the **query interface**, not just alert notifications.

## Implementation Notes

**Data sources (all free):**
- `https://data-api.polymarket.com/trades?limit=500&offset=0` — trade fills
- `https://data-api.polymarket.com/portfolios?limit=500` — wallet P&L
- `https://clob.polymarket.com/books?token_id=<id>` — live orderbook (optional enrichment)
- Schema hint: `(trade_id, market_id, taker_wallet, maker_wallet, price, size, timestamp, market_slug, outcome_name)`

**MCP setup:** `@modelcontextprotocol/server-postgres` with `POSTGRES_CONNECTION_STRING` env var; or FastMCP with typed tool definitions. Deploy to Fly.io ($5/mo) or Railway.

**Billing options:**
- MPP (best for per-query): `mppx init --price 0.01 --token USDC --chain base` — 15 lines wraps existing MCP server; USD settlement via Stripe
- MCPize subscription: $29-99/mo tiers with 1K-10K queries included; list at `npx mcpize deploy`
- Self-hosted Stripe: `PaidMcpAgent` class from `mcp-startup-framework` — keeps 97% revenue

**Moat risks:** This idea is now public (1,380 upvotes). Others will build similar within days. Defensible advantage: (a) being listed first on all 3 MCP marketplaces, (b) pre-built tool library depth (20+ analytics tools vs. a raw Postgres connection), (c) continuous maintenance/enrichment of wallet metadata.

**Stack with Polymarket Builder Codes:** Any queries routed through your server that trigger actual trades via the CLOB API should carry your builder code in the EIP-712 order struct — earning additional builder fees on any trades your data intelligence drives.

## Open Questions

- Does the OP (r/ClaudeAI/1tvefqd) plan to sell access or open-source? If open-sourced within days, moat collapses further
- What query volume generates enough revenue to justify $29-99/mo subscription vs. per-query MPP pricing?
- Rate limits on Polymarket Data API at high sync frequency? (Undocumented — test empirically)
- Do Polymarket ToS restrict commercial resale of aggregate trade analytics? (Currently no language against this found in standard terms)
