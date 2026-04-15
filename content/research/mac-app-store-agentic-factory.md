---
title: "Idea: Mac App Store Agentic Factory"
date: 2026-04-15
tags: [passive-income, agentic, viable, mac-app-store, app-store-connect, claude-code, apple]
---

# Mac App Store Agentic Factory

## What It Is

The Mac App Store has 80M+ active macOS users and a built-in catalog with purchase infrastructure. Developers earn 70% of revenue (85% for indie devs under $1M/year via the Small Business Program). Unlike iOS, macOS apps can be built and *tested* on the same machine running Claude Code — no physical device required. Unlike the iOS App Store (which requires Blitz.dev, a tool with security concerns), Mac App Store distribution has a mature, purpose-built headless toolchain.

The income model: Claude Code builds a portfolio of focused menu bar utilities, productivity tools, and developer utilities. Each app is uploaded and submitted to the Mac App Store via the App Store Connect CLI — a scriptable, headless-native tool with built-in SKILL.md skills. Once listed, income is fully passive: Apple handles billing, tax withholding, and worldwide distribution.

Revenue per app is modest ($5–15 one-time or $2.99–$9.99/month subscription), but a portfolio of 10–20 apps creates a diversified passive stream. The top category is menu bar utilities: always-visible, high perceived value, minimal UI surface to build.

## How an Agent Does It

1. *Idea generation cycle*: Agent monitors App Store rankings (via App Store Connect API analytics + web search) to identify underserved niches in menu bar utilities, developer tools, and productivity apps priced $5–15.

2. *App build*: Claude Code generates a complete Swift/SwiftUI or Electron macOS app. For menu bar utilities, the template is short (100–300 lines of SwiftUI). Target: apps that do ONE thing well (clipboard manager, URL shortener, timer, focus mode, network monitor, etc.).

3. *Code signing setup* (one-time per machine): Agent runs `asc-signing-setup` SKILL.md to configure Developer ID certificates, App Store provisioning profiles, and `match` sync. After initial setup this is stored in `.asc/config.json` and runs without any GUI interaction.

4. *Build and archive*: Agent runs `asc-xcode-build` SKILL.md → `xcodebuild archive` → exports `.pkg` / `.app` bundle with correct signing.

5. *Notarization* (for outside-App-Store safety backup): Agent runs `asc-notarization` SKILL.md → `xcrun notarytool submit` → staples ticket.

6. *Upload and submit*: Agent runs `asc publish appstore --submit --confirm --bypass-keychain` → uploads build → attaches metadata → triggers review submission. No browser. No GUI. Fully scriptable.

7. *Monitor review*: Agent polls `asc submission-health` or `asc list builds` on a cron schedule. If review passes, app goes live and income begins. If rejected, Claude Code reads the rejection reason and either fixes the issue or flags for human review (~40% of first submissions get rejected; subsequent submissions for the same app have much lower rejection rates as policy compliance is established).

8. *Updates*: Subsequent version updates use the same pipeline — `asc publish appstore` with a new version number. No additional human input after the initial code-signing setup.

## Source

- YouTube: Multiple Claude Code Mac app tutorials (April 2026); Channel: Hyperautomation Labs (video OaSmgtRqz9U)
- Reddit: r/passive_income "I made $45 in 7 days from a simple Mac app I built with Claude Code" (1sm43ms, April 2026)
- Reddit: r/SideProject "Built a 1k/mo Mac app because I was tired of my own messy files" (1slutee, April 2026)
- GitHub: rudrankriyam/App-Store-Connect-CLI — scriptable headless CLI with 22 SKILL.md skills including `asc-xcode-build`, `asc-notarization`, `asc-signing-setup`, `asc-submission-health`
- Apple Docs: App Store Connect REST API Review Submissions endpoint (2026)
- Apple Docs: iTMSTransporter User Guide — `-assetFile` flag required in 2026 (old `-f` flag deprecated); supports `-apiKey`/`-apiIssuer` for headless auth
- Substack: genaiunplugged.substack.com/p/build-macos-backup-app-claude-code — developer with zero Swift experience built production macOS backup app (delta sync, SHA256 verification, 410K+ file scale) in ~2hr of Claude Code prompting
- WWDC25: developer.apple.com/videos/play/wwdc2025/324/ — App Store Connect API automation session

## Scores

| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 7 | Full build→sign→upload→submit pipeline is headless via App Store Connect CLI + bypass-keychain; app testing runs on the same macOS machine as Claude Code (no physical device needed unlike iOS); ~40% first-submission rejection rate (drops sharply on subsequent versions once policy compliance established) |
| Setup effort | 5 | One-time $99/yr Apple Developer account + Xcode + code signing setup (~1-2hr); harder than web-only platforms but comparable to iOS app factory |
| Yield potential | 6 | $45–$1,000/month per app is the observed range; $300–$800/month realistic from a portfolio of 5–15 apps; ceiling at ~$2K/month without viral hit |
| Risk | 8 | Legitimate Apple approved distribution; no ToS risk from using AI to write code; standard app review process |
| **Overall** | **6.5** | Above viable threshold; complements existing iOS app factory with Mac-native advantages |

## Implementation Notes

*Required accounts/tools:*
- Apple Developer Program: $99/year (apple.com/developer)
- Xcode: free from Mac App Store (must run on macOS — use a Mac mini or GitHub Actions with macOS runner)
- App Store Connect CLI: `brew install rudrankriyam/formulae/asc` or `swift package resolve`
- SKILL.md skills: `github.com/rudrankriyam/app-store-connect-cli-skills` — install `asc-xcode-build`, `asc-notarization`, `asc-signing-setup`, `asc-submission-health`

*Key commands:*
```bash
# Build and archive
asc-xcode-build archive --scheme MyApp --configuration Release

# Submit to App Store
asc publish appstore \
  --bundle-id com.yourname.myapp \
  --bypass-keychain \
  --submit \
  --confirm
```

*Authentication for CI/headless:*
```bash
# Store once; reused by all future runs
asc auth login \
  --key-id YOUR_KEY_ID \
  --issuer-id YOUR_ISSUER_ID \
  --private-key-path ./AuthKey_XXXXXX.p8 \
  --bypass-keychain
```

*Best app categories for 2026:*
- Menu bar utilities (SwiftUI MenuBarExtra): clipboard managers, focus timers, network monitors, quick launchers
- Developer tools: JSON formatters, base64 converters, regex testers, HTTP clients
- Productivity: writing assistants, note-to-clipboard, window managers
- AI-native utilities that wrap Claude/OpenAI for specific tasks

*Small Business Program:* If your App Store earnings stay below $1M/year, Apple automatically applies 15% commission (vs 30%). Register at appstoreconnect.apple.com → My Apps → Agreements.

*GitHub Actions macOS runner:* For fully headless CI (no Mac hardware): `runs-on: macos-latest` in GitHub Actions costs ~$0.08/min. A typical build + submit run takes 3–5 minutes ($0.24–$0.40 per submission). Worth it for fully autonomous operation.

*Rating strategy:* App Store algorithm heavily weights review volume. Agent can email users at purchase to prompt reviews (allowed if one-time email only, per Apple guidelines).

## Open Questions

- Can the agent auto-generate App Store screenshots at required sizes (1280×800, 2560×1600, etc.) using a headless renderer? (SwiftUI previews + screenshot capture may work)
- What's the realistic rejection rate for pure AI-generated utility apps? The 5–10% estimate is from general App Store data — Mac App Store review tends to be faster and less strict than iOS.
- Does Xcode Cloud (Apple's own CI/CD) eliminate the macOS machine requirement entirely? (Xcode Cloud is $0 for 25 compute hours/month — worth testing)
- Can agent-built apps pass App Store privacy requirements without human audit? Privacy manifests (PrivacyInfo.xcprivacy) are now required and need accurate disclosure.
