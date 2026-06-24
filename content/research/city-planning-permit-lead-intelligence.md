---
title: "Idea: City Planning Permit Lead Intelligence — Public Meeting Minutes as a B2B Data Product"
date: 2026-06-24
tags: [passive-income, agentic, viable, lead-generation, public-data, b2b, whop, data-product]
---

# City Planning Permit Lead Intelligence

## What It Is

City planning commissions publish meeting minutes online detailing every upcoming development project, zoning change, environmental review, demolition permit, and construction approval — weeks or months before a project breaks ground. These minutes identify, by name and address, every business and property that will be affected.

An agent reads these minutes, parses affected businesses, enriches them with contact data (LinkedIn, Google Business, email lookup), scores them by opportunity type (new construction = contractor opportunity, zoning change = legal/consultant opportunity, demo = signage/fit-out vendor opportunity), and packages the output as a jurisdiction-specific lead list sold to the relevant professional category.

A Reddit post from r/Entrepreneur (June 22, 2026, score 431) documented someone doing this semi-manually with Claude after being laid off. They also built OSHA violation scrapers and UCC filing triggers as complementary data sources. All of this data is freely available via public records APIs. The human in that case was selling leads door-to-door. The innovation here is packaging these leads as auto-delivered data products sold via Whop, with zero human selling required.

The market is structural: contractors, commercial real estate lawyers, commercial insurance agents, architectural firms, specialty vendors, and commercial cleaning services all need early-stage leads before competitors discover them. A $97 "this week's construction pipeline for [City]" report sold to subscribers beats cold-calling directories that everyone else already has.

## How an Agent Does It

1. **City selection**: Agent identifies 10-20 cities with online-accessible planning commission minutes (most major US cities post agendas/minutes as PDFs or HTML at `[city].gov/planning`).
2. **Scrape minutes**: Agent runs a weekly cron job against each city's planning portal. Downloads the most recent meeting minutes/agendas (PDF or HTML). Uses Playwright for JS-rendered portals; requests + BeautifulSoup for static HTML.
3. **Parse affected entities**: Agent passes meeting minutes to Claude with a structured prompt: "Extract: business name, address, project type, approval status, hearing date, description. Return JSON array." Handles both PDF (via PyMuPDF) and HTML.
4. **Enrich entities**: Agent looks up each business via Apollo.io API or Hunter.io to add: owner name, phone, email, LinkedIn URL, business age, revenue estimate, employee count.
5. **Score and categorize**: Agent assigns each lead a buyer-persona tag (contractor, lawyer, insurance, fit-out vendor) based on project type. New construction = contractors + insurance. Demo permit = hazmat + cleanup + fit-out. Zoning variance = commercial RE lawyers.
6. **Package as product**: Agent generates a formatted CSV + summary PDF per city per buyer category. Example: "Portland Construction Pipeline — Week of June 24, 2026 — 14 New Permits | For: Contractors."
7. **List and deliver**: Agent uses Gumroad CLI or Whop Files API to publish the weekly report. Existing subscribers get auto-delivery. New subscribers discovered via search result for "[City] construction leads."
8. **Cross-city scaling**: Once the pipeline works for one city, agent applies the same pattern to 10-20 cities simultaneously.

## Source

Reddit: r/Entrepreneur, post by user who was laid off 33 days prior, score 431, June 22, 2026:
- https://reddit.com/r/Entrepreneur/comments/1uckcc4/
- Also corroborated by existing VIABLE report: [[regulatory-filings-compliance-product-pipeline]] (OSHA + SEC EDGAR angle)

## Scores

| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 7 | PDF/HTML scraping, Claude parsing, enrichment API calls, Gumroad/Whop listing, auto-delivery — all headless. Human intervention only needed if a city's website structure changes (catch-and-alert pattern) |
| Setup effort | 5 | Need custom scrapers per city (websites vary), enrichment API credentials, and product listing setup. 8-16 hours initial setup; scales well once the pipeline is built |
| Yield potential | 7 | $97/report × 20 subscribers × 10 cities = $19,400/month ceiling; realistically $500-2,000/week in Year 1 targeting 3-5 cities with 10-30 subscribers each |
| Risk | 8 | All data is public record. Enrichment via commercial APIs (Apollo, Hunter) is standard B2B use case. No ToS exposure. Only risk: city website structure changes breaking scrapers |
| **Overall** | **6.75** | Meets VIABLE threshold; distinct data source from existing public records reports |

## Implementation Notes

**Tools and APIs:**
- Scraping: Playwright (JS-heavy portals) or requests + BeautifulSoup (static HTML)
- PDF parsing: PyMuPDF (`pip install pymupdf`) or pdfplumber
- Claude API: `claude-3-5-sonnet-20241022` for structured extraction from unstructured minutes text
- Enrichment: Apollo.io API (email + LinkedIn, $49/mo basic), Hunter.io (email only, free tier), or Apify Google Places scraper (phone + address)
- Delivery: Gumroad CLI (`gumroad products create --type digital`) or Whop Files API (`POST /api/v2/products`)
- Scheduling: cron job, GitHub Actions scheduled workflow, or Railway background worker

**City portal patterns (confirmed accessible as of June 2026):**
- Seattle: legistar.com/Seattle — JSON API available
- Portland: efiles.portlandoregon.gov — structured HTML
- Austin: austintexas.gov/planning — agenda PDFs
- Denver: denvergov.org/planning — meeting minutes PDFs
- Minneapolis: minneapolismn.gov/government/boards-and-committees — direct HTML
- Phoenix: phoenix.gov/pdd — agenda + minutes HTML

**Product positioning for each buyer persona:**
- Contractors: "Who's building in [City] next month? 14 new permits this week."
- RE lawyers: "Zoning variances filed this week in [City] — 6 cases requiring legal counsel"
- Commercial insurance: "[City] demolition pipeline — 8 structures scheduled Q3 2026"
- Fit-out vendors: "New tenant improvements permitted this week — 11 commercial spaces"

**Complementary data sources** (from the Reddit post):
- OSHA violation database (public, CSV download from osha.gov/pls/imis/establishment.html)
- UCC filing triggers (secretary of state portals — new financing statements = business expansion signal)
- Conference booth cross-industry anomaly finders (Eventbrite API for local trade shows)

**Related reports:** [[regulatory-filings-compliance-product-pipeline]]

## Open Questions

- Does Apollo.io's ToS permit automated bulk enrichment of business leads scraped from public records?
- How reliable is Claude at extracting structured data from planning commission minutes that vary in format across cities?
- What's the subscriber acquisition path without paid ads? (SEO blog post "this week's [City] construction permits" + Whop discovery)
- Are there existing services selling similar data at premium price points that would block commodity competition? (Check datarade.ai and similar B2B data marketplaces)
