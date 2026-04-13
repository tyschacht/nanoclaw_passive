---
title: "Idea: Android App Factory (Google Play)"
date: 2026-04-13
tags: [passive-income, agentic, viable, android, mobile, google-play, app-store, admob]
---

# Android App Factory (Google Play)

## What It Is

Claude Code builds Android applications (Kotlin/Jetpack Compose or Flutter), signs and packages them via Gradle CLI, and deploys them to Google Play using the Play Store MCP Server (devexpert-io/play-store-mcp) and Fastlane Supply. Once an app is live, it earns passive revenue through Google Play Billing (subscriptions and in-app purchases at 15% fee for under $1M/year) and Google AdMob ad impressions.

The setup mirrors the [[ios-app-factory-blitz-mcp]] approach but targets the larger Android ecosystem — 3.5 billion active Android devices vs approximately 1.4 billion iOS devices globally. The key toolchain is fully CLI-driven: `./gradlew bundle` builds the release AAB, Fastlane `supply` uploads to Play Store tracks, and the Play Store MCP exposes `deploy_app`, `promote_release`, and `get_releases` tools that Claude Code can call directly. A dedicated `claude-android-skill` SKILL.md (github: dpconde/claude-android-skill) provides Claude Code with production-ready Android architecture patterns.

Revenue flows are dual-mode. Google Play Billing handles subscriptions ($2-$10/month range typical for utility apps) with 15% Google fee on amounts under $1M/year. AdMob provides a second layer: banner or interstitial ads in free tiers earn passively from active users, typically $0.50-$5 per 1,000 active sessions. Successful utility apps (productivity, AI assistants, niche tools) realistically reach $200-$2,000/month at modest install volumes. Real-world documented case: one developer built a calendar alarm app using Claude Code with zero prior Android experience in four days and acquired paying subscribers.

## How an Agent Does It

1. Agent receives a target niche (e.g., "AI expense tracker for freelancers" or "habit tracker with AI coaching").
2. Claude Code generates full Kotlin/Jetpack Compose app using `claude-android-skill` SKILL.md for architecture guidance — MVVM, Hilt DI, Room DB, Retrofit. Gradle `build.gradle.kts` configured for release builds.
3. Agent sets up `keystore.jks` signing (one-time per developer account; credentials stored as environment variables). Gradle signing config in `build.gradle.kts` is code-defined.
4. Agent runs `./gradlew bundleRelease` to produce a signed `.aab` file.
5. **[ONE-TIME MANUAL STEP PER APP]** Developer logs into Play Console, creates the app listing, uploads the first AAB, and completes the first review submission. This takes approximately 20-30 minutes per app and is required by Google policy.
6. After first approval, all subsequent updates go through Play Store MCP or Fastlane supply: `fastlane supply --aab app-release.aab --track internal` promotes to internal testing, then `fastlane supply --track alpha --rollout 0.5` for staged rollout.
7. Agent configures Google Play Billing library in-code for subscription tiers. AdMob App ID and ad unit IDs are set via `BuildConfig` in Gradle.
8. Agent monitors crash reports via Firebase Crashlytics API (REST) and Play Developer Reporting API for unhandled exceptions — fixes pushed via steps 4-6.
9. Revenue settles monthly to developer's Google Payments account; no further agent action required.

## Source

- DEV.to: "I Built an Android App in 4 Days With Zero Android Experience — Using Claude Code" (dev.to/raio, April 2026)
- Medium/Level Up Coding: "From AI to First Subscription: How I Built an Android App Without Writing a Single Line of Code" (April 2026)
- GitHub: devexpert-io/play-store-mcp (Play Store MCP Server, `deploy_app` + `promote_release` + `get_releases` tools)
- GitHub: dpconde/claude-android-skill (Claude Code SKILL.md for Android production architecture)
- scriptbyai.com/play-store-mcp (Play Store MCP documentation)
- ClaudeLab.net: "Claude Code × Android / Kotlin Production Guide" (April 2026)

## Scores

| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 7 | Code + Gradle + Play Store MCP fully agentic; first submission per app is one manual ~25-minute step |
| Setup effort | 5 | $25 developer account + service account JSON key + initial Play Store MCP config; first-time submission per app is manual |
| Yield potential | 7 | 3.5B Android devices; $200-$2,000/mo realistic; 15% Google fee on subs under $1M/yr; AdMob adds passive ad layer |
| Risk | 7 | Google Play review may reject low-quality apps; account ban risk from spam; legitimate income mechanism |
| **Overall** | **6.5** | Strongest on yield and agentic viability; setup effort slightly lower than iOS due to no Blitz.dev equivalent for first submission |

## Implementation Notes

**Key tools:**
- `claude-android-skill`: `github.com/dpconde/claude-android-skill` — install as SKILL.md for Claude Code
- Play Store MCP: `github.com/devexpert-io/play-store-mcp` — requires Google Cloud service account with `androidpublisher` scope
- Fastlane Supply: `gem install fastlane` + `fastlane supply init` — handles AAB upload, track promotion, metadata, screenshots
- Google Play Developer API: `androidpublisher.googleapis.com` — REST API for managing releases, in-app products, reviews
- AdMob: `developers.google.com/admob` — ad unit IDs in `BuildConfig`, Gradle dependency `com.google.android.gms:play-services-ads`

**Architecture stack Claude Code should target:**
- UI: Jetpack Compose + Material 3
- State: StateFlow MVVM ViewModels
- DI: Hilt
- DB: Room with offline-first
- Network: Retrofit + OkHttp
- Billing: `com.android.billingclient:billing-ktx`

**Google Play Billing revenue math:**
- Google takes 15% on subscriptions for accounts under $1M/year
- $5/month subscription × 500 subscribers × 85% = $2,125/month
- AdMob overlay on free tier: 10,000 DAU × 3 sessions × $1 CPM / 1,000 = $30/day

**Category strategy:** Productivity, AI Assistants, Finance, and Health are highest-value Play Store categories. Niche apps (e.g., "AI planner for nurses") outperform generic apps due to lower competition and higher search intent.

**Play Console first submission checklist:**
- Create app listing in Play Console (developer.android.com/distribute/googleplay/developer-console)
- Upload signed AAB to internal testing track
- Complete store listing (screenshots, description, content rating questionnaire)
- Submit for Google review (2-7 days first-time)
- After approval, all future management is agentic via Play Store MCP/Fastlane

## Open Questions

- Can Appium or UIAutomator2 via ADB automate the Play Console web UI for the first submission step, eliminating the one manual step entirely?
- What is the Google Play rejection rate for AI-generated utility apps? Google does not specifically ban AI-coded apps, only low-quality or policy-violating content.
- Does Google Play's "Made for Kids" flag and COPPA compliance require human judgment to configure correctly?
- Would a dedicated Play Console MCP (similar to Blitz.dev for iOS App Store Connect) fully close the agentic gap for first submissions?
