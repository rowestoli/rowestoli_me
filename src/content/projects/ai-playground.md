---
title: AI playground
summary: Watch four searches race through a maze, A* weigh heuristics on a sliding puzzle, a SAT solver crack Sudoku, and an agent learn blackjack from scratch.
category: ai
status: Live demo
role: Solo
timeline: Spring 2026 – present
stack: [TypeScript, Web Workers, Canvas, Vite]
origin: Started as CSCI 0410 (Foundations of AI and Machine Learning) coursework at Brown, then rebuilt to run in the browser.
order: 8
coverLabel: Maze search race
cover: /projects/ai-playground.webp
coverAlt: Breadth-first, depth-first, greedy and A* search side by side on the same maze, each showing the cells it checked and the path it found.
coverFit: contain
links:
  demo: https://rowestoli-ai-playground.netlify.app
  repo: https://github.com/rowestoli/ai-playground
---

## The problem

The course assignments printed numbers to a terminal: states expanded, path length, win rate. Those numbers are the whole point of each algorithm, but nobody looks at a terminal. I wanted the trade-offs to be something you can see in a few seconds.

## What I built

- **Maze search.** Breadth-first, depth-first, greedy best-first and A* race on the same generated maze, each shading the cells it checks.
- **Sliding puzzle.** A* solves the 8- and 15-puzzle with four heuristics side by side, including the deliberately inadmissible one I designed for the course, with a replay of each solution.
- **SAT solving.** N-Queens and Sudoku are written as thousands of logic clauses and solved live by WalkSAT or GSAT, with a noise slider and a chart of broken rules over time.
- **Blackjack learning.** Value iteration solves the game exactly, and Q-learning learns it from simulated hands while its strategy table fills in next to the exact one.

## Key decisions

- **Pick a maze that shows every trade-off.** In a maze without loops every search finds the same path, so the demo adds loops and opens on a maze where each algorithm's strength and weakness is visible at once.
- **Compute win rates exactly.** With an infinite deck, any strategy's odds can be calculated over every starting deal, so the learning curve shows real progress instead of sampling noise.
- **Simplify before searching.** Filling in forced Sudoku digits before the local search solves everyday puzzles outright and shrinks hard ones to a sixth of their size.
- **Keep the page responsive.** The puzzle solver runs in a Web Worker, and the animations work in time-boxed slices of each frame.

## Results

| Demo | Result |
| --- | --- |
| Maze | A* checks 131 cells for the shortest 54-step path; breadth-first checks 603 for the same path |
| Puzzle | Manhattan distance finds the optimal 18 moves after 361 states, against 29,829 with no heuristic; my heuristic needs 63 states but 20 moves |
| SAT | A famously hard Sudoku goes from 12,009 clauses to 2,080 before WalkSAT starts |
| Blackjack | The exact strategy wins 42.9% of hands against 38.1% for always standing; Q-learning reaches 42.8% |
