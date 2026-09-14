# MD. MOHIUZZAMAN — Portfolio (React)

A modern, component-based personal portfolio built with **React + Vite**.

All content is driven by a single data file so you can update text, projects, experience, certificates, etc. without touching components.

## Quick Start

```bash
cd portfolio
npm install
npm run dev
```

Open the local URL shown in the terminal (usually http://localhost:5173).

## Project Structure

```
portfolio/
├── public/
│   └── assets/          # Put resume.pdf, certificates, awards here
│       ├── academic/
│       ├── certificates/
│       └── awards/
├── src/
│   ├── components/      # One React component per section
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Experience.jsx
│   │   ├── Research.jsx
│   │   ├── Projects.jsx
│   │   ├── Certificates.jsx
│   │   ├── Awards.jsx
│   │   ├── Leadership.jsx
│   │   ├── Skills.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── portfolioData.js   ← EDIT THIS to change content
│   ├── App.jsx
│   ├── index.css              # All styles (same design as original)
│   └── main.jsx
├── index.html
└── package.json
```

## How to Update Content

Open **`src/data/portfolioData.js`**.

Everything is exported as plain objects/arrays:

- `siteConfig` — name, email, GitHub, LinkedIn, year
- `navLinks` — navigation items
- `hero` — hero text, buttons, stats
- `about` — about cards
- `experience` — timeline items
- `research` — thesis + diagram nodes
- `projects` — project cards (just add a new object to the array)
- `certificates` — certificate cards
- `awards` — awards
- `leadership` — leadership cards
- `skills` — skill groups
- `contact` — contact buttons

### Adding a new project

```js
{
  title: "My New Project",
  description: "Short description of what it does.",
  tags: ["React", "Node.js"],
  links: [
    { label: "GitHub ↗", href: "https://github.com/..." },
    { label: "Live Demo ↗", href: "https://..." },
  ],
},
```

### Adding assets (PDFs)

Place files under `public/assets/...` and reference them as `/assets/...` or `assets/...` in the data file.

Example:

```
public/assets/resume.pdf
public/assets/academic/bsc-certificate.pdf
public/assets/awards/best-thesis-award.pdf
```

## Build for Production

```bash
npm run build
```

Output goes to `dist/`. You can deploy the `dist` folder to any static host (Vercel, Netlify, GitHub Pages, etc.).

## Design

Keeps the original dark theme, typography, spacing, cards, timeline, and responsive breakpoints.
