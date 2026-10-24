# Tobia Seu — Portfolio

Personal portfolio: a 3D sphere of projects, scroll choreography and project pages.
Single-file site (`index.html`) built with HTML, CSS, JavaScript and [GSAP](https://gsap.com/) (self-hosted in `js/`).

## Structure

- `index.html` — the whole site
- `img/` — project photos (`<id>-cover.jpg`, `<id>-1.jpg` …) and portrait (`tobia.jpg`)
- `img/web/` — resized WebP covers and portrait used by the sphere, carousel and grids (regenerate when a cover changes)
- `fonts/` — self-hosted fonts; `fonts/fonts.css` is the only place to change the typeface (Archivo now, slot ready for Akzidenz-Grotesk)
- `cv/` — CV in PDF

## Run locally

Serve the folder with any static server (e.g. `python3 -m http.server`) and open it in a browser.

## Status

First draft. Projects 6–14 are placeholders; `video/teaser.mp4` is still missing.
