---
title: "Idea: CrazyGames HTML5 Agent Game Factory"
date: 2026-04-12
tags: [passive-income, agentic, viable, html5-games, crazygames, ad-revenue, browser-games]
---

# CrazyGames HTML5 Agent Game Factory

## What It Is

CrazyGames (crazygames.com) is the largest HTML5 browser game platform with 20 million monthly active players and a self-service Developer Portal where anyone can submit games and earn a share of ad revenue. Unlike the App Store / Google Play path (which requires human accounts, review processes taking weeks, and platform fees), CrazyGames accepts HTML5/WebGL games via a web developer portal with no platform fee and a significantly lower submission barrier.

This creates an opening for an agentic pipeline: Claude Code generates playable hyper-casual HTML5 games (using Phaser.js or Kaboom.js), integrates the CrazyGames SDK (a single JavaScript include that enables their ad system), and submits them via the developer portal. The 20 million monthly players on CrazyGames provide built-in discovery without needing viral marketing, SEO, or App Store ranking games.

Revenue flows via advertisement revenue share — CrazyGames serves interstitial and rewarded ads in your game and pays out monthly (minimum €100, via wire transfer or PayPal). A game with steady engagement (1,000-5,000 daily plays) earns roughly $30-$200/month from ads. A fleet of 5-10 passing games earns $150-$2,000/month combined in steady-state. The full launch path (which unlocks monetization) requires SDK integration and clearing a Quality Assurance check by CrazyGames' team — this is platform-side review, not our human.

## How an Agent Does It

1. **Genre selection:** Agent queries CrazyGames' popular categories via their public website or scrapes the trending section. Targets low-competition hyper-casual genres: word puzzles, idle clickers, math games, trivia, pattern matching. Avoids complex genres (battle royale, RPGs) that require human artistry.
2. **Game generation:** Claude Code writes a Phaser.js game (~300-500 lines of JS) based on the selected genre template. Phaser.js is well-represented in Claude's training data — it produces functional, debugged hyper-casual game code. Assets: uses procedural graphics or free CC0 asset packs (no art direction needed).
3. **SDK integration:** Adds 3 lines of JavaScript to integrate the CrazyGames SDK:
   ```html
   <script src="https://sdk.crazygames.com/crazygames-sdk-v3.js"></script>
   ```
   Then calls `CrazyGames.SDK.init()` on game load and `CrazyGames.SDK.ad.requestAdBreak()` at natural pause points. Fully automated.
4. **Local validation:** Agent runs the game via localhost, confirms it loads and is playable without errors, and verifies ad SDK calls fire correctly.
5. **Human submission step:** Developer navigates to developer.crazygames.com, creates a developer account, and fills out the game submission form (title, description, genre, thumbnail, zip upload). This is a one-time human step per batch of games — typically 5-10 minutes.
6. **QA review:** CrazyGames' QA team reviews the submission (timeline: days to 2 weeks). Games that pass go live on the platform and begin accumulating ad revenue.
7. **Basic Launch → Full Launch path:** Games first enter Basic Launch (limited visibility), then after demonstrating engagement metrics, qualify for Full Launch (global distribution + full monetization). The agent monitors analytics dashboard to identify underperforming titles and iterate.

## Source

- CrazyGames Developer Portal: https://developer.crazygames.com/
- CrazyGames Documentation: https://docs.crazygames.com/
- CrazyGames Wikipedia page (platform scale): https://en.wikipedia.org/wiki/CrazyGames
- HTML5 game monetization context: https://doondook.studio/best-ad-networks-monetize-html5-games/

## Scores

| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 6 | Game code + SDK integration fully agentic; one human submission step per game batch (5-10 min per 3-5 games); platform QA is CrazyGames' human team (not our pipeline) |
| Setup effort | 7 | Phaser.js game template creation is the main upfront work; SDK integration is 3 lines; developer portal registration is one-time; no App Store fees or compilation overhead |
| Yield potential | 4 | $30-$200/mo per game that passes QA; fleet of 5-10 live games = $150-$2,000/mo; unknown QA pass rate for AI-generated games; revenue depends on engagement |
| Risk | 9 | No explicit ban on AI-generated content in CrazyGames ToS; ad revenue is clean; PEGI12 content guidelines are straightforward for hyper-casual; no legal exposure |
| **Overall** | **6.5** | Passes VIABLE thresholds (agentic >= 6, overall >= 6) — borderline; worth pursuing as a low-cost experiment |

## Implementation Notes

**Key technical stack:**
- Phaser.js 3.x (most documented JS game framework, excellent Claude knowledge)
- CrazyGames SDK v3 (2 API calls: init + requestAdBreak)
- Vercel or Netlify for hosting game assets (or direct zip upload to CrazyGames)

**Genre candidates ranked by agentic suitability:**
1. Word/letter puzzles (no art needed, pure logic)
2. Math / number games (no art needed)
3. Idle/clicker games (minimal graphics, simple mechanics)
4. Memory/pattern matching (simple shapes, procedural generation)
5. Trivia games (content = the main asset, Claude generates questions easily)

**QA quality bar:** CrazyGames requires games to "land directly in gameplay" (no loading screens over 3 seconds), be bug-free through a basic playthrough, and follow PEGI12 content standards. The bar is achievable for simple hyper-casual games but will filter out broken or non-functional outputs. Expect 20-40% rejection rate initially until agent learns what passes.

**CrazyGames SDK (minimal integration):**
```javascript
// At game start
await CrazyGames.SDK.init();
// At natural breaks (level complete, game over)
CrazyGames.SDK.ad.requestAdBreak({type: 'interstitial'});
```

**Revenue mechanics:** CrazyGames uses CPM-based ad revenue from their ad partners. Typical CPM: $0.50-$2.00. A game with 5,000 daily page views and 2 ads/session = ~5,000 × 2 × $1.25 / 1000 = $12.50/day = $375/month for a solidly performing game.

**Differentiation from App Store (ai-mobile-games-admob-revenue red herring):**
- No $99/year Apple developer fee
- No binary submission / compilation step
- No weeks-long App Store review with risk of rejection for policy violations
- HTML5 = pure JavaScript, Claude Code excels at this
- Built-in 20M player audience vs. App Store "600K submissions/year" discovery problem

## Open Questions

1. What percentage of AI-generated Phaser.js games pass CrazyGames QA? (Need to test 5 submissions to get baseline rejection rate)
2. Does CrazyGames have an undocumented API for game submission? (Developer portal is web-based, but worth checking for private API)
3. Is there a minimum engagement threshold for Basic Launch → Full Launch transition? (Their docs mention "real-world performance" without specifics)
4. What genres have the least competition on CrazyGames currently? (Check trending section before each batch)
5. Can game content (questions, levels) be auto-generated from API data to enable infinite variants without full game rewrites?
