---
title: Designing with users
summary: Four projects from Interactive Design. I redesigned a local shooting club's website, helped design an AI writing assistant for a startup, studied a crowded dining hall dish line, and made dropdown menus work with a keyboard.
category: design
status: Case study
role: Designer and researcher
timeline: Spring 2025
stack: [User research, Usability testing, Accessibility, Wireframing, Figma, HTML, CSS]
origin: From CSCI 1300 (Interactive Design) at Brown.
wide: true
order: 9
coverLabel: Sketch to wireframe to style guide
cover: /projects/design-process.webp
coverAlt: A hand sketch of an AI writing assistant in Microsoft Word, the wireframe it became, and the style guide for the final design.
coverFit: contain
links: {}
---

## The problem

Product decisions start with understanding how people actually use something, so I practiced the full loop: watch people, find where they struggle, sketch, test and build. These four projects each lean on a different part of that loop.

## Birds Landing: a responsive redesign

Birds Landing is a hunting and clay shooting club in Northern California. Its website was hard to use: the menus were unreadable on desktop, the page never pointed people to booking, and every page had a different layout. This one was my project from start to finish.

<figure>
  <img src="/projects/design/birds-before.webp" alt="The original Birds Landing home page: a small logo, a faded orange banner and a lone photo of the clubhouse." loading="lazy" />
  <figcaption>Before: no clear next step, low contrast and a layout that broke on phones.</figcaption>
</figure>

<figure>
  <img src="/projects/design/birds-after.webp" alt="The redesigned home page: a clean header with the club's address and hours, a solid orange navigation bar and a Reserve button over a map of the grounds." loading="lazy" />
  <figcaption>After: booking is the first thing you see, and the navigation reads at every size.</figcaption>
</figure>

- **Found the problems first.** I sorted issues into efficiency, learnability and memorability, then ran the site through the WebAIM WAVE accessibility checker. It flagged low color contrast, missing image descriptions, no heading structure, unlabeled form fields, no skip link for screen readers and touch targets too small for phones.
- **Kept the brand, fixed the basics.** I kept the club's green and orange and its typeface so regulars would still recognize it, and raised contrast to meet the WCAG AA standard.
- **Put booking first.** Hours and a Reserve button lead every page, because that's what most visitors come for.
- **Built it, not just mocked it.** I coded it in HTML and CSS with Flexbox, breakpoints at 480, 767, 1024 and 1920 pixels, semantic markup and a hamburger menu on phones.

<figure>
  <img src="/projects/design/birds-styleguide.webp" alt="Style guide with the orange and green palette, the two typefaces, button states and the club's logos." loading="lazy" />
  <figcaption>The style guide that kept every page consistent.</figcaption>
</figure>

<figure>
  <img src="/projects/design/birds-mocks.webp" alt="The redesign at phone, tablet and laptop widths, each showing the Reserve button and opening hours near the top." loading="lazy" />
  <figcaption>Phone (375 px), tablet (768 px) and desktop (1024 px and up).</figcaption>
</figure>

## TamLabs: an AI writing assistant for Microsoft Word

TamLabs is a startup building an AI copilot that lives inside Word. Working on a team of four, we took their question: how do you add AI suggestions to someone's writing without breaking the flow of a tool they already know?

- **Sketched separately, then merged.** Each of us sketched our own take. Mine focused on onboarding: signing in with Microsoft 365 and choosing a writing tone before the assistant ever makes a suggestion.
- **Wireframed the best ideas together.** We combined them into three screens in Balsamiq (sign-in, settings and the copilot panel beside the document), took critique, then built a clickable high-fidelity prototype in Figma.
- **Planned the usability test around real tasks.** Seven tasks, from "change every 'clients' to 'customers'" to "undo an edit you didn't like," each paired with what to measure: completion, accuracy and whether people would trust the edit in a real document.

<figure>
  <img src="/projects/design/tamlabs-sketches.webp" alt="Three hand sketches: a welcome screen with login and sign-up buttons, a Connect your Microsoft 365 screen, and the assistant panel beside a document." loading="lazy" />
  <figcaption>My sketches: sign-in, Microsoft 365 connection and the assistant panel.</figcaption>
</figure>

<figure>
  <img src="/projects/design/tamlabs-wireframes.webp" alt="Three grayscale wireframes for login, the copilot panel next to an example document, and settings." loading="lazy" />
  <figcaption>The team's merged wireframes.</figcaption>
</figure>

## The dining hall dish line: research before design

Brown's main dining hall has students drop their dishes along one long, ordered line of bins. It works when the hall is quiet and falls apart in the noon rush. Before proposing anything, my group watched it in use and interviewed students.

- **What we saw:** people skip the order, rush cups and silverware into the wrong bins, and cut to any open slot when the line backs up.
- **What people told us:** the compost bin is obvious, but plates, bowls, cups and "trash or compost?" all mean stopping to read signs. Everyone wanted a more open layout, clearer signs, or a conveyor belt like the other dining hall has.
- **Who it fails:** three personas captured the range, from a student racing to class to one with time to spare. A storyboard followed the rushed student through every misstep.

<figure>
  <img src="/projects/design/dishline-model.webp" alt="Annotated diagram of the dish line, from trash and recycling bins through compost to the plate and cup drop." loading="lazy" />
  <figcaption>The line as students meet it, annotated with what goes wrong where.</figcaption>
</figure>

<figure>
  <img src="/projects/design/dishline-storyboard.webp" alt="Eight-panel hand-drawn storyboard of a student rushing through the dish line, cutting the queue and spilling a cup." loading="lazy" />
  <figcaption>Storyboard: five minutes until class, and a line in the way.</figcaption>
</figure>

## Dropdown menus that work with a keyboard

I compared the dropdown menus on Amazon, Spotify and Brown's course catalog, then mapped how each behaves for mouse users and keyboard users. Amazon's account menu opens when you hover, but pressing Enter on it jumps to a separate page, so keyboard users never get the menu at all. My revision opens the menu in place, highlights it on hover without opening it, and closes it with Escape.

<figure>
  <img src="/projects/design/dropdown-states.webp" alt="Four state diagrams comparing how the menu moves between default, hover or focus, and open, for mouse and keyboard users, before and after the revision." loading="lazy" />
  <figcaption>State models for mouse and keyboard users, before and after.</figcaption>
</figure>

## What I took from it

Watching people use something beats asking them about it, and the best fixes were often small: a clearer label, a button in the right place, a menu that opens where you expect.
