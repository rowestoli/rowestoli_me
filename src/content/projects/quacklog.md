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
coverLabel: QuackLog screenshots
screens:
  - { src: /projects/quacklog/01-logs.webp, alt: "Hunt Logs: a list of hunts by date, each with birds, species and a harvest breakdown." }
  - { src: /projects/quacklog/04-map.webp, alt: "Map of the Sacramento Valley with pins for blinds, launches and friends' spots." }
  - { src: /projects/quacklog/06-feed.webp, alt: "Feed of friends' hunts with bird counts, notes, likes and comments." }
  - { src: /projects/quacklog/02-log-hunt.webp, alt: "Log Hunt form with date, time, GPS location, blind name and a harvest counter per species." }
  - { src: /projects/quacklog/03-hunt-details.webp, alt: "Hunt Details showing totals, harvest by species, weather and notes." }
  - { src: /projects/quacklog/05-profile.webp, alt: "Profile with career stats: hunts, birds, species and top species." }
links:
  appStore: https://apps.apple.com/us/app/quacklog/id6759507740
  site: https://quacklog.app
---

## The problem

Duck hunters track their hunts in notebooks, group texts and memory. Spots, harvest counts and conditions get lost, and sharing a good blind with your group means a string of screenshots.

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

Apple rejected the first submission in August 2026 on four points: no Sign in with Apple, an email verification link that errored, a demo login that didn't work, and outdated iPad screenshots. I fixed all four: I added Sign in with Apple, built the missing verification page, seeded a working demo account, and made the app iPhone-only. QuackLog went live on the App Store in November 2026.
