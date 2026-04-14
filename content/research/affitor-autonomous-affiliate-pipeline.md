---
title: "Idea: Affitor — Autonomous Affiliate Marketing Pipeline via SKILL.md"
date: 2026-04-14
tags: [passive-income, agentic, viable, affiliate-marketing, skill-md, paid-traffic, autonomous]
---

# Affitor: Autonomous Affiliate Marketing Pipeline

## What It Is

[Affitor](https://github.com/Affitor/affiliate-skills) is an open-source collection of 52 SKILL.md agent skills spanning the complete affiliate marketing workflow — program research, content creation, landing page generation, site deployment, conversion tracking, and performance optimization. It was posted to Hacker News in April 2026 and works with Claude Code, OpenClaw, Cursor, Codex CLI, and any other agent that reads SKILL.md.

The core mechanism: install the Affitor skill pack, and an agent can autonomously research profitable affiliate programs via the `list.affitor.com` API, generate targeted landing pages, deploy them to Vercel/Netlify via CLI, and track conversion events — then optimize based on real data. Combined with the [[autonomous-google-ads-mcp-management]] pipeline (existing VIABLE report), this creates a fully closed-loop machine: agent finds programs → builds pages → runs ads → earns commissions → reinvests in ad spend.

The income mechanism is real affiliate commissions on product sales — not synthetic income, not a marketplace cold-start. The money flows from merchants (via Amazon Associates, ShareASale, ClickBank, CJ) when visitors convert. At optimized ROAS, a small portfolio of niche landing pages can generate $100–$400/week in net affiliate commissions after ad costs.

## How an Agent Does It

1. **Research phase**: agent calls `list.affitor.com/api/programs` filtered by niche (e.g., `?category=health&min_commission=20&type=recurring`). Returns affiliate programs ranked by EPC (earnings per click), cookie duration, and commission rate. Agent selects top 3-5 by EPC.
2. **Apply to programs**: agent auto-generates an affiliate application (website URL, traffic source description, promotional methods) for easy-approval programs. Amazon Associates, ClickBank, and many CJ programs auto-approve instantly. Agent stores affiliate tracking IDs in config.
3. **Build landing pages**: using Affitor's content skills, agent generates a niche-specific 3-page mini-site (comparison page, review page, FAQ page) with embedded affiliate links. Output is clean HTML/CSS/JS deployable to any static host.
4. **Deploy**: `vercel deploy --prod` or `netlify deploy --prod` via CLI. Agent registers the domain with a registrar API (Namecheap API, GoDaddy API) if needed, or uses a free `.vercel.app` subdomain for testing.
5. **Traffic acquisition**: agent creates Google Ads campaigns via the [[autonomous-google-ads-mcp-management]] MCP tool (`cohnen/mcp-google-ads` write operations). Targets long-tail informational queries ("best X for Y"). Initial budget: $10–$20/day per campaign.
6. **Track conversions**: Affitor's tracking skill injects affiliate conversion pixels and calls the Google Ads Conversions API to feed conversion data back for smart bidding optimization.
7. **Optimize loop**: agent runs weekly — pauses underperforming ad groups, scales winners, A/B tests headlines, adjusts bids based on ROAS. Kills campaigns below 150% ROAS; scales above 300% ROAS.
8. **Compound**: profits reinvested into new niches; successful page templates cloned to adjacent niches with different affiliate programs.

## Source

- HN: [Show HN: Affitor — AI agent skills for affiliate marketing](https://news.ycombinator.com/item?id=47632530) (score 3, April 3 2026)
- GitHub: [github.com/Affitor/affiliate-skills](https://github.com/Affitor/affiliate-skills) — 52 SKILL.md skills, 8 pipeline stages
- Live API: `list.affitor.com` — affiliate program directory with EPC, commission, and program metadata
- MoneyMinions HN Research Agent: April 14, 2026

## Scores

| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 6 | Research + page building + deployment + ad management all agentic; affiliate program approval is semi-agentic (auto-approve for Amazon/ClickBank, 3-5 day wait for premium programs); no human needed at steady state |
| Setup effort | 6 | Affitor skill install + Google Ads account + affiliate program accounts + Vercel account; ~4-6 hours initial setup; pairs naturally with existing mcp-google-ads tool |
| Yield potential | 6 | $50–$400/week net at optimized ROAS; depends on niche competitiveness and ad budget; recurring programs (SaaS affiliates, subscriptions) compound over time |
| Risk | 6 | Google Ads policy risk for thin affiliate landing pages; some affiliate programs prohibit PPC bidding on brand terms; need quality landing pages to pass ad review; no legal risk |
| **Overall** | **6.0** | Meets VIABLE threshold (borderline); the Affitor skill pack is the enabling unlock; real income mechanism (not marketplace cold-start) |

## Implementation Notes

**Install Affitor skills**:
```bash
# In your Claude Code project or OpenClaw setup
curl -O https://raw.githubusercontent.com/Affitor/affiliate-skills/main/SKILL.md
# Or selectively install specific skill categories:
# SKILL.md for research, content, deploy, track
```

**Affitor skill categories** (from the 52-skill pack):
- `research/`: affiliate program discovery via list.affitor.com API
- `content/`: landing page copy generation, comparison tables, review structures
- `seo/`: meta tags, schema markup, sitemap generation
- `deploy/`: Vercel/Netlify CLI deployment automation
- `track/`: affiliate pixel injection, conversion event firing
- `ads/`: Google Ads campaign structure generation (pairs with mcp-google-ads)
- `optimize/`: ROAS analysis, A/B test generation, bid adjustment recommendations
- `compliance/`: FTC disclosure text, affiliate disclosure banners

**Best niches for agent-run affiliate marketing** (high EPC + auto-approve programs):
1. Software/SaaS tools (recurring commissions, 20-40% commission, ClickBank/ShareASale)
2. Web hosting (one-time but high: $65–$150/sale, Bluehost/SiteGround/WP Engine)
3. Online courses (30-50% commission, ClickBank auto-approves)
4. Finance/credit cards (REQUIRES human verification on most networks — skip for initial setup)
5. Health supplements (ClickBank, high EPC, auto-approve)

**Auto-approve programs** (no human review needed):
- Amazon Associates: auto-approves; requires 3 qualifying sales in 180 days to keep account
- ClickBank: all products auto-approve for registered publishers
- ShareASale: many programs auto-approve; registration requires business email
- CJ Affiliate: individual programs vary; CJ account approval is self-service

**Google Ads policy considerations**:
- Landing pages must have real content (not thin redirect pages)
- Affiliate sites must clearly disclose the affiliate relationship
- Brand term bidding is prohibited by most affiliate programs
- Use long-tail informational queries: "best [product] for [use case] 2026"

**ROAS math**:
```
Example: Health supplement niche
- Average commission: $35/sale
- Target CPA (Google Ads): $15 per conversion
- ROAS: 233% (35/15)
- At $30/day ad spend: 2 conversions/day = $70 gross - $30 ad cost = $40/day net
- Monthly: ~$1,200/month from one campaign
- Scale to 5 campaigns: ~$6,000/month gross potential
```

**Complementary VIABLE reports**:
- [[autonomous-google-ads-mcp-management]] — MCP tool that creates/manages Google Ads campaigns
- [[whop-api-digital-products]] — cross-sell high-converting digital products alongside affiliate offers
- [[reddit-pain-point-whop-product-loop]] — discover pain points that surface untapped affiliate niches

## Open Questions

1. Does list.affitor.com have rate limits, authentication requirements, or API terms that restrict automated programmatic access?
2. What is the quality bar for Google Ads approval of Affitor-generated landing pages? (Test with a minimal health or software niche page)
3. Amazon Associates: does auto-approval trigger correctly when traffic source is declared as "paid search"? (Their ToS requires traffic disclosure)
4. Which ClickBank product categories have the highest EPCs and lowest ad competition in April 2026? (Check ClickBank Marketplace gravity scores)
5. Is there an Affitor Discord or community where practitioners share real ROAS data from deployed campaigns?
