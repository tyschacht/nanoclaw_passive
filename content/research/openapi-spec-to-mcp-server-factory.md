---
title: "Idea: OpenAPI-Spec-to-MCP-Server Factory"
date: 2026-05-19
tags: [passive-income, agentic, viable, mcp, openapi, marketplace, developer-tools]
---

# OpenAPI-Spec-to-MCP-Server Factory

## What It Is

Thousands of public APIs publish OpenAPI 3.0+ specifications — the machine-readable blueprints that describe every endpoint, parameter, and authentication method. A category of open-source tools (harsha-iiiv/openapi-mcp-generator, FastMCP's OpenAPI integration, mcp-openapi-proxy) can now read these specs and automatically scaffold fully-typed TypeScript MCP servers from them in minutes.

The opportunity: most APIs that already have OpenAPI specs do NOT yet have paid MCP servers on the major marketplaces. Stainless (recently acquired by Anthropic for $300M+) built a B2B business doing exactly this for enterprise API vendors. The indie version of this idea targets the long tail — the thousands of APIs whose vendors won't build official MCP servers for themselves.

A Claude Code agent can run the generation pipeline, configure authentication, push to GitHub, and list on MCPize and AgenticMarket. Done once per API, then passive. Build a portfolio of 20–50 niche API servers and earn subscription revenue from each.

## How an Agent Does It

1. **Discovery**: Agent queries the APIs.guru directory (github.com/APIs-guru/openapi-directory, 3,000+ specs) and filters for APIs with no existing MCP server on MCPize or AgenticMarket (cross-reference search via marketplace search endpoints)
2. **Generation**: Claude Code runs `npx openapi-mcp-generator --spec <url> --output ./servers/<api-name>` — produces TypeScript MCP server with Zod validation, multi-transport support, and authentication stubs
3. **Auth configuration**: Agent reads the OpenAPI securitySchemes block, creates a `.env.example` with the required keys, and writes a concise setup guide for users
4. **Quality pass**: Agent runs the built-in HTML test client to verify a sample endpoint resolves without errors; fixes any obvious schema mismatches
5. **GitHub push**: `git init && git push` to a new repo under an org like `mcp-servers-collection`
6. **MCPize listing**: `npx mcpize deploy` (MCPize CLI) — attaches the GitHub repo, sets pricing ($5–$15/month), writes a description from the OpenAPI spec's `info.description` field
7. **AgenticMarket listing**: CLI equivalent — `agenticmarket publish --repo <url> --price 9` — for Founding Creator 90% rev share
8. **Repeat**: Agent runs the pipeline on the next API on the discovery list

Each cycle: ~15–30 min of agent time, ~$0.25–$1.00 in Claude API costs. A batch of 5 new servers per week is realistic.

## Source

- HN: Show HN post (r/ClaudeAI ID:1thkkrb, score 47, May 19 2026): "Anthropic just bought the company that generates most production MCP servers" — Stainless acquisition confirms demand for MCP server generation at scale
- Web: DigitalAPI blog "How to Generate an MCP Server from OpenAPI Specs (2026 Guide)"; Speakeasy "Generating MCP tools from OpenAPI: benefits, limits and best practices"
- GitHub: harsha-iiiv/openapi-mcp-generator — open-source Node.js tool for spec-to-server conversion
- Market signal: MCPize has 11,000+ servers but <5% monetized; AgenticMarket Founding Creator tier (90% rev share, first 100 slots) still open

## Scores

| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 6 | Generation and GitHub push fully automated; MCPize CLI deploy confirmed; authentication config requires per-spec review (some APIs have complex OAuth flows Claude may mis-scaffold) |
| Setup effort | 6 | Build the pipeline once (~4 hours); then each new server takes 15–30 min agent time; need MCPize + AgenticMarket accounts and Stripe KYC (one-time human step) |
| Yield potential | 5 | Uncertain demand per server: 3–8 subscribers at $5–15/mo = $15–120/server/mo; 30 servers × $50/mo avg = $1,500/mo ceiling realistic; top server could earn $300–500/mo if it fills a genuine gap |
| Risk | 9 | Generating servers from public OpenAPI specs is legitimate; no ToS conflict; worst case = zero subscribers on a given server |
| **Overall** | **6.5** | Viable — portfolio approach mitigates low-demand risk per server; first-mover advantage narrows as tools mature |

## Implementation Notes

**Core tools:**
- `harsha-iiiv/openapi-mcp-generator` (npm: `openapi-mcp-generator`) — best for batch use; TypeScript output; Zod schemas
- `FastMCP` (`gofastmcp.com/integrations/openapi`) — one-liner: `mcp = FastMCP.from_openapi(spec_url, client_fn)` — Python; simpler but less customizable
- `mcp-openapi-proxy` (PyPI) — lightest weight; great for prototyping

**Discovery sources:**
- apis.guru GitHub (unofficial_openapi_specs repo) — 3,000+ curated specs for production APIs
- APIs.guru REST endpoint: `GET https://api.apis.guru/v2/list.json` — returns all specs with metadata
- Filter by: no GitHub search result for `<api-name> mcp-server`; no MCPize listing; API still active (check spec's `info.contact`)

**Pricing guidance (MCPize):**
- Utility APIs (email validation, postcode lookup, currency conversion): $5–9/month
- Developer tools (code formatter API, linter API, syntax highlighter): $9–15/month
- Business data (company registry, court records, permit data): $15–29/month

**Auth handling:**
- API key auth: agent writes `PROVIDER_API_KEY` to .env.example — trivial
- OAuth2 Bearer: agent scaffolds token fetch but user must supply client_id/secret — include in docs
- Complex OAuth2 flows (3-legged, PKCE): flag for human review; skip these in batch runs

**June 15 2026 billing note:** Claude Agent SDK costs moving to separate metered credits (not subscription). For this pipeline, use Claude Code's batch mode or claude-p flag to minimize cost per server generated. Target ~$0.25/server in Claude API costs; at $5–15/month revenue the payback period is under 2 weeks per subscriber.

**Quality signal:** Check if the target API has an existing npm package. If it does, Stainless or Speakeasy may already have an official MCP server in the pipeline — deprioritize these.

## Open Questions

- Does MCPize allow bulk listing via CLI without per-server manual review? (Confirm with MCPize support before building batch pipeline)
- Is there a way to auto-detect which APIs have unmet developer demand? (GitHub issues mentioning "wish there was an MCP server for X" is a signal worth scraping)
- Will generated servers pass MCPize's quality check automatically, or does each require a human approval step?
- Can authentication secrets be handled via a standard `.env.example` and a clear README, or do some APIs require a web-based OAuth flow that blocks agentic users?
