# rowestoli_me

My portfolio site: apps I've shipped, systems I'm building, class projects rebuilt as my own, and a personal page.

Built with [Astro](https://astro.build). Static output, deployed on Netlify.

## Run it

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # production build into dist/
npm run preview    # serve the build locally
```

## Where things live

| What | Where |
| --- | --- |
| Project write-ups (one Markdown file each) | `src/content/projects/` |
| Project fields (status, stack, links…) | `src/content.config.ts` |
| Name, email, links, experience | `src/data/site.ts` |
| Pages | `src/pages/` (`index`, `work/`, `work/[slug]`, `personal`) |
| Pixel duck art | `src/components/PixelDuck.astro` |
| Duck eye tracking, blinking, quacks | `src/scripts/duck.ts` |
| Project cards | `src/components/ProjectCard.astro` |
| Filters, card tilt and highlight, photo viewer | `src/scripts/interactions.ts` |
| Colors and type | `src/styles/global.css` |

## Adding a project

Create `src/content/projects/my-project.md` with the same front matter as the others. It shows up on `/work` and gets its own page at `/work/my-project` automatically. Set `featured: true` to put it on the home page, and `wide: true` to make its card span two columns.

## Replacing placeholders

Every light gray box with a label is a `<Placeholder label="…">`. Put images in `public/photos/` and swap the placeholder for an `<img src="/photos/…" alt="…" />` (or Astro's `<Image />` for automatic resizing).

Before going live:

- [ ] Set the public email in `src/data/site.ts`
- [ ] Confirm Okta dates in `src/data/site.ts`
- [ ] Add the App Store link in `src/content/projects/quacklog.md`
- [ ] Add an `og:image` for link previews
- [ ] Update `site` in `astro.config.mjs` once the domain is bought

## Accessibility

The duck and all motion respect the system "Reduce motion" setting. The duck is keyboard-focusable (Enter to quack), and the hover preview only appears on devices with a mouse.
