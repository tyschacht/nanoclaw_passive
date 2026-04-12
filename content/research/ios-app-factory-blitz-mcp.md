---
title: "Idea: iOS Utility App Factory via Claude Code + Blitz.dev MCP"
date: 2026-04-12
tags: [passive-income, agentic, viable, ios, app-store, apple, mcp, claude-code]
---

# iOS Utility App Factory via Claude Code + Blitz.dev MCP

## What It Is

Blitz (blitz.dev) is an open-source native macOS application with a built-in MCP server that gives Claude Code full agentic control over the entire iOS app lifecycle — from build to App Store submission. As of April 2026, the toolchain is:

1. Claude Code writes Swift/SwiftUI utility apps based on a REQUIREMENTS.md
2. Blitz MCP handles: simulator management, database setup, screenshot capture, App Store Connect metadata, IAP configuration, and app submission
3. A separate iPhone MCP (`blitzdotdev/iPhone-mcp`) lets the agent test on a real device and catch bugs before submission
4. asc-cli integration (added by Blitz maintainer Minjune Song) handles the App Store Connect web interface for app registration
5. Apple reviews (1–7 days); if approved, app goes live and earns passively from downloads or IAP

The income model: utility apps (calculators, converters, productivity tools, habit trackers, sleep aids, noise generators) earn $0.99–$4.99 one-time or $0.99–$2.99/month subscription. The App Store provides built-in discovery with no external marketing required for utility apps in underserved niches.

A developer on r/ClaudeAI (score 472) reported shipping 6 iOS utility apps in 3 months with Claude Code, earning "real revenue" (amount undisclosed). A follow-up post (score 707) highlighted Blitz as the unlock that makes the submission step fully agent-executable.

## How an Agent Does It

1. Agent identifies underserved App Store niches (unit conversion, language learning flashcards, weather widgets, minimalist timer/Pomodoro, baby sleep noise generator, medication tracker, etc.) via keyword research and App Store search gap analysis
2. Agent writes complete SwiftUI app code in Claude Code against REQUIREMENTS.md
3. Blitz MCP drives Xcode build, simulator testing, and basic UI verification
4. iPhone MCP optionally tests on real device to catch render/performance issues
5. Blitz MCP fills App Store Connect metadata: name, subtitle, description, keywords, screenshots (generated via simulator)
6. Agent submits for Apple review via Blitz + asc-cli integration
7. Apple reviews in 1–7 days (average 24–48 hours for utility apps in established categories)
8. If rejected: agent reads rejection reason, iterates and resubmits (one-time human review of rejection message is the main human touchpoint)
9. Once approved: passive income from downloads + IAP on Apple's payment rail

## Source

- r/ClaudeAI (score 472, April 6, 2026) — developer reports 6 iOS apps in 3 months with Claude Code
- r/ClaudeAI (score 707, April 6, 2026) — Blitz.dev MCP introduced as the App Store Connect automation tool
- GitHub: [blitzdotdev/blitz-mac](https://github.com/blitzdotdev/blitz-mac) — open-source macOS + MCP server
- GitHub: [blitzdotdev/iPhone-mcp](https://github.com/blitzdotdev/iPhone-mcp) — device testing MCP
- Web research: blitz.dev, Glama MCP directory, X (Minjune Song's posts), mcpmarket.com — April 12, 2026

## Scores

| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 7 | Build + submit fully agentic via Claude Code + Blitz MCP; Apple rejection responses may need human triage (~10 min per rejection); once live, fully passive |
| Setup effort | 5 | Apple Developer Program ($99/yr); Blitz macOS install; Claude Code integration; one-time Apple provisioning profile setup; asc-cli credential setup |
| Yield potential | 6 | Utility apps: $100–500/mo each at steady state; portfolio of 6+ = $600–3,000/mo; top apps $1K–5K/mo; free apps with IAP earn more than paid |
| Risk | 5 | Apple ToS on AI-generated content not yet explicit; Blitz v1 security issue (credentials via Cloudflare Worker — use Fastlane as alternative until v2); 30–40% first-submission rejection rate is normal; rejected apps cost time, not money |
| **Overall** | **5.75** | Viable — strong agentic viability compensates for moderate setup complexity and Apple ToS uncertainty |

## Implementation Notes

- **Blitz v1 security caution**: v1 routed credentials through a third-party Cloudflare Worker. Community flagged this. Fastlane is the battle-tested alternative for CI/CD submission. Monitor Blitz v2 for in-device credential handling.
- **Fastlane alternative**: `fastlane deliver` submits metadata + screenshots headlessly; `fastlane pilot` for TestFlight. Works in Claude Code terminal. More mature than Blitz but no MCP layer.
- **XcodeBuildMCP** (`getsentry/XcodeBuildMCP`): another MCP server for build/test step — pairs with Blitz for full pipeline
- **App types that work best**: Utility (converters, calculators), productivity (timers, habit trackers), wellness (sleep noise, meditation), language learning (flashcards, pronunciation)
- **IAP vs. paid**: Free app + $0.99–$2.99/mo subscription consistently outperforms $0.99 paid app
- **Niche selection matters**: Avoid saturated categories (to-do lists, note apps). Target hyper-specific niches (e.g., "mRNA vaccine timing tracker," "tidal chart app for kayakers," "ramen ingredient calculator")
- **Apple Developer Program**: $99/year; provides 1 certificate for unlimited apps; required before Blitz can submit
- **App Store Connect MCP**: Blitz + asc-cli handles the web interface; agent fills metadata (name, subtitle, 100-char description, keywords, screenshots from simulator)
- **Fastlane**: Older, more mature alternative for headless submission. Install via `gem install fastlane`.

## Open Questions

- Has Blitz v2 resolved the credential security issue? Check github.com/blitzdotdev/blitz-mac releases before building
- What is Apple's current policy on AI-generated app content? No explicit ban found as of April 2026, but undisclosed AI content risks rejection
- Can screenshot generation (simulator capture + annotation) be done fully headlessly without a display?
- How does the agent handle Apple's occasional request for supplementary materials or app demo videos (required for some app categories)?
- What is the actual first-submission approval rate for Claude Code-generated SwiftUI apps?
