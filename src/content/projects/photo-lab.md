---
title: Photo lab
summary: Color from 1910 glass plates, HDR from a handheld phone bracket, and seamless photo blending, all computed live in the browser.
category: web
status: Live demo
role: Solo
timeline: Fall 2025 – present
stack: [TypeScript, Web Workers, Vite, Python, NumPy]
origin: Started as CSCI 1290 (Computational Photography) coursework at Brown, then rewritten to run in the browser.
order: 7
coverLabel: Before and after image pair
cover: /projects/photo-lab.webp
coverAlt: A 1911 Prokudin-Gorskii portrait of the Emir of Bukhara, with the colors smeared on the left and aligned on the right.
coverFit: cover
links:
  demo: https://rowestoli-photo-lab.netlify.app
  repo: https://github.com/rowestoli/photo-lab
---

## The problem

My course versions of these projects ran in Python notebooks, so the only way to show them was a folder of output images. That proves the code ran once, not that it works. I wanted anyone to be able to try the algorithms on real photos and see them hold up.

## What I built

- **Color plate alignment.** Splits a scanned glass plate into its blue, green and red negatives and finds each channel's shift with a coarse-to-fine search, on ten plates from the Library of Congress.
- **HDR from a handheld bracket.** Six phone exposures, 1/25 s to 1/10,000 s, aligned, merged into one radiance map and tone-mapped back to a screen, with sliders for exposure, saturation, contrast and detail.
- **Seamless blending.** Drag an object around a new background and the Poisson equation is solved again as you move, with paste, Poisson and mixed-gradient modes side by side.
- **All of it in TypeScript with no image libraries**, running in a Web Worker so the page stays responsive.

## Key decisions

- **Match on edges, not brightness.** Comparing raw pixel values puts the red channel of the emir plate about 40 px off, because his robe is bright through one filter and dark through another. Comparing edges aligns all ten plates. The demo lets you switch between the two and watch it fail.
- **Handle a handheld camera.** The course assumed a tripod. My frames moved up to 26 px, so they are aligned first with median threshold bitmaps, which work across very different exposures.
- **Make the slow parts fast enough to touch.** The local tone mapper uses a bilateral grid instead of a direct bilateral filter, and blending uses conjugate gradients without ever building the matrix, so both keep up with sliders and dragging.
- **Show heavy projects honestly.** Panoramas and optical flow depend on SIFT features and GPU shaders, so they appear as results from the course pipeline instead of pretending to run live.

## Results

| Technique | Result |
| --- | --- |
| Plate alignment | 10 of 10 plates aligned matching on edges, 9 of 10 matching on brightness |
| HDR | About 13 stops of light captured from six handheld frames |
| Blending | The jet solves for 40,800 unknown pixels in 332 iterations, fast enough to re-solve while dragging |
| Tests | Each algorithm recovers known answers on synthetic images: shifts, a gamma curve, radiance ratios |
