---
title: "Red Herring: Nostr NIP-90 Data Vending Machines"
date: 2026-04-14
tags: [passive-income, not-viable, red-herring, nostr, bitcoin, lightning, decentralized]
---

# Nostr NIP-90 Data Vending Machines — Not Viable

## What It Claims to Be

NIP-90 is a Nostr protocol standard defining "Data Vending Machines" — a decentralized, censorship-resistant marketplace where AI agents advertise capabilities (summarization, image generation, transcription, translation, data processing) on Nostr relays, and users broadcast job requests with Bitcoin Lightning payments attached. Agents that fulfill the job receive Bitcoin sats via Lightning Network, instantly, with no platform intermediary. Fully decentralized: no Stripe, no centralized marketplace, no accounts. The protocol is implemented in the OpenAgentsInc `openagents` framework (Python + JavaScript libraries on GitHub).

The pitch is appealing for censorship-resistance and Bitcoin maximalists: an agent running anywhere in the world, serving anyone in the world, earning Bitcoin continuously with zero platform dependency or censorship risk. A February 2026 example demonstrated an OpenClaw agent autonomously provisioning a VPS, funding it with Bitcoin over Lightning, and spawning a child agent — all without human involvement.

## Why It Doesn't Work Agentically

- *Ecosystem volume is near zero.* No income figures from any NIP-90 data vending machine operator have been documented publicly. The ecosystem is described by practitioners as "tiny" with "rough tooling." The OpenAgentsInc framework has GitHub activity but no disclosed operator earnings. In contrast, Apify (VIABLE) pays $1M+/month total to operators and has 100K+ monthly developer users. NIP-90 has neither disclosed volume nor disclosed buyer count.

- *Discovery bottleneck is fundamentally unsolved.* Buyers must know to query specific Nostr relays for specific capability types. Unlike a marketplace (Apify Store, MCPize, AgenticMarket) with built-in search and discovery, NIP-90 requires buyers to know the protocol, connect to the right relay, and issue a job request in exactly the right format. The barrier to a paying buyer is much higher than any centralized marketplace. No "cold-start" solution exists at the protocol level.

- *Bitcoin Lightning payment UX is rough for non-Bitcoin agents.* Most AI agent frameworks (Claude Code, OpenClaw) use USDC on Base or Stripe for payments. Integrating Lightning Network into a standard agent requires an lnd or Core Lightning node, or a custodial service like Alby/Voltage. This adds significant infrastructure overhead compared to x402 (single npm package) or Stripe (standard SDK). The agent ecosystem is converging on USDC via x402/Base, not Lightning.

## Scores

| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 7 | Technically fully autonomous — agent discovers jobs via relay subscription, fulfills them, receives Lightning sats |
| Setup effort | 4 | Lightning node or custodial service required; Nostr relay integration adds complexity vs. REST APIs |
| Yield potential | 2 | No documented income; tiny buyer ecosystem; no discovery mechanism to attract buyers |
| Risk | 9 | Completely decentralized — no ToS, no platform risk, no account suspension |
| **Overall** | **5.5** | Below viable threshold due to yield |

## Source

- NIP-90 specification: https://nips.nostr.com/90
- OpenAgentsInc framework: https://github.com/OpenAgentsInc/openagents
- Autonomous OpenClaw agent example: https://news.bitcoin.com/autonomous-ai-openclaw-bot-spawns-a-child-agent-and-funds-it-with-bitcoin/
- Agent Internet Map 2026 ecosystem overview: https://dev.to/colonistone/mapping-the-agent-internet-where-ai-agents-live-in-2026-2npa

*Re-evaluate if: (1) a specific NIP-90 relay documents $10K+/week in total job volume, OR (2) a major agent framework (Anthropic, OpenAI, Google) ships native Nostr relay support that brings buyer-side volume, OR (3) Lightning Network integration becomes a standard Claude Code SKILL.md.*
