---
title: Go AI you can play
summary: Play 5×5 Go against five agents, from random moves to Monte Carlo tree search guided by a neural network I trained, and watch the search think in real time.
category: ai
status: Live demo
role: Solo
timeline: Spring 2026 – present
stack: [TypeScript, Monte Carlo tree search, Neural network, Web Workers, Vite]
origin: Started as my CSCI 0410 (Artificial Intelligence) final project at Brown, then rebuilt from scratch in TypeScript so it runs in any browser.
featured: true
wide: true
order: 4
coverLabel: Go board demo
cover: /projects/go-ai.webp
coverAlt: A 5×5 Go board mid-game, with green and orange circles showing how many simulated games the AI ran through each possible move.
links:
  demo: https://rowestoli-go-ai.netlify.app
  repo: https://github.com/rowestoli/go-ai
---

## The problem

Go has too many possible moves for brute-force search to look far ahead, and simple scoring rules like "count the stones" say little about who's actually winning. I wanted an agent that plays well within one second per move, and a way for anyone to see how it decides.

## What I built

- **A Go rules engine** covering captures, suicide, ko and area scoring, with unit tests.
- **Five opponents** that retrace the project: random, greedy, alpha-beta search, Monte Carlo tree search, and a final agent.
- **The final agent** adds an opening book, a lower exploration constant, and my trained value network to judge games that run long.
- **A live view of the search.** While the AI thinks, a heat map shows how many simulated games went through each move, with each move's win rate.

## Key decisions

- **Run everything in the browser.** The network is small (55 inputs, two hidden layers), so I exported its weights and wrote the forward pass in TypeScript. No server, no cold starts.
- **Search in a background thread.** A Web Worker runs the search and streams progress, so the board stays responsive.
- **Use the network once per rollout, not every move.** Guiding every rollout move with the network made the agent weaker because it ran far fewer simulations. Judging only the cutoff position kept the speed.

## Results

| Match (10 games) | Result |
| --- | --- |
| Monte Carlo vs Greedy | 10–0 |
| Monte Carlo vs Alpha-beta | 10–0 |
| Final agent vs Monte Carlo | 7–3 |

The search runs about 18,000 simulated games per second in a laptop browser.
