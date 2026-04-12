---
title: "Idea: Poe API Bot Niche Fleet"
date: 2026-04-12
tags: [passive-income, agentic, viable, poe, bot-marketplace, per-message, api]
---

# Poe API Bot Niche Fleet

## What It Is

Poe (poe.com), Quora's AI platform with tens of millions of active users, runs a Creator Monetization Program that pays bot builders two ways: per-message fees (creator sets the price, earns every time a user messages the bot) and subscription commissions (100% of a user's first monthly Poe subscription, 50% of first annual, when the bot "activates" that subscriber). Poe is on track to pay "tens of millions of dollars this year" across its creator community via Stripe.

The mechanism that makes this agentic: Poe provides a **Bots REST API** (`POST https://api.poe.com/bots`) that allows creating, configuring, and managing "API Bots" programmatically — no web dashboard required for bot creation. An API Bot is a wrapper that forwards Poe user messages to any Chat Completions-compatible endpoint you control. Claude Code writes a specialized FastAPI/Flask endpoint (wrapping Claude API with a niche system prompt + RAG context), deploys it to Vercel, then registers the bot on Poe via REST API. The bot is live and earning with no ongoing human involvement.

The niche matters enormously. Generic "ask me anything" bots earn next to nothing. Bots that solve a specific professional problem — legal contract analysis, medical symptom triage questions, niche coding assistant for a specific framework, specialized financial data queries — command higher per-message pricing and attract users willing to pay. A bot priced at $0.05/message with 100 messages/day = $150/month. Fleet of 5-10 such bots: $750-$1,500/month.

## How an Agent Does It

1. **Research niches:** Agent searches Poe's bot explorer (poe.com/explore) and Reddit/Twitter for underserved professional niches. Ranks by combination of search volume proxy and absence of quality competitors.
2. **Build specialized endpoint:** Claude Code writes a FastAPI app: receive Poe's query format → inject domain-specific system prompt (legal, medical, technical) → forward to Claude API with relevant context → return Chat Completions response.
3. **Deploy to Vercel:** `vercel deploy --prod` via CLI — no human click needed.
4. **Register bot via REST API:**
   ```bash
   curl -X POST https://api.poe.com/bots \
     -H "Authorization: Bearer $POE_API_KEY" \
     -H "Content-Type: application/json" \
     -d '{
       "model_name": "my-legal-bot",
       "base_url": "https://my-endpoint.vercel.app/v1",
       "api_key": "internal-key",
       "api_type": "openai",
       "pricing": {"cost_per_output_token": "0.00005"}
     }'
   ```
5. **One-time human step:** Set bot profile picture on poe.com (optional but helps recommendations). Monetization enrollment requires visiting poe.com/creators once to agree to T&Cs and connect Stripe.
6. **Repeat:** Agent runs the niche research + build + deploy cycle to grow the fleet. Each new bot takes ~15 minutes of agent time.
7. **Earn:** Poe routes users to bots via internal search, featured sections, and bot-to-bot chaining. Revenue accumulates passively. Stripe pays monthly when balance exceeds $10.

## Source

- Poe Creator Platform docs: https://creator.poe.com/docs/api-bots/overview
- Poe Bots REST API: https://creator.poe.com/docs
- TechCrunch launch article: https://techcrunch.com/2024/04/09/poe-introduces-a-price-per-message-revenue-model-for-ai-bot-creators/
- Poe blog: https://poe.com/blog/introducing-creator-monetization-for-poe
- Medium overview: https://medium.com/@rickzo/amazing-20-per-user-the-poe-creator-monetization-program-bdd889364cd4

## Scores

| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 7 | Bot creation + deployment + pricing fully via REST API; one-time human T&C enrollment on poe.com and Stripe setup; profile picture optional |
| Setup effort | 8 | FastAPI endpoint + Vercel deploy takes ~15min agent time; Bots REST API is simple POST; no SDK installation required for API bots |
| Yield potential | 5 | $50-$300/mo per niche bot; fleet of 5-10 bots = $250-$1,500/mo; discovery depends on Poe internal search; "tens of millions" annual payout pool across creators |
| Risk | 9 | Stripe USD payments, no ToS issues with Claude-powered bots, no crypto, clean legal structure |
| **Overall** | **7.25** | Passes both VIABLE thresholds (agentic >= 6, overall >= 6) |

## Implementation Notes

**API Key:** Get from creator.poe.com after enrolling in monetization program (requires one-time human T&C agreement + Stripe Connect).

**Endpoint format:** Must follow OpenAI Chat Completions format. Response includes `usage.prompt_tokens` and `usage.completion_tokens` — Poe bills the user based on these counts × your configured pricing.

**Pricing formula:** Set `cost_per_output_token` as a float (e.g., `"0.00005"` = $0.05 per 1,000 output tokens). A Claude Haiku backend at $0.25/million tokens + $0.05/1K output tokens to Poe users = ~$45/1K queries net profit margin.

**Niche selection signals:**
- Poe search autocomplete for "legal," "medical," "compliance," "tax" → shows demand
- Reddit pain points in professional communities (r/legaladvice, r/medicine, r/accounting)
- Low competition: check how many quality bots already exist in the niche

**Limitations discovered:** Some bot settings (handle changes, full profile metadata) still require poe.com web UI. The monetization enrollment (visit poe.com/creators) is a one-time human step. Profile pictures are optional but boost discoverability.

**Bot chaining opportunity:** Poe supports bot-to-bot calling. A high-level "orchestrator" bot can route to your specialist bots, creating a multi-bot product suite from one entry point.

**SDK reference:** For server bots with more control, use `pip install fastapi-poe` (poe-platform/fastapi_poe on GitHub). API bots (Chat Completions endpoint) don't require this library.

## Open Questions

1. What is the rejection/suspension rate for specialized Claude-backed bots? (ToS compliance with medical/legal caveats)
2. Does Poe actively promote new bots in the first 30 days or do new bots start with zero visibility?
3. Is there a rate limit on the Bots REST API that limits fleet automation?
4. What is the real per-creator earnings distribution? (median vs mean matters a lot — top bots may skew the "tens of millions" claim)
5. Does enrollment in Poe Creator Monetization require a minimum follower count or existing bot reputation?
