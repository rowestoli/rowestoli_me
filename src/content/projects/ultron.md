---
title: Ultron
summary: An orchestrator agent that splits a fixed AI budget across teams of agents, measures which ones earn revenue, and moves budget toward them.
category: ai
status: In development
role: Solo — architecture and engineering
timeline: '2026'
stack: [Python, SQLite, Anthropic API, Etsy API, Pinterest API, ReportLab]
featured: true
order: 3
coverLabel: Ultron HQ, the control room
cover: /projects/ultron/hq.webp
coverAlt: Ultron HQ, a pixel-art stone hall. Ultron sits on a throne under a revenue and profit bar, with five agents at their stations below; Researcher, Designer, Lister, Analyst and Pin Writer.
coverFit: cover
demoLabel: Explore the control room
links:
  demo: /ultron/hq/
---

## The idea

Treat AI agents like a small company: each team has a budget, a job and a measurable result. The orchestrator funds what works and cuts what doesn't.

## How it works

<figure>
  <img src="/projects/ultron.svg" alt="Diagram. Ultron splits a budget between an Etsy team and a Pinterest team, both send work to my approval, then it's published to Etsy and Pinterest." loading="lazy" />
</figure>

1. **Refresh metrics** from each team's real results.
2. **Split the budget** by return on spend, keeping 30% for exploring.
3. **Run the teams.** The Etsy team finds niches, checks each one against live Etsy search, designs a printable PDF and its listing image, and writes the listing. The Pinterest team writes pins for listings once they're live.
4. **Write a strategy memo** and add lessons to a shared playbook every agent reads.

Anything that spends money or publishes waits for my approval. Daily, monthly and per-cycle caps limit AI spending, and a kill switch stops everything.

## The control room

I didn't want to run it from a terminal, so I built Ultron HQ: a 16-bit throne hall that runs only on my laptop. Every agent has a station that lights up while it works. Clicking anything opens what it has done, and the approval gate is where I edit, approve or reject listings. I can also ask for changes in plain English, like "make it $2.99" or "use navy and add a notes page", and the AI rewrites the listing or redraws the printable.

<figure>
  <img src="/projects/ultron/hq-designer.webp" alt="HQ with the Designer panel open, showing a grid of generated printables: a substitute teacher checklist, a moving day planner, a homeschool attendance log and a houseplant care log." loading="lazy" />
  <figcaption>The Designer's panel: every printable it made, with the listing image it was sold with.</figcaption>
</figure>

The demo above is a read-only copy of HQ with the real data from the first live week. The buttons explain what they would do instead of doing it, and the printables themselves stay out because they're the products.

## First live week

In November 2026 I switched Ultron from free test mode to Claude and connected it to the Etsy shop.

- **The whole week cost $0.05** in AI: 25 model calls under a $1-a-day cap. Routine work ran on a small model, and judgment calls (picking niches, analysis, the memo) ran on a larger one.
- **9 niches researched** and scored on how many listings compete and how many favorites the top ones get. A houseplant care log had 13 competitors; a dog medication tracker had over 1,700.
- **7 printables designed and sent to Etsy as drafts** through the API, each after I approved it.
- **I cut 5 of the 7 prices to $1.99.** Each change went into the playbook as a lesson, so the lister's next prices start lower.

A week later I made all seven live. That cost $1.40 in Etsy fees, which Ultron books as costs like its AI spend, so its profit line reads -$1.45. The Pinterest team then wrote its first three pins to send people to them, and they're waiting at the gate for my approval. Revenue is still $0, and Ultron's own memo says the same thing I would: until there are views and sales, there's no real verdict.

## Status

In development. The listings are live and the first pins are waiting for my approval. Now the allocation loop gets real views and sales to work with. After that, I plan to move the models onto the PC I built and add teams for other ways of earning. The goal is to see how far a small team of agents can get on a tight budget, not to get rich.
