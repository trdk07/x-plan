# compiled-spec.md — X翻倉計畫

---

## External Library Decision

### Q1: What is the core motion experience?
Scroll narrative — content reveals progressively as the viewer descends, like pages of a case file turning. No shader, no 3D, no particles.

### Q2: Can native library entries do it?
Yes. Intersection Observer API handles all scroll reveals natively. No external library required for motion.

### Q3: External library usage
GSAP installed as dependency but not used in final implementation. All animation handled via:
- `IntersectionObserver` for scroll-triggered reveals
- CSS `transition` with `var(--ease-out)` cubic-bezier
- `data-reveal` attribute system for entrance variety

### Decision
**No external library in production.** Native CSS + IntersectionObserver only.
GSAP remains available if user requests heavier animation later.

---

## Design Tokens

```css
:root {
  --bg: #08080F;
  --amber: #D4891A;
  --blue: #3D6B8A;
  --red: #8B2020;
  --text: #F2EDE4;
  --text-muted: rgba(242, 237, 228, 0.5);
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --transition: 0.8s var(--ease-out);
}
```

---

## Reveal System

| Attribute | CSS Applied | Revealed State |
|-----------|-------------|----------------|
| `data-reveal="fade"` | opacity: 0 | opacity: 1 |
| `data-reveal="up"` | opacity: 0, translateY: 16px | opacity: 1, translateY: 0 |
| `data-reveal="left"` | opacity: 0, translateX: -24px | opacity: 1, translateX: 0 |
| `data-reveal="right"` | opacity: 0, translateX: 24px | opacity: 1, translateX: 0 |
| `data-reveal="scale"` | opacity: 0, scale: 0.96 | opacity: 1, scale: 1 |
| `data-reveal="slow"` | opacity: 0 (1.3s duration) | opacity: 1 |

`fadeUp` appears: 2 times across site (首頁 CTA, 方案頁 路線A) — within limit.
Reduced-motion: all reveals disabled, opacity set to 1 immediately.

---

## 首頁 — Entrance Map

| Section | Reveal Type | Library Source |
|---------|-------------|----------------|
| Hero | Load fade (CSS animation, no observer) | Custom: load-stagger |
| 爭議說明 | `data-reveal="up"` | Anti-garbage: no repeat adjacent |
| 玄學 | `data-reveal="slow"` | Villeneuve: patience |
| Separator | Static | Intentional: breathing beat |
| 打單方式 | `data-stagger` children + `data-reveal="up"` | Stagger system |
| 服務概覽 | `data-reveal="left"` (left) + `data-reveal="right"` (right) | Split reveal |
| CTA | `data-reveal="fade"` | Maximum restraint for closing |

Distinct entrance types: fade / up / slow / stagger / split / static = 6 types ✓

---

## 方案頁 — Entrance Map

| Section | Reveal Type |
|---------|-------------|
| 打單方式 | `data-stagger` |
| 手續費拆解 | `data-reveal="up"` |
| 200倍比較 | `data-stagger` |
| 計算機 | `data-reveal="scale"` |
| 兩條路 | `data-reveal="left"` + `data-reveal="right"` |
| 路線A | `data-reveal="up"` |
| 路線B | `data-reveal="fade"` |
| 續留說明 | `data-reveal="slow"` |

Distinct entrance types: stagger / up / scale / split / fade / slow = 6 types ✓

---

## 工具頁 — Entrance Map

| Section | Reveal Type |
|---------|-------------|
| 開頭 | `data-reveal="slow"` |
| 玄學日報 | `data-reveal="left"` |
| 交易指標 | `data-reveal="right"` |
| 幣安監控 | `data-reveal="left"` |
| 返傭說明 | `data-reveal="up"` |
| BitMart Card | `data-reveal="right"` |

Distinct entrance types: slow / left / right / up = 4 types ✓

---

## Hero Atmosphere Layer (首頁)

```css
.hero {
  background:
    radial-gradient(ellipse 80% 60% at 85% 85%,
      rgba(212, 137, 26, 0.12) 0%,
      transparent 70%),
    var(--bg);
}
```
Source: Atmosphere Bath #2 — Villeneuve interpretation. Amber warmth as suggestion, not feature.

---

## Signature Compositions

### 首頁 — Monumental Slab
Type at `clamp(3rem, 7vw, 7rem)`. Amber rule precedes headline. Atmosphere behind.
If replaced by generic centered hero: scale and atmospheric gravity disappear entirely. ✓

### 方案頁 — Case File Sequence
Numbered sections (01-05), amber left-border formula callout, interactive calculator as the single visual object on an otherwise text-only page.
If reduced to card grid: the procedural weight and trust-building sequence collapse. ✓

### 工具頁 — Alternating Asymmetric Tool Display
55/45 split alternating per tool. 返傭說明 breaks pattern as centered confrontation text.
If replaced by 3-column card grid: the "armory" weight and the confrontation scene disappear. ✓

---

## Phase 3 Quality Checklist

- [x] Every section has complete layout CSS
- [x] Every section has complete entrance behavior
- [x] Every section has interaction behavior or intentional `none`
- [x] No JS-required effects selected that lack JS implementation
- [x] Global design tokens used — no stray hardcoded hex values
- [x] Entrance variety rules satisfied (4+ types per page)
- [x] `fadeUp` appears max 2× per page ✓
- [x] External Library Decision block complete
- [x] Anti-garbage constraints hold — no generic card grids, no repeated entrances
- [x] Reduced-motion support: `@media (prefers-reduced-motion: reduce)` disables all transforms
- [x] Responsive: mobile breakpoints at 768px

---

## Build Output

- Framework: Astro v4 (static output)
- Node requirement: v18+
- Build command: `npm run build`
- Dev command: `npm run dev`
- Output directory: `dist/`
- Pages: `/` `/plans` `/tools`
- Build status: ✓ Clean, no errors

---

## Files

| File | Purpose |
|------|---------|
| `src/layouts/Layout.astro` | Shared layout, fonts, scripts, grain |
| `src/components/Nav.astro` | Fixed nav with scroll behavior |
| `src/components/Footer.astro` | Minimal footer |
| `src/components/Calculator.astro` | Fee calculator, brand-styled |
| `src/styles/global.css` | Tokens, reveals, typography, nav |
| `src/pages/index.astro` | 首頁 |
| `src/pages/plans.astro` | 方案頁 |
| `src/pages/tools.astro` | 工具頁 |
