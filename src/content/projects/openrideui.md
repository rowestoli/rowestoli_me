---
title: OpenRideUI
summary: Compares ride-hail options side by side, sorted by price or arrival time, then opens the ride in the provider's own app.
category: app
status: In development
role: Solo — product, design and engineering
timeline: '2026'
stack: [React Native, Expo, TypeScript, Supabase, Google Places, Maps]
featured: true
order: 2
coverLabel: Screenshots coming with the next build
links: {}
---

Checking what a ride costs means opening several apps and typing the same destination into each one. OpenRideUI asks once and shows every way to get there side by side.

## What I built

- **One search, every option.** Rideshare products, bikes, scooters, walking and driving for the same trip, sorted by price or by arrival time, with the cheapest and fastest marked.
- **Hand-off, not booking.** Picking an option opens the provider's own app with the trip filled in, so there are no accounts to link and no payments to handle.
- **A backend that does the math.** A Supabase edge function looks up the route, the time of day and the city's rates, and returns every option in one call.
- **Fare reports from riders.** People can report the price another app quoted them, or what they paid, and the next search uses it.

## Key decisions

- **Deep links over in-app booking.** Ride companies don't offer open booking APIs, and hand-off keeps the app simple and avoids handling anyone's payment details.
- **Estimates with honest labels.** Every price is a typical quote with an 80% range, and each option is marked as an estimate.
- **Start with one city.** San Francisco first, so the rates can be checked against real rides before expanding.

## Pricing without data

The first version priced rides from published rate cards. Checked against Obi's studies of more than 94,000 San Francisco quotes, those cards put Uber and Lyft 55–62% too high and Waymo 32% too low, so the app ranked Waymo cheaper than Uber and Lyft. In the studies it is the most expensive of the four.

Riders had reported almost no fares, so I couldn't learn the prices from riders. I rebuilt the model in three layers:

- **Calibrated to public studies.** Each provider's rate card is reshaped by two fitted numbers, so that on a set of about 1,200 realistic San Francisco trips it matches the study's median quote and its price per km on 4–9 km trips. A later study's price changes then set the current level.
- **Time of day that averages out.** The hourly surge profile is rescaled so it moves prices around the day without inflating the average, and Tesla, which the study found never surges, stays flat.
- **Learning from a handful of reports.** The old calibration needed six fares per product before it changed anything. Now each report is pooled by provider and shrunk toward the prior, so one UberX quote nudges UberX and, less, Uber's other products. Reporting a quote is the default, because a rider can copy one from another app without booking.

Fitted on medians, the model gets the provider order right and misses the average quote, which it never saw, by 8% instead of 52%. The clearest remaining gap is very short trips, where it makes Waymo about twice Uber's price against 1.4× in the one study that measures it. That is where rider quotes will help first.

## Status

In development. The new price model is built and tested, and goes live with the next backend deploy.
