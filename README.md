# Corallo Digital Marketing Site

A modern, accessible marketing website for Corallo Digital built with Next.js 14, the App Router, and Tailwind CSS. The project showcases services, case studies, and an interactive contact flow designed for high-performing growth teams.

## Tech stack

- Next.js 14 (App Router, TypeScript)
- Tailwind CSS with custom theming
- Framer Motion for subtle motion and reveal interactions
- next-themes for persisted light/dark mode
- Markdown/MDX driven content via `remark` and `gray-matter`
- Heroicons for UI iconography

## Getting started

1. **Install dependencies**
   ```bash
   npm install
   ```
2. **Run the dev server**
   ```bash
   npm run dev
   ```
   The site runs at [http://localhost:3000](http://localhost:3000).
3. **Production build**
   ```bash
   npm run build
   npm start
   ```

## Available scripts

| Script        | Purpose                               |
| ------------- | ------------------------------------- |
| `npm run dev` | Start Next.js in development mode     |
| `npm run build` | Create an optimized production build |
| `npm start`   | Serve the production build            |
| `npm run lint` | Run linting via ESLint               |
| `npm run format` | Check Prettier formatting          |

## Project structure

```
app/
  layout.tsx         # Global layout, metadata, theming
  page.tsx           # Home page
  services/          # Services index + dynamic service detail
  work/              # Case studies listing
  about/             # Company story and team
  contact/           # Contact form and info
  api/contact/       # Dummy contact endpoint
  sitemap.ts         # Dynamic sitemap
  robots.ts          # Robots directives
components/          # UI primitives and sections
content/
  services/*.md      # Service detail content
  work/*.md          # Case study content
lib/
  content.ts         # Markdown loaders
  seo.ts             # Reusable metadata helper
  utils.ts           # UI utilities
```

## Design system tokens

- Palette and elevation tokens live in `src/styles/theme.css`; Tailwind consumes them through `tailwind.config.js` so utilities like `bg-surface`, `text-secondary`, `bg-hero-1`, and `shadow-soft` always reference the latest values.
- UI primitives (`components/button.tsx`, `components/badge.tsx`, `components/card.tsx`, `components/input.tsx`, `components/link.tsx`) are wired to the tokens and expose fully fleshed states (hover, focus-visible, active, disabled, pressed).
- Explore every state on `/src/pages/ThemeShowcase.tsx`, which renders swatches, gradients, components, and a live light/dark switch.
- To programmatically toggle dark mode, add or remove the `dark` class on `document.documentElement` (Next’s theme provider already respects this):

  ```ts
  const root = document.documentElement;
  root.classList.toggle("dark");
  ```

  Surfaces and text will automatically restyle thanks to the CSS variables defined in `theme.css`.

## Content model

- **Services**: `/content/services/*.md` with frontmatter fields for title, summary, bullets, and FAQs.
- **Case studies**: `/content/work/*.md` capturing client, challenge, solution, results, and metrics.
Update or add new Markdown files and the site will automatically surface content on the corresponding routes.

## Accessibility & performance

- Semantic HTML with focus-visible styles and skip navigation link
- Keyboard friendly navigation with active states
- WCAG AA color contrast via Tailwind tokens
- Next/Image for responsive, lazy-loaded media
- Lighthouse-ready configuration; animations respect `prefers-reduced-motion`

## Deployment

The project is ready for platforms like Vercel. Ensure `npm run build` passes, then connect the repository to your hosting provider.

---

Need help extending the site (CMS integration, dynamic data, analytics)? Reach out to the Corallo Digital team.
