# Z-Tour — Portfolio Entry

## 1. Title
**Z-Tour** — Interactive 3D Tourism Explorer for Pakistan

## 2. Category
Personal Project

## 3. Description
An immersive, galaxy-themed 3D web application that lets users explore over 80 tourism destinations across Pakistan. Destinations are organized into 6 tourism hubs (Nature, City Tours, Heritage, Adventure, Luxury, Budget) rendered as a force-directed 3D graph. Users can navigate the galaxy, filter by province/budget/duration/group size, view travel packages in floating cards, and drill into full package details — all within a futuristic frosted-glass UI.

## 4. Role
Solo Developer — full-stack front-end implementation including 3D visualization, UI/UX design, data modeling, and deployment.

## 5. Timeline
April 2025 – Present (actively maintained)

## 6. Tech Stack
| Layer | Technology |
|-------|-----------|
| Framework | React 19 |
| Build Tool | Vite 8 |
| Styling | Tailwind CSS 4 + CSS custom properties |
| 3D Engine | Three.js via `@react-three/fiber` + `@react-three/drei` |
| Graph Visualization | `react-force-graph-3d` (force-directed 3D graph) |
| Animation | Framer Motion |
| Icons | lucide-react |
| Deployment | GitHub Pages (`gh-pages`) |
| Linting | ESLint 9 |

## 7. Challenge / Solution

### Challenge 1: Balancing 80+ nodes in a readable 3D layout
Rendering 80+ destination nodes clustered under 6 hubs in 3D space without overlap or visual clutter was non-trivial. The D3 force simulation needed careful tuning of link distances, charge strengths, and alpha decay.

**Solution:** Custom-tuned D3 force parameters — hub-to-center distance scales dynamically with viewport (`Math.max(180, Math.min(320, Math.floor(minDim * 0.28))`), child nodes use a tight 36px link distance, and charge strengths are stratified (center: -300, hubs: -900, children: -40) to keep clusters compact but distinct.

### Challenge 2: Multi-dimensional filter system with 5+ axes
Users needed to filter by category, search query, province, budget range, trip duration, and group size simultaneously — all while maintaining real-time 3D graph updates.

**Solution:** A centralized `isNodeVisible` callback evaluates all filter axes against each node's packages using `.some()` logic. Budget uses price brackets (<30K, 30-60K, 60-100K, >100K PKR), duration buckets trips into day/weekend/mid/long, and group size parses flexible ranges like "4-12 people" from package data. The graph data is recomputed via `useMemo` when any filter changes.

### Challenge 3: 3D-to-2D screen projection for floating UI cards
Package cards needed to appear to "float" around a selected 3D node, tracking its position as the camera moves.

**Solution:** Used `graph2ScreenCoords()` from `react-force-graph-3d` in a `requestAnimationFrame` loop to continuously project the node's 3D position to 2D screen coordinates. Cards are then positioned in a responsive semi-circular fan layout around the projected point, clamped to viewport bounds.

### Challenge 4: Mobile responsiveness for a 3D-heavy app
A 3D force graph with canvas sprites and floating UI overlays is inherently desktop-oriented.

**Solution:** Built separate mobile layouts with a bottom sheet drawer for filters (instead of sidebar), horizontal swipeable card carousel (instead of floating fan), and adjusted sprite scales (15-26 for mobile vs 24-40 for desktop). A `isMobile` breakpoint state syncs all layout decisions via `useEffect` + resize listener.

## 8. Key Features

- **3D Force Graph:** 6 galactic hub octagons + 80+ destination hexagons with neon glow effects and hover tooltips
- **Real-Time Search:** Auto-fly camera to matching destination as user types (min 3 chars)
- **Multi-Axis Filtering:** Province, budget (<30K to 100K+ PKR), trip duration (day trip to 8+ days), group size (1-20 travelers)
- **Floating Package Cards:** Fan-layout cards around selected node with spring animations, tracks 3D position in real-time
- **Package Detail Modal:** Full breakdown with highlights, inclusions, difficulty level, agent info, and CTA
- **Responsive Design:** Separate mobile layouts with bottom sheets, swipeable carousels, and adapted sprite scaling
- **Frosted Glass UI:** Consistent glass-panel and glass-button design system with blur/saturation backdrops
- **Animated Landing Page:** Ambient gradient mesh, floating particles, stats row, and spring-animated hero card
- **6 Tourism Hubs:** Nature, City Tours, Heritage, Adventure, Luxury, Budget — each with distinct neon color
- **80+ Destinations** across Punjab, Sindh, Khyber Pakhtunkhwa, Balochistan, Gilgit-Baltistan, and Azad Kashmir

## 9. Links

| Type | URL |
|------|-----|
| Live Demo | [https://ms835857.github.io/z-tour/](https://ms835857.github.io/z-tour/) |
| GitHub Repository | [https://github.com/ms835857/z-tour](https://github.com/ms835857/z-tour) |

## 10. Badge
**Status:** 🟢 Active (v0.0.0 — iterative development)

## 11. Image Paths (Placeholder)

```json
{
  "hero": "/assets/projects/z-tour-hero.png",
  "screenshot_1": "/assets/projects/z-tour-graph-view.png",
  "screenshot_2": "/assets/projects/z-tour-packages.png",
  "screenshot_3": "/assets/projects/z-tour-mobile.png"
}
```

Replace paths with actual screenshots when available. Suggested captures:
1. Landing page with "Explore Pakistan in 3D" hero
2. 3D graph view showing hubs and destination nodes
3. Package detail modal overlay
4. Mobile view of the bottom sheet filters
