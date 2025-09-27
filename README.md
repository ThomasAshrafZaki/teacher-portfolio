# Teacher Portfolio — React + Vercel


**Project**: Responsive teacher portfolio (multi-page) built with React + Vite + Tailwind.


**Goal:** deliver a production-ready, brandable portfolio site for a teacher ("أ. محمد علي") with polished micro-interactions, logo, WhatsApp contact, social hover glow, gradients (orange→green), and mockup-ready pages.


---


## What is included (all files in this repo):
- `package.json` — scripts + deps
- `vite.config.js` — Vite config
- `index.html` — root html + Google Fonts
- `tailwind.config.cjs`, `postcss.config.cjs` — Tailwind setup
- `src/` — all React source files
- `main.jsx`, `App.jsx`
- `config.js` — single place to edit teacher info / contacts
- `styles/index.css` — Tailwind + custom utilities
- `hooks/useReveal.jsx` — small IntersectionObserver hook for scroll animations
- `components/` — Header, Logo, Home, About, Courses, CourseCard, Contact, CTAButton, Footer
- `public/favicon.svg` — small favicon SVG


---


## Quick start (local)
1. Clone or copy files into a folder.
2. Install dependencies:
```bash
npm install
```
3. Run dev server:
```bash
npm run dev
```
4. Open `http://localhost:5173` (Vite default) and test.


---


## Deploy to Vercel (recommended)
1. Push repo to GitHub.
2. On Vercel choose "Import Project" → select the GitHub repo.
3. Framework Preset: **Vite**. Build command `npm run build`. Output directory `dist`.
4. Optionally set environment variables (none required for the demo). Deploy.


---


## How to customize (one place): `src/config.js`
- Teacher name, title, bio
- Email, WhatsApp number (international format), LinkedIn URL
- Courses list


Change this file and everything on the site updates.


---


## Mockup & Marketing
- Generate laptop + mobile mockups using Smartmockups or Previewed with the deployed link.
- Make a 8–12s screen capture video (record your browser scrolling hero → courses → contact) for social posts.


---


- Prepare the LinkedIn/Facebook post copy + mockup images.