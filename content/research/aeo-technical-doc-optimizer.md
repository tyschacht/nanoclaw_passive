---
title: "Idea: Agentic Engine Optimization (AEO) Doc Audit SaaS"
date: 2026-04-12
tags: [passive-income, agentic, viable, api-tooling, saas, developer-tools, llms-txt, aeo]
---

# Agentic Engine Optimization (AEO) Doc Audit SaaS

## What It Is

A quiet but growing market gap: as AI coding agents (Claude Code, Cursor, GitHub Copilot) become primary consumers of API documentation, most API vendors have no idea whether their docs are machine-readable by agents. Addy Osmani (Google Chrome Engineering Lead) framed this as "Agentic Engine Optimization" in April 2026 — and the commercial tooling is almost entirely nonexistent.

This is **not** the same as GEO/LLM brand monitoring (covered in [[geo-llm-brand-monitoring-agent]]), which tracks brand mentions in chatbot marketing outputs. AEO targets a different customer (API vendors, developer tool companies) with a different problem (can coding agents actually parse and use my documentation?). The deliverable is technical — generated files, not marketing reports.

The key AEO compliance stack for 2026:

- **`llms.txt`**: A token-counted index of all documentation endpoints, structured so an agent can navigate docs without exceeding its context window (analogous to `robots.txt` for crawlers, but for LLMs)
- **`AGENTS.md`**: Capability declarations describing what an agent can do with the API — authentication patterns, common tasks, error handling — written for agent consumption, not humans
- **`SKILL.md` compatibility**: Wrapping the API as a Claude Code / OpenClaw skill for zero-friction agent integration
- **Token budget optimization**: Rewriting verbose human-facing docs into dense, agent-friendly summaries

An autonomous agent can audit any API's documentation, score its AEO readiness, generate a gap report, and optionally auto-generate the missing files. The customer pays for the audit report + the generated artifacts.

Market validation: Zero commercial tools serve this niche today (April 2026). Osmani's post defined the category; no product has been built yet. First-mover advantage is available right now.

## How an Agent Does It

1. **Ingest**: Accept API doc URL + API reference URL from customer via Stripe Checkout payment flow (one-time audit) or subscription signup
2. **Crawl**: Agent crawls all documentation pages, counting tokens per section and building a site map
3. **AEO audit**: Check for presence of `llms.txt` (at `{domain}/llms.txt`), `AGENTS.md`, `SKILL.md`, OpenAPI spec; score each against a rubric (0-100 AEO score)
4. **Token analysis**: Estimate how much of the doc fits in a 200K context window; flag sections that are verbose, redundant, or use human-only idioms that confuse agents
5. **Generate artifacts**: Auto-generate `llms.txt` (token-counted sitemap), draft `AGENTS.md` with common task patterns, and a starter `SKILL.md` for Claude Code / OpenClaw integration
6. **Report delivery**: Email a PDF audit report + ZIP of generated files within ~10 minutes of payment
7. **Monthly monitoring** (subscription tier): Re-crawl on doc update events (via webhook or cron), alert when AEO score drops due to doc restructuring
8. **Scale**: The entire pipeline runs per-customer with no human involvement; Stripe webhooks trigger audit jobs, Resend delivers reports

## Source

- Addy Osmani's AEO definition: https://addyosmani.com/blog/agentic-engine-optimization/
- `llms.txt` standard: https://llmstxt.org (adopted by Anthropic, Cloudflare, Vercel, FastHTML)
- `AGENTS.md` standard emerging alongside `llms.txt` in April 2026
- No commercial tooling found as of April 12, 2026 — genuine gap

## Scores

| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 7 | Doc crawling, AEO scoring, file generation, email delivery are all automatable; billing via Stripe webhooks; no human required per audit |
| Setup effort | 6 | Needs web crawler + rubric scorer + file generators + Stripe + Resend email; ~1 week build with Claude Code |
| Yield potential | 5 | Narrow but high-value market (API vendors pay $200-500/mo readily); $500-2,500/mo at 3-10 clients; not a mass-market product |
| Risk | 9 | Zero legal or ToS risk; pure software service; no platform dependency |
| **Overall** | **6.75** | Genuinely novel category with zero current competition; limited total market size is the ceiling |

## Implementation Notes

- **llms.txt standard**: See llmstxt.org — Anthropic, Cloudflare, and Vercel already publish their own; use these as AEO "exemplar" benchmarks when generating customer files
- **Pricing model**: One-time audit ($150-300) + optional monthly monitoring ($99-200/mo); enterprise custom pricing for API vendors with 500+ documentation pages
- **Target customers**: API-first SaaS companies, cloud infrastructure vendors, SDK publishers, developer tool companies — companies where coding agents are their end-users
- **Lead generation**: Automated — the agent can proactively crawl popular APIs on RapidAPI or apis.guru, run the AEO audit, and send cold email with the partial report ("your API scored 23/100 — here's what's missing")
- **Stack**: Playwright/Puppeteer for crawling (handles JS-rendered docs), Claude API for content rewriting + file generation, Stripe for billing, Resend for email delivery, Vercel for hosting
- **Complement to GEO monitoring**: An existing [[geo-llm-brand-monitoring-agent]] client might also want AEO services — natural upsell for the same API-first companies already paying for brand monitoring

## Open Questions

- How many API vendors will pay proactively before a critical mass of agents actively fails to use their docs? The pain may not be felt yet
- Will `AGENTS.md` become a formal standard with tooling support, or remain informal?
- Could Amazon, Google, or Microsoft offer this as a bundled service (AWS Well-Architected for AI) making the independent tool redundant?
- Is a $150 one-time audit too low to attract B2B customers who expect enterprise-level contracts?
