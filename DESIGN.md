# AddonProp Design System

A working spec for taking this site from "2024 AI-generated template" to "2026,
Apple-grade, built by people who cared." This is a living document — update it
as the redesign lands, don't let it drift from the real code.

**Sources this is built from:**
- Apple's own HIG + the `apple-design` skill family (this machine, `~/.claude/skills/apple-design*`) — restraint doctrine, semantic color tokens, 8pt grid, bento/type-scale recipes. This *is* the "top apple-grade design skill" reference — no need to hunt GitHub separately, it's already local and more current than a static repo snapshot.
- The AI-slop checklist from the `design-review` skill's blacklist (battle-tested against real AI-generated sites).
- Live audit of addonprops.xyz, screenshotted 2026-09-27.
- Component *inspiration* (not copy-paste): 21st.dev, ui.aceternity.com — use for interaction pattern reference, rebuild with our own tokens. Never vendor someone else's CSS wholesale.

---

## 1. What's actually wrong (evidence, not vibes)

Screenshotted the live homepage. Three violations stacked in the first two
scrolls — this is the "dogfood test" failure mode the apple-design skill
warns about almost exactly:

| # | What I saw | Rule it breaks |
|---|---|---|
| 1 | Hero is a dark green→navy gradient by default | "Light is the default; dark is the exception" — apple.com's hero is light. A dark-by-default hero reads as generic dark-SaaS, not premium. |
| 2 | "Sustainable Living Revolution" headline: each line a different gradient (green→cyan→green) | "Gradient text 0–1× per page, not every heading." We're doing it on nearly *every* section heading site-wide. |
| 3 | Accent colors in one screenshot: emerald green, cyan, teal, blue — four, fighting each other | "One accent, lots of neutral." Every additional accent is a decision the user has to resolve for you. |
| 4 | Second scroll: *another* full dark section immediately after the dark hero | Dark sections should be "deliberate, occasional moments," not the page's resting state. |
| 5 | Third scroll: icon-in-colored-rounded-square + bold title + 2-line description, repeated card after card | This is **the single most recognizable AI-generated layout pattern** (design-review skill's blacklist, item #2). It's on the homepage, EcoProps, Markets — everywhere. |
| 6 | Uniform large border-radius on every card, badge, button, nav pill | "Uniform bubbly radius on everything" — no radius *hierarchy* (small controls should have tighter radii than large cards). |
| 7 | Centered badge + centered headline + centered subhead, repeated per section | Every section reads the same shape. No visual rhythm — everything shouts at the same volume. |

None of this is "bad taste" — it's the *default* output shape you get from
fast AI-assisted scaffolding, because glass+gradient+dark+centered+icon-circles
is the path of least resistance every framework starter nudges you toward.
Apple's whole identity is *withholding* that default. That's the fix.

---

## 2. Principles (condensed from `apple-design`)

Two axes, always check both before adding an effect:

- **Restraint axis** — is this decoration or meaning? If removing it loses
  nothing but prettiness, remove it.
- **Surface axis** — is this a marketing page or a utility screen (dashboard,
  form, listing)? Marketing pages get a real motion budget (this site
  currently has *zero* scroll-driven motion — that's under-animation, an
  equal and opposite failure). Utility screens (My Listings, Add Property,
  Get a Quote) get near-invisible motion — state transitions only, nothing
  ambient.

Five rules, in priority order:
1. Light is the default. Dark is ≤1 purposeful section per page, not the
   resting state.
2. One accent color. Pick emerald (`#22C55E`/`#16A34A` — closest to what's
   already half-built into the brand) OR blue, not both, and drop teal/cyan
   entirely from the palette.
3. Type + whitespace carry hierarchy. Not boxes, not glow, not gradient text.
4. Real content, not decoration. A property card should be dominated by the
   photo and the price — not an icon-in-a-circle standing in for "this is a
   property."
5. Every screen: could I delete an effect and lose nothing but decoration?
   Delete it.

---

## 3. Token system (drop-in, matches Tailwind config)

Light-first. This becomes `tailwind.config.js` `theme.extend.colors` and a
`:root` CSS variable block — pick one mechanism, don't duplicate both.

```css
:root {
  color-scheme: light;

  /* Backgrounds — the apple.com gray, not pure white everywhere */
  --bg:            #ffffff;
  --bg-secondary:  #f5f5f7;   /* section backgrounds, inset panels */
  --bg-tertiary:   #ffffff;   /* cards sitting inside a secondary panel */

  /* Text — opacity-modulated black, not separate grays */
  --text:            #1d1d1f;
  --text-secondary:  rgba(29, 29, 31, 0.62);
  --text-tertiary:   rgba(29, 29, 31, 0.36);

  /* The ONE accent. Emerald, because it's already the site's identity
     (sustainability positioning) — everything else (cyan/teal/blue) goes. */
  --accent:        #16A34A;
  --accent-hover:  #15803D;
  --accent-tint:   #ECFDF5;   /* light wash for badges/selected states */

  /* Separators */
  --separator: rgba(29, 29, 31, 0.10);

  /* Radius hierarchy — NOT one uniform value everywhere */
  --radius-control: 8px;   /* buttons, inputs, small chips */
  --radius-card:    16px;  /* property cards, feature cards */
  --radius-panel:   24px;  /* large containers, modals */
}

@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) {
    color-scheme: dark;
    --bg:            #000000;
    --bg-secondary:  #1c1c1e;
    --bg-tertiary:   #2c2c2e;
    --text:            #ffffff;
    --text-secondary:  rgba(235, 235, 245, 0.60);
    --text-tertiary:   rgba(235, 235, 245, 0.30);
    --accent:        #30D158;
    --accent-hover:  #34C759;
    --accent-tint:   rgba(48, 209, 88, 0.16);
    --separator: rgba(84, 84, 88, 0.60);
  }
}
```

**Type scale** (system font stack, not a webfont — SF isn't licensed for web,
and `-apple-system` already gives Mac/iOS users native SF for free):

```css
font-family: -apple-system, "SF Pro Display", "Inter", system-ui, sans-serif;

--text-hero:     clamp(2.5rem, 4vw + 1rem, 4rem);     /* 40 → 64px, page H1 only */
--text-title:    clamp(1.75rem, 2vw + 1rem, 2.5rem);  /* 28 → 40px, section headers */
--text-headline: clamp(1.125rem, 1vw + 0.8rem, 1.5rem); /* 18 → 24px, card titles */
--text-body:     1rem;      /* 16px, never smaller for paragraph text */
--text-caption:  0.875rem;  /* 14px, metadata only */
```

**Spacing** — 8pt grid, already documented in `apple-design-foundations`:
`4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96px`. Use these exact values, nothing
in between (no `13px`, no `22px`).

---

## 4. Component-by-component fix list

| Component | Current | Fix |
|---|---|---|
| Hero (`app/page.tsx` / `src/bases/*/pages/*.tsx`) | Dark gradient, gradient-text headline, glass search bar floating | Light `#f5f5f7` background, solid `--text` headline (one word can carry the accent color, not gradient), real property photo instead of gradient blobs |
| `StandardNavbar.tsx` | Glass pill nav — actually fine, glass belongs on chrome | Keep the glass treatment, just tone down blur intensity to match `apple-design-materials` values (`blur(20px) saturate(180%)`, not a custom heavier blur) |
| Feature cards (icon-in-circle pattern) | Dark card, gradient icon circle, centered | Light card, icon rendered small/inline next to the title (not a hero-sized circle), left-aligned text, real differentiator per card instead of interchangeable icon+2-lines |
| `LocationFilter.tsx` | Already reasonably clean (housing.com-style dropdown) | Keep the pattern, just restyle to token system — swap `bg-white/20` glass-on-dark for `--bg-tertiary` solid on the light hero |
| `PropertyForm.tsx`, `MyListings.tsx`, `QuotationRequestForm.tsx` (dashboard/utility screens) | Already light-background, already close to correct | Swap hardcoded `emerald-600` etc. for `--accent` tokens; add subtle `--radius-control` consistency on inputs |
| Buttons | Gradient-fill everywhere (`from-emerald-500 to-teal-500`) | Solid `--accent` fill, no gradient. Gradient-fill buttons are as diagnostic of AI-slop as gradient text. |
| Section rhythm | Every section: centered badge → centered headline → centered 3-col grid, same shape repeated | Vary the shape: one section left-aligned with an image, one full-width stat row, one actual bento (once, where it earns it) — see `apple-design-foundations/references/layout-grid-spacing.md` §3–4 for the real bento grid recipe (4-col base, 336px rows, zero orphans) |

---

## 5. The permanent gate (run this before shipping any UI)

Pulled from the design-review skill's blacklist — keep this list taped to
the wall:

- [ ] No purple/violet/indigo gradients, no blue-to-purple washes
- [ ] No 3-column icon-in-circle+title+2-line-description grid (rebuild as
      something with actual visual variety)
- [ ] No `text-align: center` on every heading/section — vary alignment
- [ ] No uniform giant border-radius on every element — use the 3-tier
      radius scale above
- [ ] No decorative blobs/floating circles/wavy SVG dividers
- [ ] No emoji as design elements
- [ ] No gradient-fill buttons
- [ ] Hero is light by default; dark is a deliberate, singular choice
- [ ] Exactly one accent color on screen
- [ ] Real content (photo, actual data) fills the hero, never an abstract
      gradient standing in for "the product"

If you can't check every box, it's not ready.

---

## 6. Sequencing

Don't redesign everything at once — that's how you end up with a half-migrated
site that looks worse than either version. Order:

1. **Token system first.** Land the CSS variables above. Nothing visually
   changes yet — this is plumbing.
2. **Homepage hero + nav.** Highest-traffic, highest-impact. Light hero,
   single accent, real property photography.
3. **Feature/service cards site-wide.** Kill the icon-in-circle pattern
   everywhere it appears (homepage, EcoProps, Markets, About).
4. **Buttons + forms globally.** Mechanical find-replace once tokens exist.
5. **Marketing motion pass.** Once the static redesign is right, add the
   scroll-driven motion a flagship page needs (see `apple-design-motion` +
   `apple-design-web` — this is intentionally *last*, motion on a wrong
   layout just animates the wrong thing).

Utility screens (dashboard, forms) mostly just need token swaps — they were
never gradient-heavy to begin with. Marketing pages are the real work.
