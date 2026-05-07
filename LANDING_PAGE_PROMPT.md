# Haven Landing Page — Single-Prompt Build Guide

> A comprehensive prompt to recreate the Haven cinematic, scroll-driven real estate landing page from scratch using **Next.js 15 (App Router)**, **Tailwind CSS**, **Framer Motion**, and **Lenis** smooth scroll.

---

## Overview

Build a premium, scroll-driven real estate landing page inspired by [FindRealEstate.com](https://www.findrealestate.com/). The design philosophy is **Cinematic Narrative Flow** — every section reveals content through scroll-linked animations. The page must feel like a high-authority, editorial real estate experience.

**Tech Stack:**
- Next.js 15 (App Router, TypeScript)
- Tailwind CSS (with `font-heading` custom serif font — e.g., Playfair Display)
- Framer Motion (scroll-linked `useScroll`, `useTransform`, `AnimatePresence`)
- Lenis (smooth scroll wrapper)
- Lucide React (icons)

**Color Palette:**
- Background: Warm cream `#f5f5f0`, pure white `#fff`, dark sections `#0A0A0A`
- Text: `zinc-900` (bold headings), `zinc-300` (grey portion of headlines), `zinc-400` (body/descriptions)
- Accent: `emerald-500` (status indicators only), no colored buttons
- All CTAs are `zinc-900` (black) rounded-full pills

**Typography Pattern:**
- All section headlines use a **bold/grey split**: First phrase in `zinc-900 font-bold`, second phrase in `zinc-300 font-bold`
- Example: `"Stage Any Room." (dark) + "In Seconds, Not Weeks." (grey)`
- Font sizes: `text-4xl md:text-5xl lg:text-6xl` with `leading-[1.05]`

**Layout Pattern:**
- Asymmetric grid: `grid-cols-[280px_1fr]` with a sticky left label and content on the right
- Max-width container: `max-w-7xl mx-auto px-6 md:px-12 lg:px-20`

---

## Page Composition Order

```tsx
<SmoothScroll>        // Lenis wrapper
  <Header />          // Fixed wordmark nav with text-fill hover links
  <Hero />            // Scroll-mask text reveal
  <TextRevealSection /> // Scroll-driven text fill paragraph
  <CinematicReveal /> // Full-width image expansion
  <Features />        // Sticky scroll steps
  <CallToAction />    // Asymmetric CTA with clip-path
  <Testimonials />    // Split photo/quote carousel
  <Services />        // Photo-backed dark cards
  <BlogPreview />     // Dark resources section
  <VirtualStagingShowcase /> // AI Staging with image reveal
  <DreamHouseShowcase />     // Vision AI with match results
  <FAQ />             // Numbered accordion
  <Footer />          // Giant wordmark footer
</SmoothScroll>
```

---

## Component Specifications

### 1. SmoothScroll (wrapper)
- Uses `@studio-freight/lenis` for buttery scroll
- Wraps entire page, syncs with Framer Motion via `requestAnimationFrame`

### 2. Header
- Fixed position, `bg-white/80 backdrop-blur-md`
- Left: Bold serif "HAVEN" wordmark (`font-heading text-xl font-bold tracking-tight`)
- Center: Text links — `Search | How It Works | Resources | About` (14px, `text-zinc-700`)
  - **Hover Effect:** Uses a text-fill animation. Two layered text spans: base is grey, fill is black with `w-0` animating to `w-full` on hover using `overflow-hidden` and `whitespace-nowrap`.
- Right: `Sign In` pill button (`bg-zinc-900 text-white rounded-full px-5 py-2`)
- No colored logo mark, no gradients — clean and editorial

### 2.5 TextRevealSection
- Full width, centered max-width text block.
- **Scroll-driven text fill:** A large paragraph of text where each word transitions from 15% opacity to 100% opacity based on scroll progress.
- Words are split into `<motion.span>` elements mapping `scrollYProgress` to opacity.
### 3. Hero (Scroll-Mask Reveal)
**Height:** `h-[200vh]` (scrollable), inner content `sticky top-0 h-screen`

**Structure:**
- Background: Warm cream `bg-[#f5f5f0]` with subtle gradient
- **Building image** starts below viewport (`y: 40%`), rises to `y: -15%` on scroll via `useTransform`
- Image has a top-fade gradient that blends into the cream background
- **Heading text** "Find What / Moves You" — massive serif (`clamp(3.5rem, 9vw, 9rem)`)
  - **Character-by-character stagger animation**: Each letter animates in with `opacity: 0 → 1`, `y: 60 → 0`, `rotateX: -90 → 0` with 40ms stagger delay
  - Text fades and shifts up as user scrolls (`opacity → 0`, `y → -80` between `[0, 0.25]` scroll progress)
- **Subtitle:** "AI-powered intelligence." (bold) + "A clear path to find what's next." (grey) — fades in at delay 1.2s
- **CTA row:** Black pill "Find Properties →" + ghost "See How It Works ↓"
- **Trust indicators:** "50+ Markets | 2,500+ Investors | 98% Accuracy" — tiny text bar, fades in at 2s
- **Scroll indicator:** "SCROLL" + animated bouncing chevron at bottom center
- **HAVEN outline logo:** Appears between scroll progress `[0.2, 0.45]` — giant text with `WebkitTextStroke: 2px rgba(255,255,255,0.8)`, `WebkitTextFillColor: transparent`, plus "REAL ESTATE" subtitle below
- **Background overlay:** Black div, `opacity: 0 → 0.2` as user scrolls, sits at `z-[15]`

### 4. CinematicReveal (Full-Width Image Expansion)
- Single aerial neighborhood image
- On scroll: transforms from `inset(8% round 24px)` → `inset(0% round 0px)` using `clipPath`
- Creates a "zoom-to-full-bleed" effect as user scrolls
- Uses `useScroll` with `offset: ["start end", "end start"]`

### 5. Features (Sticky Image Gallery)
**Layout:** 2-column grid `grid-cols-1 lg:grid-cols-2`

- **Left column:** Sticky image gallery (`sticky top-32 h-[calc(100vh-16rem)]`).
  - Small label "How It Works" at the top.
  - Large container (`aspect-[4/5] rounded-2xl`) showing the image corresponding to the active step.
  - Uses `AnimatePresence` to crossfade images (`opacity` and `scale`) as the user scrolls.
- **Right column:** 3 numbered steps, each separated by a horizontal rule
  - Each step is a `motion.div` tracking scroll to pass `setActiveStep(index)` using `useInView` with `-45%` margin.
  - Number: `01`, `02`, `03` (highlights black when active).
  - Headline: Bold/grey split.
  - Description: `text-zinc-400 font-light` body text.
  - (On mobile, the image appears inline above the headline instead of sticky on the left).

**Steps:**
1. Discover — AI scouts 4,000+ markets
2. Analyze — Every claim verified across 847 data points
3. Decide — Predictive models with 98% accuracy
4. Close — Data-backed investment thesis for negotiation

### 6. CallToAction (Asymmetric Split)
**Layout:** Asymmetric grid with left label "For Investors"

- **Headline:** `"Don't Settle." (bold) + "Invest Smart." (grey)` — massive text
- **Image:** Aerial neighborhood photo with `clipPath: inset()` reveal animation on scroll
- **Below image:** Description text on left, "Get Started →" black pill button on right
- Background: `bg-[#f5f5f0]` (cream)

### 7. Testimonials (Split Photo/Quote)
**Layout:** Full-width, `bg-white`

- **Headline:** `"Don't Take Our Word For It." (bold) + "Hear From Our Clients." (grey)`
- **Split layout:** Image on left (40%), quote content on right (60%)
- **Navigation:** Numbered dots (01, 02, 03) that cycle through testimonials
- **Quote:** Large serif italic text, attribution name and role below
- Uses `AnimatePresence` for smooth transitions between testimonials

### 8. Services (Photo-Backed Dark Cards)
**Background:** `bg-zinc-950` (near-black)

- **Headline:** `"What We Do." (bold white) + "The full spectrum of real estate intelligence." (grey)`
- **3 tall cards:** Each ~500px tall, filled with an architectural photo, dark gradient overlay
  - Title at top-left in white serif
  - "Learn More →" pill button at bottom-left
  - Cards: Advisory Services (brownstone), Portfolio Management (spiral staircase), Investment & Development (balcony sunset)
- Layout: `grid-cols-3` with `gap-4`

### 9. BlogPreview (Dark Resources Section)
**Background:** `bg-zinc-950`

- Left side: Giant faded text "Blog & Resources" (`text-8xl text-white/5 font-heading`)
- Right side: Description + white pill "Visit Our Blog →" button
- Minimal, clean, no cards — just a CTA to the blog

### 10. VirtualStagingShowcase (AI Staging)
**Layout:** Asymmetric grid with sticky left label "AI Staging"

- **Headline:** `"Stage Any Room." (bold) + "In Seconds, Not Weeks." (grey)`
- **Description:** Upload an empty room, choose style, AI redesigns
- **Image:** Full-width before/after staging photo with `clipPath: inset()` reveal
- **Before/After labels:** White pill badges on top-left and top-right of image
- **Style pills:** `Modern Minimal | Scandinavian | Mid-Century | Industrial | Art Deco` in grey pill chips
- **CTA:** "Try Virtual Staging →" black pill + "Avg. processing time: 12 seconds" indicator

### 11. DreamHouseShowcase (Vision AI)
**Background:** `bg-[#f5f5f0]` (cream)
**Layout:** Asymmetric grid with sticky left label "Vision AI"

- **Headline:** `"Show Us Your Dream." (bold) + "We'll Find It." (grey)`
- **Description:** Upload inspiration, AI finds matching listings
- **Image:** Modern farmhouse photo with `clipPath: inset()` reveal + "Your Inspiration" badge
- **Match results list:** Clean rows with:
  - Left: Number (01, 02, 03) + Address + City
  - Right: Match percentage (94%, 89%, 86%) + Price
  - Separated by `border-b border-zinc-200/70`
  - Each row stagger-animates in
- **CTA:** "Try Dream House Matcher →" black pill

### 12. FAQ (Numbered Accordion)
**Layout:** Asymmetric grid with label "FAQ"

- **Headline:** `"Questions?" (bold) + "Answered." (grey)`
- **Accordion items:** Clean bordered rows with:
  - Number (01-05) + Question text + circular Plus/Minus toggle button
  - Answer expands with `AnimatePresence` height animation
  - No rounded cards — just `border-b border-zinc-200` separators
  - Numbers in `text-zinc-300`, questions in `text-zinc-600 → text-zinc-900` when open

### 13. Footer (Giant Wordmark)
**Background:** `bg-[#0A0A0A]`

- **Top:** Giant faded "HAVEN" wordmark (`text-9xl text-white/10`) + circular scroll-to-top button (right-aligned)
- **Separator:** `h-px bg-zinc-800`
- **Navigation grid:** 4 columns:
  - Column 1: "HAVEN" logo + description + social links (X, Li, Ig circular badges)
  - Column 2: Platform links
  - Column 3: Company links
  - Column 4: Legal links
- **Bottom bar:** Copyright + Terms/Privacy links + green dot "All systems operational"

---

## Animation Patterns

### Character-by-Character Stagger (Hero heading)
```tsx
const charVariants = {
    hidden: { opacity: 0, y: 60, rotateX: -90 },
    visible: (i: number) => ({
        opacity: 1, y: 0, rotateX: 0,
        transition: { delay: 0.3 + i * 0.04, duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    }),
};
// Split text into characters, wrap each in <motion.span>
```

### Scroll-Linked Clip-Path Reveal
```tsx
const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
const clipInset = useTransform(scrollYProgress, [0, 0.45], [12, 0]);
// Apply: clipPath: `inset(${v}% ${v}% ${v}% ${v}% round 16px)`
```

### Scroll-Mask Hero
```tsx
const imageY = useTransform(scrollYProgress, [0, 0.6], ["35%", "-15%"]);
const textOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
const logoOpacity = useTransform(scrollYProgress, [0.2, 0.45], [0, 1]);
```

### Text Fill on Scroll
```tsx
const words = text.split(" ");
// In render loop for each word:
const opacity = useTransform(scrollYProgress, [startRange, endRange], [0.15, 1]);
<span className="relative">
    <span className="absolute opacity-15">{word}</span>
    <motion.span style={{ opacity }}>{word}</motion.span>
</span>
```

### Text Fill on Hover
```tsx
<Link className="relative group overflow-hidden">
    <span>{text}</span>
    <span className="absolute inset-0 w-0 overflow-hidden whitespace-nowrap transition-all duration-300 group-hover:w-full">
        {text}
    </span>
</Link>
```

### Section Enter Animation (used everywhere)
```tsx
<motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
>
```

### Stagger List Animation
```tsx
// Each item: delay: baseDelay + index * 0.1
<motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.3 + i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
>
```

---

## Design Rules (Non-Negotiable)

1. **No colored buttons** — all CTAs are `bg-zinc-900 text-white rounded-full`
2. **No icon-boxes or colored badges** — no colored tag pills, no gradient boxes
3. **Bold/grey headline split** on EVERY section heading
4. **Asymmetric grid** (`280px / 1fr`) with sticky left label on EVERY section
5. **Warm cream** (`#f5f5f0`) alternates with pure white between sections
6. **Dark sections** only for Services and BlogPreview
7. **All images** use scroll-linked `clipPath: inset()` reveal, not simple fade-in
8. **Easing curve:** Always `[0.16, 1, 0.3, 1]` (custom ease-out)
9. **No shadows on cards** — clean, flat, editorial look
10. **Font hierarchy:** Serif (`font-heading`) for all `h1/h2`, sans-serif for body/nav

---

## Required Dependencies

```json
{
  "framer-motion": "^11.x",
  "@studio-freight/lenis": "^1.x",
  "lucide-react": "^0.400.x"
}
```

## Required Images

| Filename | Description |
|----------|-------------|
| `hero-bg.png` | Luxury modern home, sunset, pool, glass walls |
| `cinematic-aerial.png` | Aerial view of suburban neighborhood with pools |
| `svc-architecture.png` | Victorian brownstone, moody/dramatic lighting |
| `svc-interior.png` | Spiral staircase, golden tones, architectural |
| `svc-lifestyle.png` | Couple on balcony overlooking city skyline sunset |
| `staging-showcase.png` | Before/after room staging split-screen photo |
| `dream-house-showcase.png` | Modern farmhouse, wraparound porch, golden hour |
| `cta-aerial.png` | Aerial neighborhood with houses and greenery |
| `testimonial-1.png` | Professional headshot for testimonial |

---

## File Structure

```
src/
├── app/
│   └── page.tsx              # Composition file
├── components/
│   ├── SmoothScroll.tsx       # Lenis wrapper
│   └── landing/
│       ├── Header.tsx
│       ├── Hero.tsx
│       ├── TextRevealSection.tsx
│       ├── CinematicReveal.tsx
│       ├── Features.tsx
│       ├── CallToAction.tsx
│       ├── Testimonials.tsx
│       ├── Services.tsx
│       ├── BlogPreview.tsx
│       ├── VirtualStagingShowcase.tsx
│       ├── DreamHouseShowcase.tsx
│       ├── FAQ.tsx
│       └── Footer.tsx
public/
├── hero-bg.png
├── cinematic-aerial.png
├── svc-architecture.png
├── svc-interior.png
├── svc-lifestyle.png
├── staging-showcase.png
├── dream-house-showcase.png
├── cta-aerial.png
└── testimonial-1.png
```

---

> **Use this prompt as a single-shot instruction to rebuild the entire landing page.** Every section, animation, color, and layout decision is documented above. Follow the composition order, design rules, and animation patterns exactly.
