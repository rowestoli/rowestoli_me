---
title: Ultron
summary: An orchestrator agent that splits a fixed AI budget across teams of agents, measures which ones earn revenue, and moves budget toward them.
category: ai
status: In development
role: Solo — architecture and engineering
timeline: '2026'
stack: [Python, SQLite, Anthropic API, Etsy API, Pinterest API]
featured: true
order: 3
coverLabel: How Ultron works
cover: /projects/ultron.svg
coverAlt: Diagram. Ultron splits a budget between an Etsy team and a Pinterest team, both send work to my approval, then it's published to Etsy and Pinterest.
coverFit: contain
links: {}
---

## The idea

Treat AI agents like a small company: each team has a budget, a job and a measurable result. The orchestrator funds what works and cuts what doesn't.

## How it works

1. **Refresh metrics** from each team's real results.
2. **Split the budget** by return on spend.
3. **Run the teams** — an Etsy team that researches niches, designs products and writes listings, and a Pinterest team that drives traffic to them.
4. **Write a strategy memo** and add lessons to a shared playbook.

Anything that spends money or publishes needs my approval first.

## Status

In development. Version 1 runs end to end in a free test mode with simulated AI costs, and already produces real printable designs and listing images. Next, I'll connect the Etsy shop and run it live on a real model under a $1-a-day spending cap. After that, I plan to move it onto an open-source model running on the PC I built, then add teams for other ways of earning, such as short-form video. The goal is to see how far a small team of agents can get on a tight budget, not to get rich.
