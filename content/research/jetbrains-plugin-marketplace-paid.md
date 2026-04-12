---
title: "Idea: JetBrains Plugin Marketplace — Paid IntelliJ Plugins"
date: 2026-04-12
tags: [passive-income, agentic, viable, developer-tools, jetbrains, intellij, kotlin, marketplace, subscription]
---

# JetBrains Plugin Marketplace — Paid IntelliJ Plugins

## What It Is

JetBrains Marketplace hosts plugins for the entire family of JetBrains IDEs — IntelliJ IDEA, WebStorm, PyCharm, GoLand, Rider, CLion, and more. Combined, the JetBrains IDE ecosystem has over 8 million active developers. The marketplace supports paid plugins with subscription (monthly/annual) and perpetual license models, directly competing with VS Code extensions — except VS Code has no paid extension support while JetBrains does.

The revenue model is straightforward: a developer creates a plugin that solves a pain point for IntelliJ-family users, lists it with a price, and JetBrains handles billing, licensing enforcement, and payout. JetBrains takes a 15% commission (never exceeding 25%), meaning creators keep 85% of revenue. Payouts happen monthly via direct bank transfer once the $200/€200 threshold is reached, with a guaranteed year-end payout even below threshold.

The monetization opportunity is strong because the marketplace is developer-native and has a paying culture. Unlike consumer app stores, developers expect to pay for productivity tools ($5–$20/month is normal). Top plugins in categories like AI coding assistants, code review tools, database helpers, and REST client integrations earn $2K–$10K+ per month.

## How an Agent Does It

1. **Research pain points:** Agent queries GitHub issues, JetBrains Community forums (intellij-support.jetbrains.com), and r/IntelliJIDEA for recurring feature requests or workflow gaps not covered by existing free plugins
2. **Generate plugin code:** Claude Code generates a Kotlin + Gradle IntelliJ plugin project (`./gradlew buildPlugin`) targeting a specific IDE version range with the IntelliJ Platform Plugin SDK
3. **Build and package:** `./gradlew buildPlugin` produces a .zip distributable — fully headless
4. **One-time human step:** Upload the first version to JetBrains Marketplace at plugins.jetbrains.com, apply for paid plugin status via the Marketplace Apply form, and generate a `permanentToken` in the My Tokens tab
5. **All future updates are automated:** `POST https://plugins.jetbrains.com/api/updates/upload` with Bearer token authentication uploads new .zip files directly — or use the `publishPlugin` Gradle task with `intellijPlatform.publishing.token = permanentToken`
6. **Set pricing:** After paid plugin approval, configure subscription tiers (annual/monthly/perpetual) and freemium trial period (30 days) via the marketplace dashboard — one-time setup
7. **Monitor and iterate:** Agent checks sales reports (REST API available with marketplace token) and GitHub issues to prioritize next-version improvements

## Source

- JetBrains Plugin Upload API docs: https://plugins.jetbrains.com/docs/marketplace/plugin-upload.html
- JetBrains Revenue Sharing: https://plugins.jetbrains.com/docs/marketplace/revenue-sharing-and-fees.html
- JetBrains Plugin Monetization: https://plugins.jetbrains.com/docs/marketplace/plugin-monetization.html
- GitHub: JetBrains/plugin-repository-rest-client (official CLI upload tool)
- Q4 2025 Developer Newsletter: https://blog.jetbrains.com/platform/2026/01/busy-plugin-developers-newsletter-q4-2025/

## Scores

| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 7 | Claude Code generates Kotlin; Gradle CLI builds + publishPlugin task uploads; first version per plugin is a one-time human step (same pattern as Shopify apps, Atlassian Forge) |
| Setup effort | 5 | ~2-4 hours: JetBrains account + Hub account, paid plugin application form, first manual upload, API token setup, Gradle publishing config |
| Yield potential | 7 | $200-800/mo realistic for a fleet of 5-10 niche plugins at $5-15/mo subscriptions; top plugins earn $2K-$10K+/mo |
| Risk | 9 | ToS compliant; no AI content restrictions; 15% commission is fixed; GDPR-compliant billing handled by JetBrains |
| **Overall** | **7.0** | Strong established marketplace with confirmed paying culture; agentic after first upload |

## Implementation Notes

**Build system:** The IntelliJ Platform Gradle Plugin (`org.jetbrains.intellij.platform`) is the standard. Key Gradle config:
```kotlin
intellijPlatform {
  publishing {
    token = System.getenv("JETBRAINS_MARKETPLACE_TOKEN")
    channels = listOf("stable")
  }
}
```
Run `./gradlew publishPlugin` for headless CI/CD uploads.

**API upload (without Gradle):**
```bash
curl -i --header "Authorization: Bearer $PERMANENT_TOKEN" \
     -F "pluginId=<numeric-id>" \
     -F "file=@build/distributions/plugin.zip" \
     https://plugins.jetbrains.com/api/updates/upload
```

**First upload requirement:** The initial plugin submission must be done manually via the web UI at plugins.jetbrains.com. Paid plugin activation requires submitting an application form and ~1-3 day review. One-time setup per plugin.

**Best plugin categories for 2026 (AI-native angle):**
- AI prompt templates / snippet injection for specific frameworks
- REST API doc generators from OpenAPI specs in-editor
- Database schema visualizers with AI explain mode
- Git commit message auto-generator (lots of free competition — differentiate with team conventions)
- Language-specific linters with AI-powered fix suggestions (TypeScript, Python, Kotlin)

**Platform coverage:** One plugin submission targets ALL JetBrains IDEs simultaneously via `untilBuild` configuration — not just IntelliJ IDEA.

**Sales report API:** `GET https://plugins.jetbrains.com/api/marketplace/plugin/{id}/report` returns sales data for automated analytics.

## Open Questions

- Does the paid plugin application get approved automatically or is there a subjective quality bar? (Likely auto-approved if plugin installs without errors and has basic description/screenshots)
- Can a single JetBrains Hub account list unlimited paid plugins, or is there a per-plugin fee?
- Does JetBrains' 15% include VAT handling for EU customers or is that additional?
- What is the minimum viable plugin download count before paid upgrade requests become consistent?
