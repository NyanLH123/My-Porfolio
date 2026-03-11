# Nyan Linn Htet – Portfolio

A minimal, two-scroll portfolio for a full-stack developer (PHP & MERN, backend-focused). Built with **React**, **Vite**, **Tailwind CSS**, **framer-motion**, and **react-intersection-observer**.

## Features

- **Hero** – Full-screen gradient (purple → indigo), name/tagline animations, scroll cue
- **About** – Bio, soft skills, tech icons (PHP, Node.js, React, MySQL, Git, Figma)
- **Projects** – Grid of project cards with hover scale/shadow and scroll reveal
- **Contact** – Email, GitHub, optional LinkedIn, “Email Me” CTA
- **Footer** – Copyright and social links
- Scroll-triggered fade-in/slide-up via `ScrollReveal`
- Responsive layout (mobile → desktop)
- Fixed nav with Resume link

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Customize

- **Contact & projects** – Edit `src/config.js` (email, GitHub, LinkedIn, project list).
- **Resume** – Put your PDF in `public/resume.pdf` so the nav “Resume” link works.
- **Content** – Adjust copy in `src/components/` (Hero, About, Projects, Contact, Footer).

## Build & deploy

```bash
npm run build
```

Deploy the `dist/` folder to **Netlify**, **Vercel**, or **GitHub Pages**. Connect your repo for automatic deploys on push.

## Tech stack

- React 19 + Vite 7
- Tailwind CSS 4
- framer-motion (animations)
- react-intersection-observer (scroll-triggered visibility)
