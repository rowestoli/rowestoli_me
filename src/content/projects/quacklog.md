---
title: QuackLog
summary: A hunting log, map and group chat for duck hunters. I designed, built and shipped it to the App Store on my own.
category: app
status: Live on the App Store
role: Solo — product, design and engineering
timeline: 2025 – present
stack: [React Native, Expo, TypeScript, Supabase, PostgreSQL, Google Maps]
featured: true
wide: true
phones: 3
order: 1
coverLabel: QuackLog screenshots here (3 phone screens)
links:
  appStore: '#'
  site: https://quacklog.app
---

## The problem

Duck hunters track their hunts in notebooks, group texts and memory. Spots, harvest counts and conditions get lost, and sharing a good blind with your group means a string of screenshots.

_Write-up placeholder: who you talked to, what they did before QuackLog, and the moment you decided to build it._

## What I built

- **Hunt logs** with species, harvest counts, conditions and photos.
- **A private map** of blinds, launches and parking, with pins you can share with friends or a group.
- **Chat** — direct messages and group chats with photos and shareable hunt-log cards, delivered in real time.
- **Push notifications** sent straight from Postgres triggers with `pg_net`, so there's no extra server to run.

## Key decisions

- **Supabase over a custom backend.** Auth, storage, realtime and row-level security in one place let one person ship a social app.
- **Security in the database.** Every table is protected by row-level security policies. Untangling a recursive policy on chat participants taught me to keep policies to direct checks and move cross-table logic into reviewed functions.
- **Friends-only messaging** to keep spam out of a small community.

## Results

_Placeholder: downloads, active users, ratings or feedback quotes once you have them._

## What's next

_Placeholder: the next feature you'd prioritize and why._
