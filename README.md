# 🎓 UndoSchool — Course Browse Page

> **Front-End Developer Assignment Submission**  
> Built with **React 18 + Vite + TailwindCSS 3**

---

## ✨ Live Preview

> Deploy to Vercel / Netlify / GitHub Pages after running locally.

---

## 🗂 Project Structure

```
undoschool/
├── index.html                  ← HTML entry point
├── package.json                ← Dependencies & scripts
├── vite.config.js              ← Vite configuration
├── tailwind.config.js          ← TailwindCSS config (custom colors, animations)
├── postcss.config.js           ← PostCSS config
│
├── public/
│   └── favicon.svg             ← Brand favicon
│
└── src/
    ├── main.jsx                ← React app entry
    ├── App.jsx                 ← Root component (layout orchestration)
    ├── index.css               ← Global styles + custom animation classes
    │
    ├── data/
    │   └── courses.js          ← All course data, categories, filter options
    │
    ├── hooks/
    │   └── useFilter.js        ← Custom hook: filtering, sorting, pagination logic
    │
    └── components/
        ├── Navbar.jsx          ← Sticky navbar with logo, nav links, auth buttons
        ├── Hero.jsx            ← Hero section with search bar, trending pills, stats
        ├── CategoryBar.jsx     ← Horizontal sticky category filter pills
        ├── FilterSidebar.jsx   ← Desktop filter sidebar (level, price, rating)
        ├── Toolbar.jsx         ← Sort dropdown, view toggle, mobile filter panel
        ├── CourseCard.jsx      ← Individual course card (grid + list modes)
        ├── CourseGrid.jsx      ← Grid/List layout + Load More + empty state
        ├── StarRating.jsx      ← Reusable star rating component
        ├── CTABanner.jsx       ← Instructor CTA section
        └── Footer.jsx          ← Full footer with links and social icons
```

---

## 🚀 Quick Start (Local Setup)

### Prerequisites
- **Node.js** ≥ 18 ([Download](https://nodejs.org))
- **npm** ≥ 9 (comes with Node.js)

### Steps

```bash
# 1. Clone or extract the project
cd undoschool

# 2. Install all dependencies
npm install

# 3. Start dev server (auto-opens at http://localhost:3000)
npm run dev
```

That's it! The browser will open automatically at **http://localhost:3000**

---

## 📦 Available Scripts

| Command         | Description                              |
|-----------------|------------------------------------------|
| `npm run dev`   | Start development server (hot reload)    |
| `npm run build` | Build for production → `dist/` folder    |
| `npm run preview` | Preview the production build locally   |

---

## 🌐 Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from project root
vercel
```

Or drag the `dist/` folder (after `npm run build`) to [vercel.com](https://vercel.com).

---

## 🌐 Deploy to Netlify

```bash
npm run build
# Drag the `dist/` folder to netlify.com/drop
```

Or connect your GitHub repo and set:
- **Build command:** `npm run build`
- **Publish directory:** `dist`

---

## 🌐 Deploy to GitHub Pages

```bash
npm install --save-dev gh-pages

# Add to package.json scripts:
# "deploy": "gh-pages -d dist"

npm run build
npm run deploy
```

---

## ✅ Features Implemented

### Core Requirements
- [x] **React + TailwindCSS** stack (Vite build tool)
- [x] **Layout matches Figma** — accurate spacing, fonts, component placement
- [x] **Responsive** — tested at 375px mobile and 1440px desktop
- [x] **Course cards** with dummy data (12 courses, 9 categories)
- [x] **Search** — real-time filtering by title, instructor, skill, category
- [x] **Hover states** on all interactive elements
- [x] **Semantic HTML5** throughout
- [x] **Component-based** architecture with clean separation

### 🎨 Creative Enhancements

| Enhancement | Details |
|---|---|
| **Hero Search Bar** | Focus ring glow, clear button, trending pill shortcuts |
| **Animated Stat Cards** | Glass morphism cards with float hover effect |
| **Card Lift Animation** | `cubic-bezier(0.34, 1.56, 0.64, 1)` spring physics on hover |
| **Card Image Zoom** | Smooth `scale(1.07)` on hover with gradient overlay |
| **Play Button Reveal** | Centered play icon springs in on card hover |
| **Wishlist Toggle** | Heart animates with scale + color fill (red) |
| **Staggered Card Render** | Cards fade up with sequential `animationDelay` |
| **Custom Scrollbar** | Purple-tinted scrollbar matches brand |
| **Live Student Badge** | Pulsing green dot in hero = social proof |
| **Underline Nav Links** | Gradient underline slides in on hover |
| **Mobile Filter Panel** | Collapsible slide-down filter panel |
| **Load More Pagination** | 9 initial + 6 per load with progress counter |
| **Sort + View Toggle** | 5 sort options + grid/list view |
| **Empty State** | Friendly 🔍 UI with reset button |
| **Active Filter Count** | Sidebar shows how many results match |
| **Instructor CTA** | Full-width gradient section with perk badges |
| **Footer** | Complete with social icons, animated hover links |
| **Syne + DM Sans** | Distinctive font pairing (not Inter/Roboto) |
| **Custom CSS Animations** | 8 named keyframe animations defined in CSS |
| **Purple Brand System** | Full 950→50 color scale in Tailwind config |

---

## 📱 Responsive Behavior

| Screen Size | Layout |
|---|---|
| `< 640px` | Single column, hamburger menu, compact hero (2-col stats) |
| `640px–1023px` | 2-column grid, mobile filter toggle shown |
| `≥ 1024px` | Sidebar + 3-column grid, full desktop nav |
| `≥ 1440px` | Max-width centered, optimal whitespace |

---
