# YEEZY Design System

A radical-minimalist, brutalist-luxury design system modeled on **yeezy.com**. The
interface behaves like a system utility or terminal, not a store: pure white canvas,
pure black UI, one monospaced typeface, and silence as luxury.

> **Source.** This system was built from a written design & aesthetic reference for
> yeezy.com (the live storefront). No codebase or Figma file was provided — the
> reference brief is the single source of truth. If you have the production code or a
> Figma library, share it and this system can be made pixel-exact.

---

## Index / Manifest

**Root**
- `styles.css` — global entry point (import-only). Consumers link this one file.
- `readme.md` — this file.
- `SKILL.md` — Agent-Skills wrapper for use in Claude Code.

**Tokens** (`tokens/`)
- `colors.css` — monochrome scale + semantic aliases.
- `typography.css` — font family, weights, size scale, tracking.
- `spacing.css` — 8px spacing scale, radius (0), shadow (none), borders, motion.
- `fonts.css` — webfont loading (IBM Plex Mono via Google Fonts — see Substitutions).

**Components** (`components/core/`) — `window.YEEZYDesignSystem_7ca9fc.<Name>`
- `Button` · `IconButton` · `Input` · `SizeSelector` · `StatusLabel`
- `ProductTile` · `DotPagination` · `Modal` · `Checkbox` · `NavBar`

**Foundation cards** (`guidelines/`) — specimen cards for the Design System tab
(Colors, Type, Spacing, Brand).

**UI kits** (`ui_kits/`)
- `storefront/` — interactive recreation: floating product grid → product detail →
  inline single-page checkout, with the email-capture modal and density toggle.

---

## Substitutions & caveats

- **Font.** The brand uses *YZY Plex Mono* (a licensed IBM Plex Mono derivative). The
  binary is not bundled; `tokens/fonts.css` loads **IBM Plex Mono** from Google Fonts
  as a near-exact analog. Drop the real `.woff2` into `assets/fonts/` and add
  `@font-face` rules to swap it in. *(Flagged — please supply the licensed files.)*
- **Product imagery.** Real YEEZY product cutouts are not included. `ProductTile` and
  the storefront show deadpan code placeholders where the floating garment cutouts
  would sit. Supply transparent-PNG cutouts to make the grid live.

---

## Content fundamentals

How YEEZY writes (or rather, *doesn't*):

- **Anti-marketing.** Zero descriptive copy. No product titles, no descriptions, no
  taglines, no lifestyle narrative. The product stands alone.
- **Code-names, not names.** Products are alphanumeric codes only — `SL-03`, `HD-04`,
  `WP-01`, `SG-03`. Prefixes encode category (`SL` slides, `HD` hoodie, `JC` jacket,
  `TS` tee, `WP` pants, `SG` sunglasses, `FM` footwear, `BB`/`YS` accessories).
- **Prices are bare numbers.** `$100`. No "from", no "USD", no strikethroughs.
- **Status as plain text.** `ADDING`, `RESTOCKS IN 4 WEEKS`, `SOLD OUT` — stated, never
  colored or badged.
- **Casing.** Almost everything is UPPERCASE. Nav, labels, buttons, metadata.
- **Voice.** Deadpan, technical, neutral, system-like. Neither "I" nor "you" — there is
  barely any sentence at all. The closest thing to a sentence is fine-print legal
  consent ("I agree to receive emails about drops, restocks and releases.").
- **No emoji. No exclamation. No persuasion.** Restraint *is* the message: "if you
  know, you know."

---

## Visual foundations

- **Color.** Monochrome: `#FFFFFF` canvas, `#000000` UI. Greys (`#767676`…`#ededed`)
  appear *only* for hairlines and disabled states. The only chromatic color in the
  whole system comes from product photography. Primary CTAs are solid-black blocks
  with white text — the single bold element on any page.
- **Type.** One monospaced typeface everywhere (YZY/IBM Plex Mono). Small, tight,
  low-contrast sizes (10–22px). Hierarchy is built from **position and whitespace**,
  not weight or size variety. Signature wide letter-spacing on caps (0.08–0.16em).
- **Spacing.** 8px base unit used in generous multiples; products and elements
  "breathe" on seamless white. Negative space is the primary compositional tool.
- **Backgrounds.** Pure flat white. No images behind UI, no gradients, no textures, no
  patterns. Full-bleed white only.
- **Borders.** Thin (1px) monoline black hairlines. Faint grey hairlines for secondary
  dividers. Borders, not fills, define structure.
- **Corner radius.** `0` everywhere. Hard edges, no rounding, ever.
- **Shadows.** None. No drop shadows, no inner shadows, no elevation. Depth is implied
  by whitespace alone. No protection gradients, no blur scrims — modals use a near-
  opaque flat white wash, not a blur.
- **Cards.** There are essentially no cards. Products float directly on white with no
  container, border, shadow, or hover lift. Where containment is required (modal,
  checkout), it's a plain hairline rectangle, zero radius, white fill.
- **Hover.** Dim to ~40–55% opacity (links, icons) or shift the solid CTA to near-black
  (`#111`). Never a color change, never a lift, never a scale-up.
- **Press / active.** State shown by inversion (selected size = black fill) or opacity,
  not by shrink or color shift.
- **Motion.** Minimal and unshowy. Short (120–200ms) opacity and border transitions
  with a crisp ease (`cubic-bezier(0.2,0,0,1)`). No bounce, no spring, no parallax,
  no decorative loops. The one allowed "animation" is a deadpan blink on live status
  (`ADDING`).
- **Transparency / blur.** Almost never. Only the modal scrim uses translucency
  (flat white at ~85%), and even that avoids blur.
- **Imagery vibe.** When present, product images are clinical cutouts on white
  (`mix-blend-multiply` to seat them on the canvas) — neutral, deadstock/archival,
  no warm or cool grade, no grain, no styling.
- **Layout as interaction.** The grid density toggle (`+`) is itself a control: fewer/
  larger vs. more/smaller items per row. Flows are single-page (inline checkout), never
  multi-step funnels.

---

## Iconography

- **Hyper-minimal, monoline, tiny.** The entire icon vocabulary is a handful of glyphs:
  `+` (menu / add / expand), `×` (close), `‹` `›` (back / next), and a bag glyph /
  `BAG (n)` text label for the cart.
- **No icon library, no icon font, no SVG sprite.** Icons are rendered as **Unicode
  glyphs in the monospace face**, so they inherit the exact type weight and tracking of
  everything else. This is intentional — the icons *are* type.
- **No emoji, ever.** No colored or pictographic icons.
- If you need an icon the brand doesn't have, prefer a thin Unicode glyph or a 1px-stroke
  monoline SVG that matches the type weight; never introduce a filled or multicolor icon
  set. (`IconButton` is the wrapper for all of these.)

---

## Using the system

Link the global stylesheet and read components off the namespace:

```html
<link rel="stylesheet" href="styles.css" />
<script src="_ds_bundle.js"></script>
<script>
  const { Button, ProductTile, NavBar } = window.YEEZYDesignSystem_7ca9fc;
</script>
```

Each component has a `.prompt.md` next to it with a one-line "what & when" and a usage
snippet. Start from `ui_kits/storefront/` for a full working assembly.
