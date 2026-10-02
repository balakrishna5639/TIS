# Tulas International School (TIS) - Homepage Redesign

A modern, animated redesign of the Tulas International School homepage focusing on high conversion, fluid animations, and mobile responsiveness.

## 🚀 Live Demo
- **Live URL:** [Insert Vercel / Netlify Link Here]
- **Repository:** [Insert GitHub Repo Link Here]

## 🛠️ Tech Stack
- **Framework:** Next.js 15 / React.js
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Deployment:** Vercel

## ✨ Standout Features Implemented
1. **Custom Cursor:** Interactive mouse-follower ring with smooth spring physics using Framer Motion. Hides on touch devices and scales up when hovering over interactive elements.
2. **Scroll-Triggered Reveals:** Staggered entrance animations for sections and cards as they enter the viewport using `framer-motion`'s `whileInView`.
3. **Scroll Progress Bar:** A smooth gradient progress indicator attached to the top of the viewport representing page scroll depth.

## 📦 Getting Started Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/tis-homepage-redesign.git
   cd tis-homepage-redesign
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open [http://localhost:3000](http://localhost:3000) in your browser.**

## Component Architecture Overview
- `components/ui/`: Atomic UI components (Buttons, Badges, Cards)
- `components/layout/`: Global layout components (Navbar, Footer)
- `components/sections/`: Main page sections (Hero, About, Programs, Testimonials, CTA)
- `components/animation/`: Animation drivers (Custom Cursor, Scroll Progress, FadeIn)
- `hooks/`: Custom React hooks (`useMousePosition`)
- `data/`: Static content

## Brand Identity Retained
Primary colors, copy, and official school assets from [tis.edu.in](https://tis.edu.in/).
