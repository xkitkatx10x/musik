# MUSIK Studio

An immersive, UX-driven music creation environment built with Next.js 13, Tailwind CSS, and Tone.js. MUSIK Studio delivers an
AI-assisted sequencer, responsive sound design toolkit, and curated preset library packaged in an interface designed for clarity
and flow. The experience is production-ready for deployment on Vercel.

## ✨ Features

- **Innovative UX/UI** – Glassmorphism, adaptive layouts, and accessible typography optimized for desktop and touch.
- **Interactive Sequencer** – Real-time step sequencer powered by Tone.js with tempo controls and per-instrument note selection.
- **Sound Design Highlights** – Modular sound-design concepts, automation insights, and collaboration stories.
- **Preset Gallery** – Curated sound presets stored as JSON data for quick iteration and expansion.
- **Responsive Navigation** – Sticky header, animated mobile menu, and consistent call-to-action patterns.
- **Deployment Ready** – Next.js configuration tailored for Vercel with strict mode, TypeScript, ESLint, and Tailwind CSS.

## 🧱 Project Structure

```
app/
  layout.tsx        # Root layout, fonts, global wrappers
  page.tsx          # Landing page composing all sections
  globals.css       # Tailwind base styles and global tokens
components/
  composer/         # Interactive sequencer component
  layout/           # Header and Footer UI
  sections/         # Hero, Experience, Composer, Sound Design, Presets, Pricing
  ui/               # Reusable UI primitives (buttons, cards, chips)
hooks/
  useToneController.ts # Sequencer state + Tone.js integration
lib/
  toneClient.ts     # Tone.js initialization and instrument triggers
public/
  data/             # Preset data source
  images/           # SVG illustrations used across the UI
```

## 🚀 Getting Started

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Run the development server**
   ```bash
   npm run dev
   ```
   Visit [http://localhost:3000](http://localhost:3000) to view the app.

3. **Run linting**
   ```bash
   npm run lint
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Deploy on Vercel**
   - Push the repository to GitHub.
   - Import the project in [Vercel](https://vercel.com/new), select the repo, and use the default Next.js build command (`npm run build`).
   - Set environment variables if needed (none required for the base experience).

## 🧠 UX/UI Principles Applied

- **Clarity & Hierarchy**: Section titles, subtitles, and card patterns follow a consistent visual rhythm.
- **Feedback & Affordance**: Button states, sequencer highlights, and animated transitions provide immediate context.
- **Accessibility**: High-contrast palette, focus rings, semantic HTML, and responsive layout ensure inclusive design.
- **Consistency**: Shared design tokens, typography scales, and reusable components maintain coherence across the app.

## 🛠️ Tooling

- [Next.js 13](https://nextjs.org/)
- [React 18](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Tone.js](https://tonejs.github.io/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)

---

Crafted to inspire musicians and producers with an intuitive, future-forward creation experience.
