---
title: NBA stat predictor
summary: Pick a player and matchup to see projected points, rebounds, assists and threes for their next game, with calibrated over/under odds for any line.
category: web
status: Live demo
role: Solo rebuild (first version built on a team of four)
timeline: Fall 2024 – present
stack: [Python, pandas, scikit-learn, TypeScript, Vite]
origin: Started as the CSCI 0320 (Software Engineering) term project at Brown, then rebuilt from scratch with a proper backtest.
order: 6
coverLabel: Player prediction screenshot
cover: /projects/nba-predictor.webp
coverAlt: Stephen Curry's projected points, rebounds, assists and threes with over/under odds, above a chart of his last games.
links:
  demo: https://rowestoli-nba-predictor.netlify.app
  repo: https://github.com/rowestoli/nba-predictor
---

## The problem

Our class version predicted player stats, but we never measured whether it beat the obvious guess: the player's season average. A prediction tool you can't trust isn't much of a product, so the rebuild starts from the question "how accurate is it, honestly?"

## What I built

- **A leak-free feature pipeline** over 108,000 player-games: rolling and weighted averages, minutes and shot volume, rest, home or away, and each opponent's defense to date, all computed from information available before tip-off.
- **One gradient-boosted model per stat**, trained on 2015–2023, calibrated on 2023–24 and scored on 2024–25 games it never saw.
- **Over/under odds for any line**, built from how real outcomes spread around past projections, and checked for calibration.
- **A static web app** where you pick a player, opponent and venue, adjust lines, and see the odds and recent games update.

## Key decisions

- **Measure against a real baseline.** The model is judged against the season average, not against nothing, and over/under picks are judged against "always take the under," which already wins most of the time because stat lines skew low.
- **Precompute instead of serving.** Every player's projection against all 29 opponents, home and away, is computed ahead of time, so the site needs no server.
- **Match the math in both languages.** The browser computes odds the same way the Python pipeline does, and unit tests check they agree.

## Results

| Stat | Average miss vs season average | Over/under picks right | Always under |
| --- | --- | --- | --- |
| Points | 3.6% smaller | 59% | 54% |
| Rebounds | 3.2% smaller | 60% | 56% |
| Assists | 3.8% smaller | 62% | 57% |
| 3-pointers | 3.6% smaller | 68% | 64% |

Single-game stats are noisy, so a few percent better than the season average is a meaningful gain. Data runs through November 14, 2024.
