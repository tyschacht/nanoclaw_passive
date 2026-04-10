---
title: "Idea: Polymarket & Kalshi Weather Market Trading Bot (GFS/ECMWF Edge)"
date: 2026-04-10
tags: [passive-income, agentic, viable, polymarket, kalshi, weather, prediction-markets, trading-bot, open-source]
---

# Polymarket & Kalshi Weather Market Trading Bot (GFS/ECMWF Edge)

## What It Is

Prediction markets like Polymarket and Kalshi offer daily temperature contracts for major global cities — binary outcomes like "Will New York's high temperature exceed 72°F today?" Each share trades between $0.01 and $0.99 and pays $1 on resolution. The key insight is not meteorological expertise: it's *timing arbitrage* between professional weather model updates and slow-moving market prices.

The National Oceanic and Atmospheric Administration (NOAA) publishes GFS (Global Forecast System) ensemble model runs every 6 hours on a fixed schedule. The European Centre for Medium-Range Weather Forecasts (ECMWF) publishes updates on a similar cadence. Polymarket and Kalshi prices tend to lag 15-30 minutes behind each new model run — long enough for a bot scanning every 2-5 minutes to buy underpriced contracts before the market fully digests the new forecast. On Kalshi, the KXHIGH series specifically covers daily high temperature thresholds in major cities with automated settlement. On Polymarket, the climate/science category has accumulated $16.5M+ in cumulative volume, with individual daily markets clearing $300,000–$400,000 in 24-hour volume.

The strategy is distinct from directional prediction: the bot doesn't need to know if it will rain — it only needs to know if the current market price diverges meaningfully from what the latest model run implies. When the new GFS run shows a 72% probability of a temperature threshold being met but the market is only pricing it at 58%, that's an 8%+ edge and a trade. The bot's edge compresses as other bots enter, but the weather model update cycle creates fresh opportunities every 6 hours across 67+ city markets.

## How an Agent Does It

1. *Every 5 minutes:* Query Polymarket's Gamma API for all open weather/temperature markets and fetch current best bid/ask prices from the CLOB WebSocket.
2. *Every 6 hours (synced to GFS/ECMWF update schedules):* Fetch latest 31-member GFS ensemble and ECMWF ensemble forecast data from Open-Meteo API (free tier, 100K requests/day) for each city covered by active markets.
3. *For each market:* Compute multi-model weighted consensus probability using ECMWF (0.35 weight), GFS (0.25), UKMO (0.20), NWS (0.20) — apply Normal CDF approximation to temperature distribution around each threshold.
4. *Edge detection:* If `model_probability − market_price > 0.08` (8% minimum edge), flag as tradeable. Apply Kelly criterion sizing: `f* = edge / odds` to determine position size as fraction of bankroll.
5. *Trade execution:* Submit limit orders on Polymarket via CLOB API (Polygon/USDC); submit orders on Kalshi via RSA-PSS authenticated REST API. Target maker fills to earn 25% maker rebate on both platforms (weather markets eligible since Polymarket's March 30, 2026 expansion).
6. *Position tracking:* Monitor open positions for adverse model updates. If new GFS run materially changes the consensus probability against open position, evaluate early exit via opposite-side fill.
7. *Daily settlement:* Winning contracts auto-resolve at $1.00. USDC earnings accumulate in Polygon wallet (Polymarket) or USD in Kalshi account. Transfer to main wallet weekly.

## Source

- DEV Community: "How Polymarket Weather Markets Actually Work" (cryptodeploy, April 2026) — https://dev.to/cryptodeploy/how-polymarket-weather-markets-actually-work-50nb
- GitHub: suislanchez/polymarket-kalshi-weather-bot — Multi-platform bot with highest profits $1.8K documented — https://github.com/suislanchez/polymarket-kalshi-weather-bot
- GitHub: alteregoeth-ai/weatherbot — Kelly Criterion + EV filtering + simulation mode — https://github.com/alteregoeth-ai/weatherbot
- WeatherBot.finance — Commercial implementation with 4-model ensemble, $0.015/trade fee — https://www.weatherbot.finance/
- Medium/Dev Genius: "Found The Weather Trading Bots Quietly Making $24,000 On Polymarket And Built One Myself For Free" (Ezekiel Njuguna, Feb 2026) — documents $24K–$65K documented profits from active traders
- HN discussion (ID: 47500689): "Anyone trading prediction markets programmatically?" — confirms 5-8 cent spreads and weather market edge; mentions $2M+ documented for top weather trader (gopfan2)

## Scores

| Criterion | Score (1-10) | Notes |
|---|---|---|
| Agentic viability | 9 | Multiple fully open-source autonomous bots exist; APScheduler handles job scheduling; runs 24/7 once configured |
| Setup effort | 6 | Requires Python 3.10+, Open-Meteo API (free), Polygon USDC wallet setup, Kalshi API credentials (RSA-PSS auth), ~4-8 hours to configure |
| Yield potential | 8 | $24K–$65K documented from active traders; $100–400/week realistic at $5K–$20K starting capital; weather category 25% maker rebate also available |
| Risk | 7 | Market risk only (weather surprises, liquidity gaps); no ToS issues; no legal issues; 94% market reversals documented so Kelly sizing is critical |
| **Overall** | **7.5** | Strong viable candidate; open-source tooling lowers setup barrier dramatically |

## Implementation Notes

*Weather data (all free):*
- Open-Meteo API: `https://api.open-meteo.com/v1/forecast?latitude=...&longitude=...&daily=temperature_2m_max&models=gfs,ecmwf,ukmo_seamless` — no API key required
- NWS hourly: `https://api.weather.gov/points/{lat},{lon}` — no API key
- NOAA NCEI historical: `https://www.ncdc.noaa.gov/cdo-web/api/v2/data` — free API key

*Trading APIs:*
- Polymarket CLOB: `https://clob.polymarket.com/` — requires Polygon wallet + USDC, EIP-712 signing (or use Bullpen CLI)
- Polymarket Gamma API: `https://gamma-api.polymarket.com/markets?tag=weather` — market discovery, no auth
- Kalshi: `https://trading-api.kalshi.com/trade-api/v2` — RSA-PSS authentication, search KXHIGH series for temperature markets
- pmxt library: unified JS/TS wrapper for both platforms (npm install pmxt)

*Open-source starting points:*
- `suislanchez/polymarket-kalshi-weather-bot` — most complete; FastAPI backend + React dashboard
- `alteregoeth-ai/weatherbot` — simpler; pure Python; Kelly + EV filtering
- `hcharper/polyBot-Weather` — Polymarket-only, lightweight

*Commercial option:* WeatherBot.finance charges $0.015/trade or $0.03/winning trade — worth comparing against DIY ops costs for low-capital operators.

*Important:* Monitor Polymarket USD migration (announced April 6, 2026 — replacing USDC.e with Polymarket's own USDC-backed token). All Polymarket bots need collateral-handling update when migration goes live.

## Open Questions

1. What is the actual win rate at 8% minimum edge threshold vs. 5% or 10%? The open-source bots document simulation results, not live trading results.
2. How many other bots are competing on the same GFS update cycle? If 50+ bots all buy within 5 minutes of each GFS release, the edge compresses quickly.
3. Does ECMWF give a statistically significant edge over GFS-only for temperature forecasting at the precision of these contracts (e.g., Seoul 15-16°C vs 17-18°C)?
4. Is there a capital floor for meaningful yield? At $1,000 bankroll, Kelly-sized positions may be too small ($15-$80/trade) to clear minimum order sizes.
5. Kalshi KXHIGH series coverage — which cities and how many active markets at any given time?
