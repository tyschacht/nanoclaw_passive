---
title: "Deep Dive: AI SMB Audit Report Service"
date: 2026-04-12
tags: [deep-dive, smb, cold-email, agno, python, openrouter, aws, supabase, restaurants]
---

# Deep Dive: AI SMB Audit Report Service

*Technical design document. Step below final spec — enough to begin building.*

Source opportunity: [[research/ai-research-reports-smb-service]]

---

## The Core Loop (Plain English)

```
Mine businesses → personalize cold email cheaply → send at scale
→ click-through generates teaser in ~10 seconds (on-demand, not pre-baked)
→ CTA: "Get the full 12-page report for $75"
→ Stripe payment → SQS job → ECS Fargate generates full PDF
→ S3 link delivered via email
```

Human involvement after setup: zero per transaction.

---

## Key Design Decisions (Resolved)

| Decision | Choice | Rationale |
|---|---|---|
| Report delivery | PDF first | Simple, familiar, no hosting per customer |
| Teaser approach | On-click generation (hybrid) | Pay only for clicked leads; 10-sec latency acceptable with good UX |
| Email personalization | Pre-generated, cheap LLM | <$0.005/lead; scales to 10K sends for ~$25 |
| Compute | AWS Lambda container image (reports + webhooks) | Puppeteer requires container image anyway; consolidate on Lambda; report gen <90s fits 15min timeout |
| Database | Supabase | Fits existing stack; handles lead state, job queue, payment records |
| Frontend | NextJS on Vercel | Fits existing stack; teaser page + Stripe checkout |
| Agentic framework | Agno (Python) | Fits existing stack; orchestrates research + synthesis pipeline |

---

## Niche Selection

### Recommended Launch Niches (2 max for MVP)

*Niche 1: Restaurants* (user confirmed)

Why restaurants are the best starting niche:
- *Google Places API* (with AI `generativeSummary` field) provides rich restaurant data with AI-synthesized reputation summary — no manual review parsing needed
- Clear competitive landscape: nearby restaurants with similar cuisine are natural comp subjects
- Pain points are universal and well-understood: slow service → staffing; bad ambiance → décor; poor online presence → delivery platform gaps
- $75 is an impulse buy for a restaurant owner spending $200K/year on food costs
- Google Places categories enable precise targeting: `type=restaurant`, `keyword=italian`, etc.

*Note on Yelp:* Yelp Fusion API is **not free** (verified April 2026). Plus plan is ~$10/1K API calls with full review text *truncated at 160 characters* on all tiers — full review text requires a separate Data Licensing contract. Google Places is the superior choice for lead mining: richer data, AI-generated summaries, and a clearer cost structure.

*Niche 2: HVAC / Home Services* (recommended over dental for MVP)

Why HVAC/home services:
- Google My Business is the dominant review platform (not Yelp) → use Places API or Apify scraper
- Pricing transparency is the #1 pain point → competitive pricing audit has obvious value
- Seasonal business = natural urgency angle ("before the summer season")
- Higher average ticket ($150-500/job) makes $75 report easier to justify
- Business owners are less sophisticated → report feels more premium to them

*Hold for Wave 2:* dental practices (high LTV upsell potential), auto repair, med spas.

---

## Stack Architecture

### Full System Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│  LEAD PIPELINE  (Agno / Python, runs on cron or manual trigger)  │
│                                                                   │
│  Google Places API ────────────────────────────────────────────► │
│  (Nearby Search + Place Details w/ generativeSummary + reviews)  │
│                    └──► Lead Miner Agent ──► Supabase            │
│  Apify Google Maps (fallback if Places API cost is prohibitive)  │
│                         (dedup via Pinecone)   leads table       │
└─────────────────────────────────────────────────────────────────┘
          │
          ▼
┌─────────────────────────────────────────────────────────────────┐
│  EMAIL PERSONALIZATION PIPELINE  (Agno, batch job)              │
│                                                                   │
│  Supabase leads ──► Review Analyzer Agent (cheap LLM)           │
│                     ↓                                            │
│                     writes: pain_point_1, pain_point_2,          │
│                     personalized_subject, opening_line           │
│                     ↓                                            │
│                  ──► Instantly.ai API → email sent               │
│                     ↓                                            │
│                  update leads: status = 'emailed'                │
└─────────────────────────────────────────────────────────────────┘
          │  (recipient clicks link in email)
          ▼
┌─────────────────────────────────────────────────────────────────┐
│  TEASER PAGE  (NextJS / Vercel)                                  │
│                                                                   │
│  /teaser/[lead_id]                                               │
│  - shows loading spinner ("Generating your market snapshot...")  │
│  - calls Lambda: POST /generate-teaser/{lead_id}                 │
│  - Lambda: Perplexity Sonar search + cheap LLM synthesis         │
│  - streams 3-5 bullet insights to page (SSE or polling)          │
│  - shows: partial data + blurred "section 4-12" + $75 CTA        │
└─────────────────────────────────────────────────────────────────┘
          │  (recipient clicks "Get Full Report")
          ▼
┌─────────────────────────────────────────────────────────────────┐
│  CHECKOUT  (Stripe Embedded, NextJS page)                        │
│                                                                   │
│  /checkout/[lead_id]                                             │
│  - Stripe Payment Element ($75)                                  │
│  - On success: Stripe webhook → Lambda → SQS job enqueued        │
└─────────────────────────────────────────────────────────────────┘
          │  (payment confirmed)
          ▼
┌─────────────────────────────────────────────────────────────────┐
│  REPORT GENERATION  (AWS ECS Fargate)                           │
│                                                                   │
│  SQS message → Lambda container image pulls job                 │
│  ↓                                                               │
│  Agno Report Agent:                                              │
│    1. Perplexity `sonar`: 4-6 targeted searches ($0.009/query)  │
│    2. Qwen3 235B (via OpenRouter): synthesize → 12-page MD      │
│    3. Puppeteer (headless Chromium): HTML → styled PDF           │
│       (Lambda container image, 2-3GB RAM, provisioned concur.)  │
│    4. Upload to S3 (presigned URL, 7-day expiry)                 │
│    5. Postmark: send delivery email with download link           │
│  ↓                                                               │
│  Supabase: update order status = 'delivered'                     │
└─────────────────────────────────────────────────────────────────┘
```

---

## Supabase Schema

```sql
-- Lead pool
CREATE TABLE leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  business_name TEXT NOT NULL,
  yelp_id TEXT,
  google_place_id TEXT,
  category TEXT,          -- 'restaurant', 'hvac', etc.
  niche TEXT,             -- 'italian_restaurant', 'pizza', etc.
  city TEXT,
  state TEXT,
  email TEXT,
  phone TEXT,
  avg_rating FLOAT,
  review_count INT,
  pain_point_1 TEXT,
  pain_point_2 TEXT,
  personalized_subject TEXT,
  personalized_opening TEXT,
  status TEXT DEFAULT 'new',   -- new|emailed|opened|clicked|purchased|delivered
  email_sent_at TIMESTAMPTZ,
  teaser_viewed_at TIMESTAMPTZ,
  purchased_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Orders
CREATE TABLE orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  lead_id UUID REFERENCES leads(id),
  stripe_payment_intent TEXT UNIQUE,
  amount_cents INT DEFAULT 7500,
  status TEXT DEFAULT 'pending',  -- pending|paid|generating|delivered|failed
  s3_key TEXT,
  report_url TEXT,
  report_url_expires_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT now(),
  delivered_at TIMESTAMPTZ
);

-- Pinecone used separately for lead deduplication
-- Store embedding of (business_name + address) to prevent re-mining same business
```

---

## Cost Model — Line By Line

*Prices verified April 12, 2026 from OpenRouter /api/v1/models (350 models available).*

### OpenRouter Model Selection

| Use Case | Model | Input /M | Output /M | Rationale |
|---|---|---|---|---|
| Email personalization (bulk) | `meta-llama/llama-3.3-70b-instruct:free` | FREE | FREE | Free tier, rate-limited but fine for batch jobs |
| Teaser synthesis | `mistral/mistral-nemo` | $0.020 | $0.040 | 131K context, reliable instruction following, cheapest viable |
| Full report synthesis | `qwen/qwen3-235b-a22b-instruct-2507` | $0.071 | $0.100 | *235B parameter MoE at budget pricing — standout value* |
| Report fallback (quality ceiling) | `google/gemini-2.0-flash` | $0.100 | $0.400 | 1M context, excellent coherence if Qwen3 underperforms |

*Key finding: Qwen3 235B A22B is a 235-billion parameter MoE model priced at $0.10/M output — normally a budget-tier price point. Use this for report synthesis.*

---

### Per-Lead Costs (Email Personalization Path)

| Step | Tool | Tokens | Cost per lead |
|---|---|---|---|
| Review extraction + pain points | Llama 3.3 70B (**free**) | ~400 in, ~150 out | **$0.000** |
| Personalized subject + opening | Llama 3.3 70B (**free**) | ~300 in, ~100 out | **$0.000** |
| *LLM subtotal* | | | *$0.000 (free tier)* |
| Yelp API | Yelp Fusion (free tier) | — | $0.00 |
| Email send | Instantly.ai ($37/mo ÷ 3,000) | — | ~$0.012 |
| *Total per lead emailed* | | | *~$0.012* |

*1,000 leads emailed = ~$12 in variable costs (all from email infrastructure, zero from LLM). ✅ Well under $0.25.*

*Note: Llama 3.3 70B free tier has rate limits. For high-volume batches (>500/hr), switch to Mistral Nemo at $0.040/M output = $0.000006/lead — still effectively free.*

### Per-Teaser-View Costs (On-Click Generation)

| Step | Tool | Tokens | Cost per click |
|---|---|---|---|
| Competitive web research | Perplexity Sonar Small (via OpenRouter) | 1 query | ~$0.005 |
| Teaser synthesis (3-5 bullets) | Mistral Nemo | ~800 in, ~300 out | ~$0.000028 |
| *Total per teaser view* | | | *~$0.005* |

*At 2% CTR on 3,000 emails = 60 teaser views = $0.30 total. Negligible.*

*On-click wins decisively: 60 teasers generated on-click = $0.30. Pre-generating all 3,000 = $15. On-click is 50× more efficient.*

### Per-Full-Report Costs

| Step | Tool | Tokens / Queries | Cost |
|---|---|---|---|
| 6 deep research queries | Perplexity `sonar` (direct API) | 6 queries × $0.009 | ~$0.054 |
| Report synthesis (12 pages) | Qwen3 235B A22B | ~6K in, ~4K out | ~$0.001 |
| PDF generation | WeasyPrint on Lambda | — | ~$0.002 (compute) |
| S3 storage + delivery | AWS | ~2MB, 7 days | ~$0.0001 |
| Delivery email | Postmark | 1 transactional | ~$0.001 |
| *Total per full report* | | | *~$0.064* |

*Full report margin: $75 revenue − $0.064 cost = $74.94 gross per report. 99.9% gross margin.*

*Optional: if Qwen3 235B synthesis quality is insufficient, upgrade to Gemini 2.0 Flash ($0.400/M out) = $0.0016 for report tokens. Still $0.065 total. Margin barely moves.*

### Monthly Fixed Costs (at 100 emails/day volume)

*Verified April 12, 2026 from live pricing pages.*

| Service | Cost/mo | Notes |
|---|---|---|
| Instantly.ai Growth | $47 | 5,000 emails/month, API v2 + webhooks |
| Google Places API | ~$101–$241 | 10K leads/mo: ~$101 (no reviews) or ~$241 (with reviews + AI summary). Start with $101 path — use `generativeSummary` instead of raw reviews |
| AWS Lambda (container) | ~$8 | ~21 report generations/mo at 90s each, 2GB RAM |
| AWS S3 | ~$2 | Storage + bandwidth for PDFs |
| Supabase | Free | Free tier handles this volume |
| Pinecone | Free | Free tier: 100K vectors for dedup |
| OpenRouter | Pay-per-use | Covered in per-report costs (~$0.001/report) |
| Perplexity API | Pay-per-use | ~$0.009/query × 6 queries × 21 reports = ~$1.13/mo at this scale |
| Postmark | $15 | 10K transactional emails |
| *Total fixed* | *~$174–$314/mo* | Scales favorably — Google Places is the biggest fixed cost |

*At 21 reports/month ($1,575 revenue): net ~$1,260–$1,400/month after all costs.*

*Google Places cost optimization:* Use `X-Goog-FieldMask: generativeSummary,rating,userRatingCount,internationalPhoneNumber,currentOpeningHours,priceLevel` — this avoids Atmosphere SKU ($0.025/call) and stays in Pro tier ($0.017/call). The AI `generativeSummary` field is available at Pro tier and provides enough signal for email personalization without needing individual review text.

---

## Latency Analysis: Option A vs B vs Hybrid

### Option A — Full Pre-Generation (teaser in email body)

```
Pros:
• Zero latency on click — teaser content is already in the email
• No loading UX needed

Cons:
• Pay for ALL leads upfront (~$0.005 × 1,000 = $5 extra per batch)
• Teaser goes stale (written before the person clicks — weeks may pass)
• No personalization on the click page itself
• 50× more expensive than on-click approach

Verdict: Reject. Cost inefficiency is the dealbreaker at scale.
```

### Option B — Full On-Click Generation (nothing pre-computed)

```
Latency breakdown:
• Lambda cold start: 0-800ms (provisioned concurrency eliminates this)
• Perplexity Sonar query: 2-4 seconds
• LLM synthesis (Gemini Flash): 1-2 seconds
• Total: 3-7 seconds to first insight

UX pattern:
• Show loading animation + "Analyzing [Business Name]'s competitive position..."
• Stream bullets as they arrive (SSE)
• First bullet appears at ~3 seconds; full teaser at ~7 seconds

Verdict: Viable. 7-second generation is acceptable with good loading UX.
         Use streaming (SSE) so user sees progress immediately.
```

### Option C — Hybrid (Recommended) ✅

```
Email: Pre-generated 1-2 sentence "hook" based on reviews ($0.0002/lead)
  → "We noticed several [Business Name] reviewers mentioned wait times
     exceeding 25 minutes. We pulled your competitive positioning data."

Click: Full on-click teaser generation (same as Option B)
  → User has already been primed by the email hook
  → 7-second wait feels earned ("they're actually running the analysis")

Why this wins:
• Email hook costs $0.0002/lead (vs. $0.005 for full pre-generation)
• Creates anticipation — the loading screen is part of the experience
• Only pays full teaser cost for actual clicks (~2% of sends)
• Total cost per 1,000 emails: ~$7.20 (vs. $12 pre-generated)
```

---

## Agno Agent Design

### Agent 1: Lead Miner

```python
# Runs on schedule (daily) or manual trigger
# Tools: yelp_api, google_places_api, supabase_insert, pinecone_check_dup

class LeadMiner(Agent):
    instructions = """
    Find small businesses in {niche} in {city}.
    For each: extract name, address, phone, email (if available),
    review count, avg rating, top 3 recent negative review themes.
    Check Pinecone before inserting — skip duplicates.
    Target: businesses with 20-200 reviews, rating 3.2-4.1
    (enough reviews to analyze, room for improvement messaging).
    """
```

*Niche-specific targeting:*
- Restaurants: `yelp_search(term="restaurants", categories="italian,pizza,mexican", location="Chicago", rating_max=4.1)`
- HVAC: `google_places_search(type="hvac_contractor", location="Chicago", min_reviews=10)`

### Agent 2: Personalization Writer

```python
# Batch job — runs after lead mining
# Input: lead with reviews
# Output: pain_point_1, pain_point_2, subject_line, opening_line

SYSTEM = """
You extract key competitive weaknesses from business reviews and write
a cold email hook (subject + 1 opening sentence).

Rules:
- Reference a SPECIFIC real complaint from reviews (not generic)
- Subject line: max 9 words, no emojis
- Opening: 1 sentence acknowledging the pattern, 1 sentence teasing intel
- Tone: peer-to-peer, not salesy
- Do NOT reveal you scraped their reviews
"""
```

### Agent 3: Teaser Generator (Lambda)

```python
# Triggered per click on /teaser/[lead_id]
# Tools: perplexity_search, openrouter_llm

async def generate_teaser(lead_id: str) -> AsyncGenerator[str, None]:
    lead = await supabase.get_lead(lead_id)

    # Single Perplexity `sonar` query: competitor landscape (~$0.009)
    research = await perplexity.search(
        model="sonar",
        query=f"top competing {lead.niche} restaurants in {lead.city} {lead.state} "
              f"2026 reviews pricing strengths weaknesses"
    )

    # Synthesize 3 teaser bullets (stream output)
    async for chunk in openrouter.stream(
        model="google/gemini-flash-2.0",
        prompt=TEASER_PROMPT.format(business=lead, research=research),
        max_tokens=400
    ):
        yield chunk

    # Update lead status
    await supabase.update_lead(lead_id, status="teaser_viewed")
```

### Agent 4: Report Generator (ECS Fargate)

```python
# Triggered by SQS message after Stripe payment
# Full Agno multi-step pipeline

class ReportGenerator(Agent):
    tools = [perplexity_search, openrouter_llm, puppeteer_pdf, s3_upload, postmark_send]
    # puppeteer_pdf: Lambda container image with @sparticuz/chromium
    # 2-3GB RAM allocation, provisioned concurrency = 1 to eliminate cold start

    # 6 research phases → synthesized into sections:
    REPORT_SECTIONS = [
        "Executive Summary",
        "Your Review Footprint vs. Competitors",
        "Pricing Benchmark Analysis",
        "Online Presence & Delivery Platform Coverage",
        "Top 3 Competitor Strengths to Neutralize",
        "Top 3 Specific Improvement Opportunities",
        "30-Day Quick Wins Checklist",
        "Appendix: Data Sources & Methodology",
    ]

    # Model choice: Claude 3.5 Sonnet via OpenRouter for synthesis quality
    # Perplexity `sonar` API for research (includes citations, pay-per-use)
```

---

## Report Template (Restaurant Niche)

*12-page structure:*

| Section | Pages | Data sources |
|---|---|---|
| Executive Summary | 1 | Synthesized |
| Business Profile Snapshot | 1 | Yelp/Google data |
| Review Sentiment Analysis | 1.5 | Review text + LLM |
| Competitor Comparison Matrix | 2 | Perplexity research |
| Pricing Benchmark | 1.5 | Menu/pricing research |
| Delivery Platform Footprint | 1 | DoorDash/UberEats presence |
| Top 3 Opportunities | 2 | Synthesized |
| 30-Day Action Checklist | 1 | Generated |
| Appendix | 1 | Sources |

---

## Conversion Funnel Math

| Stage | Rate | Volume (100 emails/day) |
|---|---|---|
| Emails sent | — | 3,000/month |
| Teaser page opens (CTR) | 2% | 60/month |
| Payment conversion (of openers) | 35% | 21/month |
| *Reports sold* | | *21/month* |
| Revenue | $75 | *$1,575/month gross* |
| Variable costs | | ~$4.50 (21 reports) |
| Fixed costs | | ~$89/month |
| *Net* | | *~$1,480/month* |

*Improvement levers:*
- Better email hooks → CTR 3% → 28 reports → $2,100/month
- Better teaser UX → conversion 45% → 27 reports → $2,025/month
- Niche targeting (higher pain = higher CTR) → target 4% CTR from start
- B2B list sourcing (vs. cold) → 10× better conversion

---

## Upsell Architecture (Post-MVP)

*Not in MVP scope but designed in from day 1.*

### Monthly Market Pulse — $49/month

After report delivery, automated 3-email drip:
- Day 1: "Your report is ready. One quick question..."
- Day 4: "We noticed 2 of your competitors changed their pricing..."
- Day 10: "Stay ahead with a monthly pulse — $49/month"

The monthly pulse is a lightweight version of the full report: 1-page update, auto-generated, maybe $0.05 in costs. 20% upsell rate on 21 buyers = 4 recurring customers × $49 = $196/month additional, compounding monthly.

At 12 months, 20% upsell rate: ~$3,000-4,000/month from recurring alone.

---

## PDF Generation Decision (Verified)

*WeasyPrint is NOT the right choice.* Benchmark data (PDF4.dev, 2026, Linux arm64):

| Tool | Cold start | Warm | Package size | Complex CSS |
|---|---|---|---|---|
| Playwright | 119ms | 13ms | ~300–500MB | ✅ Full support |
| Puppeteer | 187ms | 58ms | ~150MB | ✅ Full support |
| WeasyPrint | 629ms | No warm mode | ~10–20MB | ❌ Renders poorly |

WeasyPrint spawns a fresh Python process per render (no warm state). On styled multi-page reports with tables and custom fonts, it misrenders. Puppeteer with `@sparticuz/chromium` (~150MB) requires Lambda container image deployment (exceeds the 250MB unzipped layer limit) — but we're already using container images for other reasons.

*Decision: Puppeteer via Lambda container image.*
- 2–3GB RAM allocation
- Provisioned concurrency = 1 (warm instance, eliminates 5-second cold start)
- p95 generation time for 12-page styled report: ~3–5 seconds

---

## Open Questions for Design Spec

These need resolution before writing the final spec:

1. *Email sourcing:* Yelp rarely shows business email addresses. Options: (a) scrape website contact form, (b) hunter.io/apollo.io enrichment (~$0.01/email), (c) use Instagram/Google Maps contact info. Which enrichment service?

2. *Perplexity API vs. Tavily API:* Both do web search. Perplexity includes LLM synthesis in the response (more expensive, less control). Tavily is pure search results (cheaper, more flexible). Prefer one?

3. *Report branding:* Does this service have its own brand name (e.g., "LocalEdge," "MarketPulse"), or is it sold as a white-label under a brand you define?

4. *ECS vs. Lambda for report generation:* Report gen takes 45-90 seconds. Lambda max timeout is 15 minutes (fine), but ECS Fargate spin-up is ~45 seconds. For <$0.50 per report, Lambda with a 15-minute timeout is probably simpler. ECS only necessary if reports need more than 15 min. Preference?

5. *Instantly.ai vs. Smartlead vs. Lemlist:* All ~$37-59/month. Instantly has the simplest API. Smartlead has better analytics. Lemlist has LinkedIn integration (useful for wave 2 niches). Starting choice?

---

## Immediate Next Steps (Priority Order)

1. Answer the 5 open questions above
2. Set up Yelp Fusion API key + test restaurant search in target city
3. Prototype the Agno personalization pipeline (just the email writer, no send yet) — validates cost model
4. Build the teaser page (NextJS) with streaming SSE — validates latency/UX
5. Set up Instantly.ai account + warm one sending domain (30 days required)
6. First 100 leads mined + emails sent → measure real CTR before building full pipeline

*Domain warming (30 days) is the critical path item. Start it immediately — everything else can be built in parallel.*
