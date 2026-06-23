# Vlad Rosioru — Personal Website

Standard static website. No build step — open `index.html` in any browser or
serve the folder with any static host.

Deployed at https://vladrosioru.github.io/ — files live at the repository
root so GitHub Pages serves them at the domain root.

## Structure

```
├── index.html              Markup + SEO/OG/Twitter meta + JSON-LD structured data
├── css/
│   └── styles.css          All styles
├── js/
│   └── main.js             Scroll reveal, accordion, nav, contact form
├── images/
│   └── vlad-rosioru.jpg    Portrait (optimized) used in hero
├── assets/
│   └── Vlad_Rosioru_Resume.pdf
├── og-image.png            1200×630 social share card (Open Graph / Twitter)
├── robots.txt              Allows search + AI/answer-engine crawlers; links sitemap
└── sitemap.xml             Single-URL sitemap
```

## SEO / GEO notes

- All page content is server-rendered HTML (crawlable without JavaScript).
- `index.html` `<head>` holds the description, Open Graph, Twitter Card, canonical,
  and a `ProfilePage` + `Person` JSON-LD block for Google rich results and AI
  answer engines.
- Absolute URLs in the meta/JSON-LD assume the `https://vladrosioru.github.io/`
  root. If the domain changes, update those URLs, `robots.txt`, and `sitemap.xml`.
- After deploying, submit the URL to Google Search Console + Bing Webmaster Tools
  and re-validate with Google's Rich Results Test.

## Adding more images / artifacts

1. Drop the file into `images/` (photos) or `assets/` (PDFs, docs, etc.).
2. Reference it with a relative path, e.g. `<img src="images/talk-2025.jpg" alt="...">`.
3. Until you have the real asset, use the placeholder block:

   ```html
   <div class="img-placeholder" style="aspect-ratio:16/9">Drop image here</div>
   ```

   Swap it for an `<img>` when ready.
