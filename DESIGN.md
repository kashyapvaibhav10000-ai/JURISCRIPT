# JuriScript Design System

Extracted from Stitch project `239468312186112370` — 1 screen: "Manufacturer Guide - Mobile Optimized".

---

## Color Tokens

| Token | Hex | Semantic Use |
|-------|-----|-------------|
| `primary` | `#1B365D` | Brand navy, headings, nav active, icons |
| `primary-container` | `#1B365D` | Decision tree section bg |
| `on-primary-container` | `#87a0cd` | Muted text on primary bg |
| `secondary` | `#008080` | Teal accent, badges, icons |
| `secondary-container` | `#90efef` | Light teal fills |
| `on-secondary` | `#ffffff` | Text on secondary |
| `background` / `surface` | `#faf9fd` | Page bg |
| `surface-bright` | `#faf9fd` | Bright surface |
| `surface-container-low` | `#f4f3f7` | |
| `surface-container` | `#efedf1` | |
| `surface-container-high` | `#e9e7eb` | |
| `surface-container-highest` | `#e3e2e6` | |
| `surface-dim` | `#dad9dd` | |
| `on-surface` | `#1a1b1e` | Primary body text |
| `on-surface-variant` | `#44474e` | Secondary body text |
| `outline` | `#74777f` | Borders |
| `outline-variant` | `#c4c6cf` | Subtle borders |
| `error` | `#ba1a1a` | Alert banner bg, critical badges |
| `error-container` | `#ffdad6` | Error tint |
| `on-error` | `#ffffff` | Text on error |
| `tertiary` | `#4b0004` | |
| `tertiary-container` | `#73000b` | |
| `on-tertiary-container` | `#ff736b` | |
| `inverse-surface` | `#2f3033` | |
| `inverse-on-surface` | `#f1f0f4` | |
| `inverse-primary` | `#aec7f7` | |
| `surface-tint` | `#465f88` | |

---

## Typography

| Token | Family | Size | Line Height | Weight | Letter Spacing |
|-------|--------|------|-------------|--------|----------------|
| `h1` | Inter | 28px | 1.2 | 700 | -0.01em |
| `h2` | Inter | 24px | 1.3 | 600 | — |
| `body-md` | Inter | 15px | 1.5 | 400 | — |
| `label-sm` | Inter | 11px | 1 | 600 | 0.05em |
| `citation-lg` | Newsreader | 18px | 1.5 | 500 | — |

Font families: **Inter** (sans-serif, weights 400–900), **Newsreader** (serif, italic + regular, weights 400–600).

---

## Spacing Scale

| Token | Value |
|-------|-------|
| `unit` | 4px |
| `stack-sm` | 8px |
| `stack-md` | 24px |
| `stack-lg` | 40px |
| `gutter` | 24px |
| `margin` | 20px |
| `container-max` | 1280px |

---

## Border Radius

| Token | Value |
|-------|-------|
| `DEFAULT` | 0.125rem (2px) |
| `lg` | 0.25rem (4px) |
| `xl` | 0.5rem (8px) |
| `full` | 0.75rem (12px) |

---

## Box Shadows

- Cards: `shadow-sm` (Tailwind default)
- Bottom nav: `shadow-[0_-4px_20px_0_rgba(0,0,0,0.05)]`

---

## Component Patterns

### Alert Banner
- Sticky, top-0, z-60
- bg: `#ba1a1a` (error), text: white
- Contains warning icon + uppercase label-sm text

### Top Navigation Bar
- Sticky, 56px height, white bg, border-bottom slate-200
- Left: brand wordmark (Inter Black, primary, tracking-tighter) + "System Active" teal badge
- Right: search + menu icon buttons (primary color, 20px icons)

### Compliance Requirement Card
- White bg, border slate-200, padding 20px, border-radius DEFAULT, shadow-sm
- Top row: teal icon circle (40px) + large muted number
- Body: h3 (18px Inter 600, primary) + body-md text (on-surface-variant)
- Footer: priority badge (error/secondary tint + text) + CTA text button with chevron

### Decision Tree Section
- bg: primary `#1B365D`, border-radius xl, padding 24px
- White h2, muted subtitle
- Row items: white/10 backdrop blur card with icon + text + chevron
- CTA: full-width secondary teal button

### CTA Button (Full-width, secondary)
- bg: `#008080`, text: white, py-3.5, rounded, font-bold, active:scale-95

### CTA Button (Full-width, ghost)
- bg: slate-100, text: primary, py-4, uppercase, tracking-widest, active:bg-slate-200

### Bottom Navigation Bar
- Fixed bottom, 64px height, white bg, border-top slate-200
- 4 items: Home, Topic Map, Role Guides (active = primary filled icon), Penalty
- Inactive: slate-400, active: primary
- Icon + 10px label

---

## Icon Library
Material Symbols Outlined (`font-variation-settings: 'FILL' 0/1, 'wght' 400`)

Used: `warning`, `search`, `menu`, `verified_user`, `fact_check`, `biotech`, `refresh`, `coronavirus`, `chevron_right`, `home`, `account_tree`, `assignment_ind`, `gavel`, `arrow_back`, `arrow_forward`, `info`, `notifications`, `notifications_active`, `filter_list`, `format_list_bulleted`, `medical_services`, `security`, `money_off`, `eco`, `public`, `explore`, `factory`, `storefront`, `local_shipping`, `verified`, `more_horiz`, `shield`, `manage_search`, `check_circle`, `format_quote`, `import_export`, `medication`, `precision_manufacturing`, `lab_profile`, `lock`, `shield_with_heart`, `policy`, `badge`, `inventory_2`, `inventory`, `description`, `autorenew`, `block`, `download`, `account_circle`

---

## Additional Component Patterns (from remaining screens)

### Disclaimer Banner (amber / warning variant)
- bg: `#ffdad6` (error-container) or amber-50 for softer warnings
- Border bottom: `[#ba1a1a]/20` or `amber-200`
- Icon: `warning` (Material) in `[#ba1a1a]` or amber-600
- Text: `[11px]` medium weight

### Desktop Top Navigation
- `max-w-[1280px] mx-auto px-8` container
- Height: `h-16`
- Nav links: `text-[12px] font-semibold tracking-wider`
- Active link: `border-b-2 border-[#1B365D] pb-0.5`

### Stats Bar (desktop)
- Light bg (`[#1B365D]/5`), border-bottom
- Flex row with separator dividers
- Verified icon + count labels in `text-[12px] font-semibold text-[#1B365D]`

### Role Card (desktop grid, 3-col)
- White bg, border slate-200, rounded-xl, p-6
- Icon in `w-12 h-12 rounded-xl bg-[#1B365D]/10`
- Requirements list with filled `verified` icon in `[#008080]`
- Full-width CTA button: `bg-[#1B365D]` navy

### Hero Section (desktop dark)
- `bg-[#1B365D]`, full-width, py-16 px-8
- Label: `text-[#aec7f7]` uppercase tracking-widest
- H1: font-black, 52px, `tracking-[-0.02em]`
- Accent text: `text-[#90efef]`

### Penalty / Offence Card (mobile)
- Status badge row (critical = `bg-[#ba1a1a]`, statutory = `bg-[#1B365D]`, amended = amber, repealed = slate)
- Section reference bold navy next to badge
- Two sub-sections: "First Conviction" / "Subsequent Conviction" on `bg-slate-50` tiles

### Category Filter Pills
- Horizontal scroll, `shrink-0 px-3 py-1.5 rounded-full text-[11px] font-semibold border`
- Active: `bg-[#1B365D] text-white border-[#1B365D]`
- Inactive: `bg-white text-[#44474e] border-slate-200`

### Citation Quote Block
- `border-l-4 border-[#1B365D]` left accent on slate-50 bg
- `format_quote` icon in navy above italic quote text
- Citation ref: `text-[10px] font-bold uppercase tracking-wider text-[#1B365D]`

### Compliance Role Status Badges
- Active/Valid: `bg-[#008080] text-white`
- Pending Review: `bg-amber-100 text-amber-800 border border-amber-300`
- Repealed/Critical: `bg-[#ba1a1a]/10 text-[#ba1a1a] border border-[#ba1a1a]/20`

### Dashboard Info Bar (dark slim strip)
- `bg-[#1B365D]`, py-3, two-column flex between
- `text-[#aec7f7]` label + white value

### Footer (desktop dark)
- `bg-[#1B365D]`, pt-12 pb-6
- 4-column grid: brand + 3 link columns
- Column labels: `text-[10px] font-semibold uppercase tracking-wider text-[#aec7f7]`
- Links: `text-[13px] text-white/70 hover:text-white`
- Bottom row: border-top `white/10`, copyright left, secondary links right

### Citation Finder (dark panel)
- `bg-[#1B365D]` rounded-2xl, centered or inline layout
- Input: `bg-white/10 border border-white/20 text-white placeholder-white/40`
- CTA: `bg-[#008080]` teal button
