---
title: "Red Herring: Kent Davis 'AI Trading Bot' MEV Scam"
date: 2026-04-09
tags: [passive-income, not-viable, red-herring, crypto, scam, mev]
---

# Kent Davis "AI Trading Bot" — Not Viable (Drain Contract Scam)

## What It Claims to Be

A YouTube video by Kent Davis (9EHiX2jpzlA, "How I Made 1.5K Day Trading with an AI Agent — Full Guide," 12,876 views, April 7 2026) describes an AI agent that monitors blockchain activity, detects pending transactions on decentralized exchanges, and front-runs them to "capture small spreads." The viewer is told to paste provided contract code into an unnamed "platform," connect their wallet, fund the contract with 1.5–100 ETH, click "Start," and walk away.

## Why It Doesn't Work Agentically

- *Classic drain contract format:* The video follows the exact template of a well-documented crypto scam genre. No platform name is given. The "code" is not auditable MEV infrastructure — it's a fake UI that simulates bot activity while routing deposited ETH to the scammer's wallet. The request for 1.5 ETH minimum before the bot "makes sense" economically is the primary conversion mechanism.
- *MEV is not accessible this way:* Real MEV (Maximal Extractable Value) requires co-location with validators, sub-millisecond latency, direct mempool access via Flashbots or private RPC endpoints, and sophisticated Solidity contracts — not a "paste this code" UI. A consumer-grade bot with 1.5 ETH cannot compete in MEV markets dominated by professional quant firms.
- *No verifiable results:* The video shows a UI claiming "solid performance" over 24 hours but provides no on-chain transaction hashes, no wallet address, no verifiable proof of activity. The "withdraw" step is designed to either silently fail or request additional ETH for "gas fees" — a second-stage steal.

## Scores

| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 1 | Not a real bot; fraudulent premise |
| Setup effort | 1 | Irrelevant — setup is the theft mechanism |
| Yield potential | 1 | Negative — user loses deposited ETH |
| Risk | 1 | Near-certain financial loss; potential loss of entire wallet if contract is given broad permissions |
| **Overall** | **1** | |

## Source

YouTube: Kent Davis, "How I Made 1.5K Day Trading with an AI Agent (Full Guide)" (9EHiX2jpzlA), April 7 2026. Transcript pulled via yt-dlp and analyzed. Video was on MoneyMinions watchlist from Run 2.

## Pattern to Avoid

"Paste smart contract code from YouTube description → fund with ETH → click start → wait for profits" is a standardized drain contract scam. Any variation of this pattern should be treated as not viable without verified on-chain audit by a credentialed security firm. Add to red herring patterns.
