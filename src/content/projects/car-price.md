---
title: Used car price estimator
summary: A used-car price model trained on 166,000 real Craigslist listings, with a calibrated price range and a breakdown of what moves the number.
category: ai
status: Live demo
role: Solo
timeline: 2025 – present
stack: [Python, scikit-learn, pandas, TypeScript, Vite]
order: 6.5
coverLabel: Price estimate with range and breakdown
cover: /projects/car-price.webp
coverAlt: The estimator showing a 2015 Honda Civic at $14,250, with an 80% price range and a breakdown of how mileage and location changed the estimate.
coverFit: cover
links:
  demo: https://rowestoli-car-price.netlify.app
  repo: https://github.com/rowestoli/CarPricePrediction
---

## The problem

My first version looked finished but wasn't real: a polished form on top of a hand-written formula, with made-up base prices, multipliers I guessed, and a confidence score hard-coded at 85%. I wanted to find out how wrong it was, then replace it with a model that earns its numbers.

## What I built

- **A data pipeline** that turns 426,880 messy Craigslist listings into 166,138 clean, unique cars.
- **Three gradient-boosted models** that predict the typical asking price and the low and high ends of a calibrated 80% range.
- **A browser estimator** that runs the exported trees locally, explains each estimate step by step, and plots the car against real listings for every model year.

## Key decisions

- **Measure the old version first.** Scored on the same held-out cars, the prototype's typical miss was 70%. That number set the bar and made the case for the rebuild.
- **Remove reposts before splitting.** Over half the listings with a VIN were the same car reposted in other cities. Left in, they would have leaked into the test set and flattered the score.
- **Normalize model names by rule.** 29,649 free-text names such as "F150 Lariat" and "f-150 xlt" were collapsed into 385 models, so the model learns from every listing of a car instead of splitting it across spellings.
- **Make the range honest.** The raw 10th–90th percentile models covered only 75% of real prices, so the range is widened by however much they missed on held-out cars. It now covers 79%.
- **Say what the data is.** These are 2021 asking prices, not sale prices. The page says so beside every chart.

## Results

Tested on 33,228 listings the model never saw:

| Approach | Typical miss | Within 10% |
| --- | --- | --- |
| This model | 12.3% | 42% |
| Median of the same model and year | 16.6% | 32% |
| Original prototype formula | 70.1% | 9% |
