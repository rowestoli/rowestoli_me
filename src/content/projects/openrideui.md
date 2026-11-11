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
- **Fare reports from riders.** After a ride, people can report what they actually paid, which feeds back into the estimates.

## Key decisions

- **Deep links over in-app booking.** Ride companies don't offer open booking APIs, and hand-off keeps the app simple and avoids handling anyone's payment details.
- **Estimates with honest labels.** Prices come from per-city rate cards, adjusted by reported fares where there are enough, and each option is marked as an estimate.
- **Start with one city.** San Francisco first, so the rates can be checked against real rides before expanding.

## Status

In development. The next step is a more accurate price model, rebuilt around the fares riders report.
