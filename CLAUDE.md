# tahaonly.github.io – working notes for Claude

Static personal site (plain HTML/CSS/JS, GitHub Pages). Owner: Taha. The full design system lives in
@DESIGN_GUIDELINE.md – **read it before creating or editing any page, text, colour, link or image.**

## Always
- Follow `DESIGN_GUIDELINE.md` for type scale, colour tokens, links, components, alt text and the accessibility checklist (WCAG 2.2 AA minimum).
- Use the user's exact wording. Do not paraphrase, add or "improve" copy; flag source/page mismatches instead.
- **Keep the guideline alive:** whenever a new convention, component or preference is decided (in any request), update
  `DESIGN_GUIDELINE.md` in the same change and add a dated line to its Changelog. If a request conflicts with the
  guideline, do what the user asks and then update the guideline to match.
- New blog → `blog-<slug>.html` from the §6.2 skeleton, placed at the top of the blog list in `index.html`.
- Run the §8 checklist (contrast, headings, alt text, 375 px overflow) before presenting work.

## Workflow (user's rules)
- Show changes locally for review first. **Commit only when asked. Push only when asked** (`git push origin main`).
- Stage files explicitly; never commit stray PDFs or `.claude/`.
- Don't hyperlink people's names inline in blog text; use footnotes.
