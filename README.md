# TIS (Tula's International School) Homepage Redesign

This project is a redesign and development of an animated, high-converting homepage for TIS, aiming for a modern, cutting-edge web experience while retaining the core branding. 

## Features Implemented
- **Custom Cursor**: Interactive mouse-follower ring with smooth spring physics using Framer Motion, which scales up when hovering over interactive elements (buttons, links). Hidden on touch devices.
- **Scroll-Triggered Reveals**: Staggered entrance animations for sections and cards as they enter the viewport using `framer-motion`'s `whileInView`.
- **Scroll Progress Bar**: A smooth gradient progress indicator attached to the top of the viewport.
- **Modern UI**: Tailored with custom `Inter` (sans) and `Outfit` (heading) fonts, utilizing modern responsive layouts, and glassmorphism (backdrop blurs).

## Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript

## Project Structure
- `src/app/`: Next.js App Router layout and main page.
- `src/components/layout/`: Global layout components like `Navbar` and `Footer`.
- `src/components/sections/`: Individual homepage sections (`HeroSection`, `AboutSection`, `Programs`, `Testimonials`, `CTA`).
- `src/components/animation/`: Reusable animation components (`CustomCursor`, `ScrollProgress`, `FadeIn`).
- `src/hooks/`: Custom React hooks (`useMousePosition`).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

This project is optimized for seamless deployment on Vercel, Netlify, or GitHub Pages.

To deploy on Vercel:
1. Push this repository to your GitHub account.
2. Import the repository in your Vercel Dashboard.
3. Deploy! Vercel automatically detects Next.js and configures the build settings.
