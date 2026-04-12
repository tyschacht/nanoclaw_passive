---
title: "MoneyMinions — Preferred Tech Stack"
date: 2026-04-12
tags: [reference, tech-stack, infrastructure, tools]
---

# Preferred Tech Stack

*Reference document for all MoneyMinions deep dives and build specs. Always check here before introducing new services — prefer stack-native solutions first.*

---

## Core Languages & Frameworks

| Layer | Choice | Notes |
|---|---|---|
| Primary language | Python | All agentic pipelines, backend services, data work |
| Agentic framework | Agno | Preferred orchestration for multi-agent pipelines |
| Frontend | NextJS | Vercel-deployed; landing pages, teaser pages, checkout flows |
| API style | REST (FastAPI preferred) | Standard Python REST layer when needed |

---

## AI & Models

| Use | Provider | Notes |
|---|---|---|
| Model access | OpenRouter | Access to 350+ models via single OpenAI-compatible API; mix and match by cost/quality |
| Cheap bulk tasks | `meta-llama/llama-3.3-70b-instruct:free` | Free tier on OpenRouter; rate-limited but fine for batch jobs |
| Cheap paid tasks | `mistral/mistral-nemo` ($0.040/M out) | 131K context, reliable instruction following |
| Quality synthesis | `qwen/qwen3-235b-a22b-instruct-2507` ($0.100/M out) | 235B MoE at budget pricing — standout value for long-form reports |
| Quality ceiling | `google/gemini-2.0-flash` ($0.400/M out) | 1M context; use if Qwen3 underperforms on a specific task |
| Web research | Perplexity `sonar` API | ~$0.009/query; pay-per-use, no subscription; use `sonar-pro` for deeper synthesis |
| Vector store | Pinecone | Free tier (100K vectors); used for deduplication and semantic search |

*Note: Old Perplexity model names (`sonar-small`, `sonar-large`, `sonar-huge`) are retired as of early 2026. Use `sonar`, `sonar-pro`, `sonar-reasoning-pro`, `sonar-deep-research`.*

---

## Data & Storage

| Use | Choice | Notes |
|---|---|---|
| Primary database | Supabase (PostgreSQL) | Auth, row-level security, real-time subscriptions, free tier sufficient for early stage |
| Vector store | Pinecone | Semantic dedup, similarity search |
| File storage | AWS S3 | PDFs, generated assets; presigned URLs for delivery |
| Caching | Supabase or in-process | No Redis needed at early scale |

---

## Compute & Infrastructure

| Use | Choice | Notes |
|---|---|---|
| Serverless | AWS Lambda | Container image deployment preferred (no 250MB layer limit); 15-min max timeout |
| PDF generation | Puppeteer via Lambda container | `@sparticuz/chromium` (~150MB); 2-3GB RAM; provisioned concurrency = 1 to eliminate cold start. WeasyPrint fails on complex CSS — do not use. |
| Long-running jobs | AWS Lambda (container, 15-min timeout) | Sufficient for report generation (<90s); only escalate to ECS Fargate if job exceeds 15 min |
| Job queue | AWS SQS | Lambda → SQS → Lambda pattern for async work |
| Frontend hosting | Vercel | NextJS native |
| Container registry | AWS ECR | For Lambda container images |

---

## Email & Outreach

| Use | Choice | Notes |
|---|---|---|
| Cold email at scale | Instantly.ai | Growth: $47/mo (5K emails/mo, API v2 + webhooks); Hypergrowth: $97/mo (100K emails/mo). Campaign-based API — no ad-hoc single sends. Webhooks: sent/opened/clicked/bounced/replied |
| Transactional email | Postmark | $15/mo for 10K; high deliverability |
| Domain warm-up | Instantly.ai built-in | Requires 30 days before cold sending at volume — *start immediately on any new project* |

---

## Lead Sourcing & Enrichment

| Use | Choice | Notes |
|---|---|---|
| Restaurant / local business discovery | Google Places API | Nearby Search (Pro SKU: $0.017/call) + Place Details with `generativeSummary` (AI reputation summary). Use field mask to control billing tier. |
| Lead deduplication | Pinecone | Embed (business_name + address), check cosine similarity before insert |
| Email enrichment | TBD (open question) | Hunter.io or Apollo.io (~$0.01/email) are candidates; not yet committed |
| Web scraping fallback | Apify | When official APIs are cost-prohibitive or unavailable |

*Note: Yelp Fusion API is NOT free (verified April 2026). Plus plan ~$10/1K calls; review text truncated at 160 chars on all plans. Avoid for MVP.*

---

## Payments & Monetization

| Use | Choice | Notes |
|---|---|---|
| Payments | Stripe | Stripe Payment Element for embedded checkout; webhooks for fulfillment triggers |
| Self-serve checkout | Stripe or Gumroad | Gumroad for simplest setup; Stripe for more control |

---

## Monitoring & Ops

| Use | Choice | Notes |
|---|---|---|
| Error alerting | TBD | Sentry or Axiom candidates |
| Logs | AWS CloudWatch | Default for Lambda |
| Uptime | TBD | Minimal at early stage |

---

## Open to Introducing (Case by Case)

These services are not in the default stack but are worth considering when the situation specifically calls for them:

| Service | When to Introduce |
|---|---|
| Kalshi API | Prediction market trading bots (market-making, hourly crypto) |
| Polymarket CLOB API | If/when US access opens; international markets only currently |
| ComfyUI / AUTOMATIC1111 | Image generation pipelines (AI virtual model photos) |
| ElevenLabs | Voice/audio products |
| Apify | When Google/Yelp APIs are too expensive or too rate-limited |
| Redis | Only when Supabase can't handle caching needs at scale |
| ECS Fargate | Only if job duration exceeds Lambda's 15-minute limit |

---

## Stack Constraints & Principles

1. *Prefer free tiers first* — Supabase, Pinecone, OpenRouter free models all have usable free tiers
2. *Lambda over ECS unless forced* — Lambda container images handle most use cases; ECS adds operational complexity
3. *OpenRouter for all LLM calls* — single API, model-agnostic, easy to swap; avoid direct Anthropic/OpenAI API keys except when OpenRouter doesn't support a specific feature
4. *Perplexity direct API for web research* — not via OpenRouter (OpenRouter's Perplexity routing adds latency; direct API is simpler and has correct model names)
5. *Start with batch/async* — resist building real-time streaming until there's proven demand; batch jobs are simpler and cheaper
6. *Domain warm-up is always the critical path* — any cold email project needs a 30-day domain warm-up as the first step; everything else can be built in parallel
