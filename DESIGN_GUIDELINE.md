# Design Guideline – tahaonly.github.io

The single source of truth for how text, colour, links, components and new content look and behave on this
site. **All new or edited content must follow this file.** When a new convention is decided, update this
file in the same change and add a line to the [Changelog](#changelog).

Pages: `index.html` (tabbed landing page) · `blog-*.html` (blog posts) · `ideawave.html`, `shopping.html`,
`urdu.html`, `band-baaja-baraat.html` (case studies). Static HTML/CSS/JS, no framework, no build step.
Each page carries its own `<style>`; keep the tokens below identical across pages.

---

## 1. Principles

1. **Content is the user's.** Never paraphrase, "improve" or add copy. Use the exact wording supplied. Only
   structure, styling and accessibility may be added (e.g. skip link, hidden headings, alt text).
2. **Accessible by default.** WCAG 2.2 AA is the floor; AAA contrast (≥ 7:1) is the target for text.
3. **Quiet, editorial look.** Warm off-white page, near-black text, one typeface, almost no decoration.
4. **One way to do each thing.** Reuse the components in §6 instead of inventing new styles.

---

## 2. Colour tokens

Define in `:root` on every page.

| Token | Value | Use | Contrast on `--bg` |
|---|---|---|---|
| `--bg` | `#faf9f7` | Page background | – |
| `--surface` | `#ffffff` | Cards, inputs | – |
| `--text` | `#1a1a1a` | Headings, links, emphasised text | 16.5 : 1 |
| `--muted` | `#4a4a4a` | Body paragraphs, list items | 8.4 : 1 |
| `--subtle` | `#555555` | Secondary text: dates, meta, captions, footnotes, labels | 7.1 : 1 |
| `--border` | `#e8e4dc` | Decorative dividers and card outlines **only** | 1.2 : 1 (never for text or control edges) |
| `--ctl` | `#8a8a8a` | Borders of interactive controls (filter pills, buttons) | 3.3 : 1 |
| `--tag-bg` | `#f0ede8` | Chip / hover background | – |
| `--focus` | `#1a4fd6` | Keyboard focus ring | 6.4 : 1 |

Extra rules
- Never use a text colour lighter than `--subtle` on `--bg`/`--surface`. Decorative numerals/glyphs use `#6b6b6b` (5.1 : 1).
- Status colours must pass 4.5 : 1: success `#1c7a43`, error `#c0392b`. Never convey meaning by colour alone.
- Do not add new greys. Pick the nearest token.

---

## 3. Typography

Font: **Inter** (Google Fonts, weights 300–700), `font-family: 'Inter', sans-serif`. No other typeface.
All sizes in **rem** (so browser font-size settings work). **Nothing below 0.875rem (14 px).**

| Role | Size | Weight | Line-height | Colour | Notes |
|---|---|---|---|---|---|
| Page title (case study) | `clamp(2rem, 5vw, 3rem)` | 700 | 1.15 | `--text` | 1.75 rem under 480 px |
| Blog post title | `clamp(1.75rem, 5vw, 2.5rem)` | 600 | 1.2 | `--text` | letter-spacing −0.02em, lowercase |
| Section heading (landing tabs) | `clamp(1.375rem, 3.5vw, 2rem)` | 600 | 1.1 | `--text` | −0.02em |
| Section heading (case study) | 1.25 rem | 600 | – | `--text` | `<h2 class="section-label">` |
| Item heading (h3 in lists/grids) | 1.125 rem | 500–600 | 1.3 | `--text` | card titles on index: 1.1875 rem |
| Sub-item heading (h4) | 1 – 1.0625 rem | 500 | 1.3 | `--text` | |
| Lead / tagline | 1.1875 rem | 400 | 1.7 | `--muted` | |
| **Standard body text** | **1.125 rem** | 400 | **1.8** | `--muted` | landing page paragraphs and bullet lists, honours list, case-study `.prose`, reflection box |
| Long-form reading | 1.1875 rem | 400 | 1.8 | `--muted` | blog post paragraphs only |
| Compact body (inside cards/grids) | 1 rem | 400 | 1.6 | `--muted` | descriptions in case-study cards, steps, tables |
| Secondary text | 0.9375 rem | 400 | 1.5–1.6 | `--subtle`/`--muted` | captions, meta values, dates, authors/venue, footnotes, footer links, hyperlink rows |
| Label | 0.875 rem | 500 | – | `--subtle` | UPPERCASE chips/labels with letter-spacing 0.08–0.12em, year labels, table headers |

Rules
- Lists use the same size/colour/line-height as the paragraphs around them (a list is **not** smaller than body text).
- Emphasis = `--text` + weight 500/600, never colour.
- Blog/post titles and tab labels are **lowercase**; a title that is itself a quotation is wrapped in straight quotes `"…"`.
- Footnote/superscript numbers: `sup` at `0.75em` so they stay ≥ 14 px.

---

## 4. Layout & spacing

| Page type | Content max-width | Side padding |
|---|---|---|
| Landing page (`.wrap`) | 780 px | 40 px (20 px ≤ 640 px) |
| Blog post (`.container`) | 680 px | 40 px (20 px ≤ 700 px) |
| Case study (`.container`) | 860 px | 40 px (20 px ≤ 700 px) |

- Page background `--bg`; cards `--surface` with `1px solid var(--border)` and `border-radius: 12px` (images 10–12 px).
- Vertical rhythm: paragraph gap 16–28 px (match the page type), sections 52–72 px, tab panels `padding-bottom: 80px`.
- Breakpoints: 640 px (landing), 700 px (sub-pages), 480 px (case-study grids collapse to one column).
- No horizontal scroll at 375 px width (verify after any layout change).

---

## 5. Links

**Standard hyperlink** (use for every inline link and every text-only link row):
```css
color: var(--text);                 /* or inherit inside a --text context */
text-decoration: underline;
text-decoration-color: currentColor;
text-decoration-thickness: 1px;     /* 2px on :hover */
text-underline-offset: 3px;
```
- Link text must make sense out of context. For short labels (“Paper”, “PDF”, “Video”) add
  `aria-label="Paper: <full title>"`; the visible word must stay first in the label.
- External links: `target="_blank" rel="noopener"`.
- **Never hyperlink a person's name inline in blog text** (use a footnote instead). Footnote links carry the URL.
- Whole-card/row links (project cards, blog rows, “next project”) are not underlined; they fade/lift on hover.
- Do not invent URLs. If none was supplied, leave the citation as plain text.
- `href="#"` is forbidden; use a real target (`#publications`) or a `<button>`.

**Buttons** are for actions (filter pills, display toggles), not navigation. Pill: `border: 1px solid var(--ctl)`,
radius 100 px, 0.9375 rem; active = `--text` background with `--bg` text.

---

## 6. Components

### 6.1 Landing page (`index.html`)
- Header: logo `<h1 class="header-logo">` (image, `alt="Taha"`), tagline, meta line (email · google scholar · linkedIn, all underlined links).
- Tabs: `home · cv · publications · projects · blog` (lowercase). Markup is a real tab pattern:
  `nav > div[role=tablist] > button[role=tab][aria-selected][aria-controls]`, panels `role=tabpanel` with
  `tabindex=0`, roving `tabindex`, ←/→/Home/End keys, tab stored in `location.hash`, Back/Forward supported.
  Each panel starts with a visually-hidden `<h2 class="sr-only">`.
- Skip link first in `<body>`; tab panels live inside `<main id="main" tabindex="-1">`.
- Home: portrait floated right (`210 px`, wraps text), bio paragraphs = *standard body text*, “Selected Honors & Awards” = `h3.home-subheading` + `ul.honors-list` (same style as `.home-bio-list`).
- CV: link row (“Open CV in a new tab · Download PDF”) above the titled iframe.
- Publications: grouped by year (`h3.pub-year-label`, label style). Entry = title (500, 1.125 rem), authors (`--muted`, `<strong>` for Taha, `*` joint first authors note), venue (italic `--subtle`), then a row of **standard hyperlinks** (`.pub-link`: Paper · PDF · Video…), award as `🏆` wrapped in `role="img" aria-label="Award:"`.
- Projects: filter pills (`aria-pressed`, hidden `role=status` count) + 2-column card grid; card = image (`alt=""`, because the title sits next to it) + h3 + subtitle + CTA.
- Blog list: one row per post: lowercase title left, date right as **month and year only** (`Jun 2026`), newest first. Posts not listed are fine.
- Footer: `© 2026 Taha` + real in-page links.

### 6.2 Blog post (`blog-<slug>.html`)
Skeleton: skip link → `<nav>` (logo only, aligned to content width) → `<main id="main" tabindex="-1">` →
`← Back to Blogs` (`index.html#blog`) → `.post-header` (h1 lowercase title, date as **month and year only**, e.g. `June 2026`) → `.post-body` paragraphs →
`.footnotes` → footer. Filename: `blog-<kebab-case-title>.html`. Add the post to the **top** of the blog list in `index.html` (`d Mon yyyy`).
- Optional `tldr:` lead paragraph: italic, `--subtle`, 1.0625 rem, bottom border.
- **Footnotes**: marker `<sup><a href="#fnN" id="refN" role="doc-noteref" aria-label="Footnote N">N</a></sup>` placed right after the punctuation or phrase;
  list in `<div class="footnotes" role="doc-endnotes" aria-label="Footnotes"><ol>` with `<li id="fnN" role="doc-endnote">`.
  Content pattern: `Author (year), "Title"` or `Title — Publisher`, **link on the title/source**; add
  `<a href="#refN" role="doc-backlink" aria-label="Back to reference N">↩</a>` at the end. Number in order of first appearance.
- **Poems / bilingual text** (`blog-im-loosing-the-more-im-learning.html`): `<section class="poem" aria-label="…">` of `.stanza` blocks, each holding `p.ur` (`lang="ur-Latn"`, `--text`) and `p.en` (`lang="en"`, `--muted`);
  one `<span class="ln">` per verse line (hanging indent for wrapped lines). From 961 px the section breaks out of the 680 px text column
  (max 960 px) into two stanza-aligned columns `1.2fr 1fr` with hidden-from-AT column labels in normal case (`Roman Urdu` | `English`, 0.9375 rem, `--subtle`); below 961 px each stanza stacks
  (Roman Urdu, then English with a 2 px `--border` left rule). Poem text uses *long-form reading* size (1.1875 rem/1.8). Intro prose stays standard blog paragraphs.
- Foreign-language words get `lang` (e.g. `<em lang="ur-Latn">besharam</em>`).
- Copyright: quote sparingly; the author's own words only.

### 6.3 Case study
Skeleton: skip link → nav (logo only, `alt="Taha – home"`) → `<main id="main" tabindex="-1">` → hero section (back link `← Back to Projects`,
`.project-tag-chip`, `h1.project-page-title`, tagline, `.meta-grid` Role/Duration/Tools/Methods, hero image) → sections each starting with
`<h2 class="section-label">` → “Next project” link → footer.
- Body copy = `.prose` (*standard body text*). Cards/steps/tables = *compact body* (1 rem). Captions = *secondary* (0.9375 rem).
- Decorative numerals (`01`, `1`) are `#6b6b6b`; arrows/ticks that only decorate get `aria-hidden="true"`.
- Table: header row labels, `--text`/`--muted` cells; best/worst colours from §2 status colours.

### 6.4 Navigation on sub-pages
Logo only (left aligned to content width), no menu. Back links: `index.html#projects` (case studies) and `index.html#blog` (posts).
Footer links: Projects · Blogs · About → `index.html#projects`, `#blog`, `index.html`.

---

## 7. Images & alt text

- **Every `<img>` has an `alt` attribute.** Informative images: describe what is shown and why it matters in one sentence (≈ 80–180 chars), no “image of”.
  Screens/diagrams: name the screen/artifact, the key labels or data, and any state (✓ correct / ✗ incorrect).
- If a `<figcaption>` exists, the alt describes the visual; do not copy the caption.
- Images of text: reproduce the essential text.
- Decorative images (thumbnails next to the same project title, ornaments): `alt=""`.
- Logo links: `alt="Taha – home"` (nav and footer); landing header logo is the `h1`: `alt="Taha"`.
- Always include `loading="lazy"` for below-the-fold images; the hero image on a case study stays eager with `fetchpriority="high"`.

### Image files (local, compressed)
- **All images are served locally from `images/`; never hot-link another host** (no Webflow/CDN URLs). Only linked PDFs may stay remote.
- Format **WebP** (alpha supported). Logo is `images/logo.svg`. Names are lowercase kebab-case with a page prefix:
  `ideawave-…`, `shopping-…`, `urdu-…`, `bbb-…`, `card-…` (project-card thumbnails), `portrait`.
- Every `<img>` carries `width` and `height` (the file's real pixel size) and `decoding="async"`; a global
  `:where(img[height]) { height: auto; }` keeps them responsive and prevents layout shift.
- **Size** the file to about 2× its largest rendered CSS width (2.5× on phones): minimum 800 px wide, 1200 px for text-dense
  infographics/UI screens, maximum 1600 px. Never upscale. Strip metadata and apply EXIF rotation.
- **Quality** (cwebp, `-m 6 -sharp_yuv`): photos q≈60–78, flat graphics/UI q≈70–90, line-art with fine text near-lossless or lossless.
  Accept the smallest file that is visually indistinguishable at display scale (SSIM ≥ 0.965 photos / ≥ 0.98 graphics on a 2×-downsampled
  comparison) **and check dense text at 100 % zoom**. Never ship a file larger than its original.
- Typical result: 3–15 MB of source images per page → 0.3–2 MB. Recipe for one new image:
  `cwebp -q 78 -m 6 -sharp_yuv -resize 1200 0 source.png -o images/<page>-<name>.webp` (add `-near_lossless 60` for text-heavy line art).

---

## 8. Accessibility checklist (run before every commit)

- Text contrast ≥ 4.5 : 1 (target ≥ 7 : 1); UI borders ≥ 3 : 1. Use the tokens, don't pick new colours.
- Exactly one `<h1>`; no skipped heading levels; `<main>` present with `id="main"`; skip link works.
- Links: standard hyperlink style, meaningful text/`aria-label`, no `href="#"`.
- Interactive targets ≥ 44 × 44 px (min 24 px), visible 3 px focus ring (`:focus-visible`), logical tab order, no keyboard traps.
- All sizes in rem, nothing < 14 px; page works at 200 % zoom and 375 px width without horizontal scroll.
- Every image has alt per §7 and is a local, compressed WebP with `width`/`height`; iframes have a `title`; `lang` on foreign-language fragments.
- Motion: smooth scroll and hover transforms only under `prefers-reduced-motion: no-preference`.
- Tab/filter/toggle widgets expose state (`aria-selected`, `aria-pressed`) and announce results via a status region.

How to test: open the page, Tab through it, run the contrast script (compute each text node's colour vs effective background), and check
`document.documentElement.scrollWidth <= clientWidth` at 375 px.

---

## 9. Workflow conventions

- **Review locally first.** Show changes, wait for the go-ahead.
- **Commit only when asked. Push only when asked** (`git push origin main`; remote alias `github-tahaonly`).
- Never commit stray files (e.g. the PDFs dropped into the folder, `.claude/`).
- Exact text from the source document; if a source and the page disagree, flag it — don't silently edit.
- When adding content: new blog → §6.2 + top of the blog list; new case study → §6.3 + card on the Projects tab; new publication → year group, newest first, links as standard hyperlinks.
- Commit messages: imperative summary line, short body, trailing `Co-Authored-By` line as configured.

---

## Changelog

- **2026-10-14** – Guideline created from the existing site. Standardised: body text 1.125 rem/1.8 (honours list now matches body lists), standard hyperlink style (publication “Paper/PDF/Video” changed from pill buttons to underlined links with descriptive `aria-label`s), case-study type scale and contrast brought in line with the landing page, alt-text rules and full alt text for all case-study images. Added accessibility checklist.
- **2026-10-14** – Images moved from Webflow's CDN to local `images/` as compressed WebP (37.7 MB → 3.7 MB, −90 %; per-page 0.3–2 MB). Added the image-file rules in §7 (sizing, quality tiers, `width`/`height`, naming, hero `fetchpriority`).
- **2026-10-15** – Added the poem/bilingual layout (§6.2) and the month-only date format (`October 2026` / `Oct 2026`).
- **2026-10-15** – All blog dates are now month and year only (`June 2026` on posts, `Jun 2026` in the list). Poem column labels use normal case instead of uppercase.
