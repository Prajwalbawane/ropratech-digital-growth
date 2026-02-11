

## Premium Royal Brand Identity Overhaul

A comprehensive redesign to transform the current website into a premium, production-ready experience with a unified "Royal" design system -- deep navy, gold accents, refined typography, and polished micro-interactions.

---

### 1. Royal Color System

Replace the current blue/orange palette with a sophisticated royal palette:

- **Primary**: Deep Royal Navy (230, 65%, 22%) -- authoritative, trustworthy
- **Secondary/Accent**: Warm Gold (42, 85%, 55%) -- premium, elegant
- **Background**: Off-white with warm undertone for light mode; deep navy-charcoal for dark
- **Gradient**: Navy-to-deep-blue with gold highlights instead of generic blue-purple
- **Cards**: Subtle warm white with refined borders
- **Section Alt**: Very light gold-tinted background for alternating sections

Update CSS variables in `src/index.css` for both light and dark modes.

---

### 2. Typography Refinement

- Keep **Inter** for headings and **Space Grotesk** for body (swap roles -- Inter is more authoritative for headings)
- Tighten letter-spacing on headings for a sharper look
- Add font-weight `900` (Black) for hero headlines
- Standardize heading sizes across all pages: H1 (hero) > H2 (section) > H3 (card) > H4 (sub)

---

### 3. Unified Component Design Tokens

Create consistent visual rules applied everywhere:

- **Border Radius**: `1rem` (16px) for cards, `0.75rem` for inputs/buttons, `full` for pills/badges
- **Shadows**: Three tiers -- `shadow-sm` (cards at rest), `shadow-md` (hover), `shadow-xl` (CTAs/elevated)
- **Border**: Consistent 1px with subtle gold tint on hover
- **Button Styles**: Rounded-xl (not full), consistent padding, gold gradient for primary CTA, outline with gold border for secondary
- **Card Pattern**: White bg, subtle border, soft shadow, 24px padding, hover lift with gold-tinted shadow

---

### 4. Page-by-Page Enhancements

#### Navbar (`Navbar.tsx`)
- Add subtle bottom border with gold accent line
- Logo area gets slight padding refinement
- Active nav link gets a gold underline indicator instead of bg-accent
- CTA buttons use the new royal gold style

#### Hero Section (`Index.tsx`)
- Replace floating orbs with a subtle geometric pattern or refined radial gradient
- "Online" highlight text uses gold gradient instead of secondary/yellow
- Stats cards get a refined glass style with gold border accent
- Badge pill uses gold accent

#### Service Cards (`Index.tsx`, `Services.tsx`)
- Unified card style: white bg, soft border, consistent 24px padding
- Icon containers use a subtle navy-to-gold gradient
- Price text in gold color
- Hover: card lifts with gold-tinted shadow

#### Why Choose Us Section
- Cards with left gold accent bar instead of gradient icon bg
- Cleaner layout with more whitespace

#### Portfolio Section
- Gradient overlays use navy-to-gold tones
- Category labels in gold

#### Testimonials Section
- Dark section uses deep navy (not generic hero-gradient)
- Star ratings in gold
- Avatar rings in gold

#### Payment Section
- Refined icon cards with consistent sizing
- Gold checkmarks

#### Contact Section & Page
- Form inputs with refined focus states (gold ring)
- Contact cards with gold icon backgrounds
- CTA button with gold gradient

#### About Page
- Same royal treatment for hero, mission cards
- Gold accents on icons and highlights

#### Footer
- Deep navy background
- Gold accent on "Ro" in RoPratech
- Subtle gold divider line
- Social icons with gold hover

#### WhatsApp FAB
- Keep green but add a subtle gold ring/border for brand consistency

---

### 5. Micro-Interactions

- Cards: `translateY(-6px)` on hover with `box-shadow` transition using gold tint
- Buttons: Subtle scale (1.02) on hover for primary CTAs
- Section headings: Clean fade-in-up (keep existing Framer Motion, no changes needed)
- Remove glow-border effect (replace with cleaner gold border-on-hover)

---

### 6. Files to Modify

| File | Changes |
|------|---------|
| `src/index.css` | Royal color variables, updated glass/gradient/card-hover utilities, gold accent utilities |
| `tailwind.config.ts` | Update font assignments, add gold color token |
| `src/components/Navbar.tsx` | Gold active indicator, refined CTA buttons, subtle border |
| `src/components/Footer.tsx` | Deep navy bg, gold accents |
| `src/components/SectionHeading.tsx` | Gold accent decoration (small line above or below heading) |
| `src/components/WhatsAppFab.tsx` | Add gold ring border |
| `src/components/ContactForm.tsx` | Gold focus rings, refined button |
| `src/components/AnimatedElements.tsx` | No major changes, keep existing |
| `src/pages/Index.tsx` | Full royal treatment across all sections |
| `src/pages/About.tsx` | Royal hero, gold mission card accents |
| `src/pages/Services.tsx` | Royal hero, gold price highlights, refined cards |
| `src/pages/Contact.tsx` | Royal hero, gold form accents |

---

### 7. Design Consistency Checklist

- All cards use the same border-radius, padding, shadow, and hover behavior
- All section spacing is `py-20 md:py-28` (already consistent)
- All hero sections share the same royal navy background with consistent badge, title, and subtitle pattern
- All CTA buttons use the same gold gradient style
- All icon containers use the same size and style
- Logo used consistently in navbar and footer branding

