---
title: Redline Viewer
summary: An interactive map of the 1930s redlining maps for 202 U.S. cities. Explore every graded neighborhood and search 7,000+ surveyors' notes for the words they used to justify each grade.
category: web
status: Live demo
role: Solo rebuild (first version built with a partner)
timeline: Fall 2024 – present
stack: [TypeScript, MapLibre GL, Python, GeoJSON, Netlify]
origin: Started as a CSCI 0320 (Introduction to Software Engineering) project at Brown with a Java backend, then rebuilt as a serverless web app.
order: 5
coverLabel: Map screenshot
cover: /projects/redline-viewer.webp
coverAlt: Chicago's 1930s HOLC map over a dark street map, with neighborhoods shaded green, blue, yellow and red by grade.
coverFit: cover
links:
  demo: https://rowestoli-redline-viewer.netlify.app
  repo: https://github.com/rowestoli/redline-viewer
---

## The problem

In the late 1930s, the federal Home Owners' Loan Corporation graded neighborhoods in 202 cities from A to D for lending risk, and race was an explicit factor. The maps and the surveyors' notes behind them are public, but they're hard to explore: 8,871 neighborhoods, 18 MB of shapes, and thousands of pages of notes.

## What I built

- **A national overview** where each city is sized by its number of graded areas and colored by the share graded D.
- **Neighborhoods that load as you explore.** Zoom into any city and its polygons stream in.
- **Full-text search** across 7,470 surveyors' notes. Matching areas are outlined on the map and everything else dims, so patterns show up at a glance.
- **Area details** with the grade, label and the original notes, plus grade filters, opacity, shareable city links and pins saved in your browser.

## Key decisions

- **No server.** The first version used a Java backend and Firebase. I replaced both with a Python pipeline that splits the dataset into one small file per city. Chicago, the largest, is about 50 KB compressed.
- **Load data only when it's needed.** The 1.4 MB search index loads on your first search, not on page load.
- **Show the notes as written.** The surveyors' racist language is the historical record of how grades were assigned, so the app quotes it with a short note rather than hiding it.

## Results

| Measure | Value |
| --- | --- |
| Cities | 202 |
| Graded neighborhoods | 8,871 |
| Areas that mention "infiltration" | 372 in 58 cities |
| Hosting cost | $0 |

Data: Mapping Inequality, University of Richmond Digital Scholarship Lab (CC BY-NC-SA 4.0).
