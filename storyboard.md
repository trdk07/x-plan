# storyboard.md — X翻倉計畫

---

## Site-Wide Cinematic Grammar

### Shell Logic
Full-viewport sections. No UI chrome. The edge of the screen is the edge of the world.
Each section occupies its own stage — no cards, no boxes, no containers with drop shadows.

### Navigation Posture
- Transparent on hero, background appears on scroll (subtle `#08080F` at 90% opacity + blur)
- Text links only — no icons, no mega-menu
- Brand mark left / Nav links right / CTA button far right
- One CTA only: 了解方案

### Framing Rules
- Never center unless at monumental scale (7rem+)
- Default: left-aligned text, right-offset visual elements
- 30% more negative space than comfortable
- Villeneuve rule: elements sparse, pushed toward edges, never clustered

### Density Cadence (per page)
```
Statement (sparse) → Confrontation (dense) → Depth (dense) →
Breath (sparse) → Proof (moderate) → World (moderate) → Silence (sparse)
```
Never two dense sections back to back.

### Recurring Material Layers
- Base: `#08080F` deep near-black
- Warmth: radial amber gradient `#D4891A` at 8-12% opacity, emerging from lower-right corner
- Warning: `#8B2020` only for critical statements — never decorative
- Horizon: `#3D6B8A` as a distant, barely-visible mist
- Texture: grain overlay at 3-4% opacity across all sections
- Type: `F2EDE4` warm white — never pure `#FFFFFF`

### Motion Rules
- All transitions: minimum 0.8s, ease-out only
- Scroll-triggered reveals: `opacity 0→1` + `translateY 12px→0`
- No bounce, no spring, no elastic easing
- Reduced-motion: disable translateY, keep opacity fade

---

## Director Brief

**Visual thesis:**
"The information was always there. You just needed the right frame to see it."

**3 Signature Techniques → Web Translation:**

1. **Colossal scale humbles the viewer**
   → Display type at 6-9rem. One headline fills the viewport width. The viewer feels small — then understands.

2. **Atmosphere precedes content**
   → The amber fog gradient loads before any text. The world exists before the message.

3. **Decisive stillness — nothing moves unless it means something**
   → Zero idle animation. No looping glows. No ambient particle drift.
   → Motion only on scroll entry. Once revealed, elements are still.

**Color token usage:**
- `--amber` (#D4891A): hero type, primary CTA, section numbers, key data callouts
- `--blue` (#3D6B8A): secondary links, horizon elements, tool section accents
- `--red` (#8B2020): warning blocks (爭議說明, removal policy, fee warnings) — max 2 uses per page
- `--text` (#F2EDE4): all body copy
- `--bg` (#08080F): base

**Typography direction:**
- Display: Extra-bold or Black weight, tracked slightly wide at large sizes
- Body: Regular weight, 1.8 line-height, never compressed
- Accent: Chinese philosophical lines set slightly larger than surrounding body
- English punches: set in a lighter weight, wider tracking, acts as visual counterpoint

---

## Prestige Calibration

- **One big idea per page**: each page is legible around one dominant visual concept
- **Restraint statement**: remove every gradient, glow, or animated element that doesn't earn its place through the Villeneuve grammar
- **What is intentionally absent**: carousels, hover card flips, parallax scrolljacking, animated counters, gradient borders, glassmorphism

---

## 首頁 (Homepage) — Scene: The Cold Statement

### Scene Thesis
This page is the opening scene of the film. No establishment, no warmth — a statement lands before the viewer has time to prepare, then the film takes its time explaining what it meant. The homepage does not sell. It declares.

### Narrative Arc (Villeneuve — Sicario Variant C, adapted)
```
B1 Cold Open → B18 Confrontation → B10 Deep Dive →
B19 Quiet Moment → B8 Evidence Wall → B6 World Exploration → B25 Black Screen
```

### Hero Dominance Statement
The viewer sees nothing but massive type against near-black atmosphere. The amber warmth exists only as a suggestion, not a feature. The text is too big to ignore and too sparse to doubt.

### Signature Composition
**Archetype #2 Atmosphere Bath** — Villeneuve interpretation:
- Full `100vh`, `#08080F` base
- Amber radial gradient sourced from lower-right, bleeding 40% across the viewport
- Grain texture overlay at 4%
- "While they hold, we flip." set at 7-8rem, left-aligned, positioned at 45% from top
- Sub-line set at 1.2rem, left-aligned, 3rem below headline
- Sparse visual accent: single thin amber horizontal rule above the headline (1px, 120px wide)
- CTA appears last, 1.2s after page load with opacity fade

### Grid Fallback Test
If reduced to a card grid: the entire atmospheric gravity disappears. The type is the composition. Remove the scale and you have nothing.

### Section Map

| # | Beat | Section | Density | Entrance |
|---|------|---------|---------|----------|
| 1 | B1 Cold Open | Hero — "While they hold, we flip." | Sparse | Load fade |
| 2 | B18 Confrontation | 爭議說明 — 先說清楚幾件事 | Dense | Scroll opacity + Y |
| 3 | B10 Deep Dive | 玄學 section | Dense | Scroll opacity slow |
| 4 | B19 Quiet Moment | Visual separator — amber rule + white space | Sparse | Static |
| 5 | B8 Evidence Wall | 打單方式 | Moderate | Stagger lines |
| 6 | B6 World Exploration | 服務概覽 — 兩條路 | Moderate | Split reveal |
| 7 | B25 Black Screen | CTA — 本期限收 30 人 | Sparse | Slow fade up |

### Section Compositions

**Section 2 — 爭議說明**
Left-aligned text block, no background change. The `--red` accent on "這些都是真的." — set slightly larger and in `#8B2020`. No other decoration.
The text itself is the composition — dense, deliberate, unboxed.

**Section 3 — 玄學**
Right-offset large ambient symbol (八卦 or abstract circle form, `#3D6B8A` at 6% opacity) behind the text.
Text left-aligned. The symbol is atmosphere, not illustration.
"Energy doesn't lie. But you still have to execute." — set in English at 1.5rem, tracked wide, amber color.

**Section 4 — Visual Separator**
Full-width amber rule (1px). 120px of white space above and below. Nothing else.

**Section 5 — 打單方式**
Three-line data display: 10倍 / 50倍 / 200倍 comparisons set as a sparse table.
Numbers in `--amber`, labels in `--text` at reduced opacity.
"Short frame. Fast exit. Repeat." — amber, tracked wide, 2rem.

**Section 6 — 服務概覽**
Weighted split: 方案 left / 工具 right. Divided by a vertical 1px amber rule.
No cards. Just text blocks with amber arrow CTAs.

**Section 7 — CTA**
Full `100vh` dark section. Single centered text block.
"本期限收 30 人." at 4rem, amber.
Body copy below at 1.2rem.
"This isn't for everyone. But if it's for you, you'll know." at 1.1rem, tracked wide.
Two CTA buttons: minimal, border-only.

---

## 方案頁 (Plans Page) — Scene: The Case File Opens

### Scene Thesis
This page is a procedural scene. Like Sicario's briefing room — the facts are laid out, one after another, with no softening. The viewer is being informed, not persuaded. By the time they reach the two paths, they already know which one they are.

### Narrative Arc
```
B10 Deep Dive → B9 Data Bombardment → B19 Quiet Moment →
B15 Parallel Stories → B20 The Invitation → B22 The Farewell
```

### Signature Composition
**Archetype #3 Slow Reveal** — procedural interpretation:
- Content builds section by section as the user scrolls, like pages of a case file being turned
- Each section has a left-aligned number label in amber (`01`, `02`, `03`)
- The interactive calculator breaks the text rhythm — it is the one visual object in an otherwise text-dominant page

### Section Map

| # | Beat | Section | Density | Entrance |
|---|------|---------|---------|----------|
| 1 | B10 Deep Dive | 打單方式（完整版）| Dense | Stagger lines |
| 2 | B9 Data Bomb | 手續費拆解 + 三情境 | Dense | Data lines count up |
| 3 | B9 Data Bomb | 200倍舉例（比較表）| Dense | Stagger rows |
| 4 | B19 Quiet Moment | 互動計算機 | Moderate | Fade in as unit |
| 5 | B15 Parallel | 兩條路 — 入群 vs 單獨訂閱 | Moderate | Split reveal |
| 6 | B20 Invitation | 路線 A 詳細 + 申請表CTA | Sparse | Fade up |
| 7 | B20 Invitation | 路線 B 定價 | Sparse | Fade up |
| 8 | B20 Invitation | 續留說明 | Sparse | Slow fade |
| 9 | B22 Farewell | Page end | Sparse | Static |

### Section Compositions

**Section 1 — 打單方式**
Section number `01` in amber at top-left. Text left-aligned, generous line-height.
No illustration. The weight is carried by the typography itself.

**Section 2-3 — 手續費 + 200倍**
Data displayed as sparse left-aligned rows, not a table with borders.
Numbers in amber. Units in reduced-opacity text.
Line by line entrance — each row fades in with 0.15s stagger.

**Section 4 — 計算機**
The calculator sits centered, max-width 480px, styled to match the brand palette.
Dark card background (`#0F0F18`), amber inputs and results, red for warning fee values.
Surrounded by 80px vertical white space — it is the one object on stage.

**Section 5 — 兩條路**
Full-width section split by a vertical amber rule.
Left: X翻倉計畫. Right: 單獨訂閱.
Asymmetric: left block slightly wider (60/40), reflecting the primary path.

---

## 工具 & 產品頁 (Tools Page) — Scene: The Armory

### Scene Thesis
This page is not a catalog. It is a room where the tools are laid out for inspection before a mission. Each tool gets its own moment. The viewer understands: these are real instruments used by a real practitioner. Nothing here is decorative.

### Narrative Arc
```
B2 Establishing Shot → B7 The Encounter → B7 The Encounter →
B7 The Encounter → B18 Confrontation → B7 The Encounter → B22 The Farewell
```
(Multiple Encounters — each tool is a distinct encounter)

### Signature Composition
**Archetype #15 Weighted Split** — asymmetric tool display:
- Each tool section: image/visual left (60%) + description right (40%)
- Alternates on some tools: text left, image right — to break rhythm
- The 返傭說明 section breaks the pattern completely: text-only, centered, red accent — a confrontation in the middle of the armory

### Section Map

| # | Beat | Section | Visual Side | Density | Entrance |
|---|------|---------|------------|---------|----------|
| 1 | B2 Establishing | 開頭 — 工具決定你能看見什麼 | None | Sparse | Slow fade |
| 2 | B7 Encounter | 玄學日報 | Right: sample image | Moderate | Slide left |
| 3 | B7 Encounter | 交易指標 | Left: TradingView screenshot | Moderate | Slide right |
| 4 | B7 Encounter | 幣安主流幣監控 | Right: sample text UI | Moderate | Slide left |
| 5 | B18 Confrontation | 交易所 + 返傭說明 | None — text only | Dense | Fade up, red accent |
| 6 | B7 Encounter | BitMart Card | Left: card visual | Moderate | Slide right |
| 7 | B22 Farewell | Page end | None | Sparse | Static |

### Section Compositions

**Section 1 — 開頭**
"工具決定你能看見什麼." at 5rem, left-aligned.
Sub-line below at 1.2rem.
Amber rule beneath. 100vh breathing space.

**Section 2-4, 6 — Tool Sections**
Each tool: amber section number top-left. Tool name at 2.5rem. Body copy at 1rem.
Image placeholder: dark-bordered frame, no rounded corners, aspect ratio 16:9 or 4:3.
Price/CTA: amber arrow link, no button styling.

**Section 5 — 返傭說明**
Full-width section, centered text, max-width 640px.
"關於返傭。" at 2.5rem.
"如果你覺得我在洗你的交易量——" line in `#8B2020`.
"The option is always there." in amber, tracked wide, at bottom.
No images. No visual accents. The text carries the weight.

---

## Cross-Page Anti-Convergence Check

| Dimension | 首頁 | 方案頁 | 工具頁 |
|-----------|------|-------|-------|
| Hero archetype | #2 Atmosphere Bath | #3 Slow Reveal | #15 Weighted Split |
| Opening beat | B1 Cold Open | B10 Deep Dive | B2 Establishing Shot |
| Dominant composition | Full-atmo + monumental type | Case-file text sequence | Asymmetric tool pairs |
| Dense section position | Section 2-3 | Sections 1-3 | Section 5 only |
| Closing beat | B25 Black Screen | B22 Farewell | B22 Farewell |
| Signature element | Amber fog + colossal type | Interactive calculator | Alternating split layout |

All three pages feel like different scenes in the same film. ✓
No page reuses the same hero archetype. ✓
No two adjacent pages share the same opening beat. ✓
