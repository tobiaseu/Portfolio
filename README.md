# Tobia Seu — Portfolio

Personal portfolio: a 3D sphere of projects, scroll choreography and project pages.
Single-file site (`index.html`) built with HTML, CSS, JavaScript and [GSAP](https://gsap.com/) (self-hosted in `js/`).

## Structure

- `index.html` — the whole site
- `img/` — project photos (`<id>-cover.jpg`, `<id>-1.jpg` …) and portrait (`tobia.jpg`)
- `img/web/` — WebP versions: covers and portrait (sphere, carousel, grids) and full-size project photos (project pages); regenerate when a photo changes
- `img/web/s/` — small WebP photos for the 3-photo loop on the sphere cards (`loop` field of each project: overview, detail, particular)
- `fonts/` — self-hosted fonts; `fonts/fonts.css` is the only place to change the typeface (Archivo now, slot ready for Akzidenz-Grotesk)
- `cv/` — CV in PDF

## Project pages

Every project uses the same template (`openProject` in `index.html`): one horizontal strip driven by the vertical scroll, with the name, large photos (`gal` + `sec` images) alternating with text rows, and the next project at the end.

## Run locally

Serve the folder with any static server (e.g. `python3 -m http.server`) and open it in a browser.

## Status

First draft. Projects 6–14 are placeholders; `video/teaser.mp4` is still missing.
