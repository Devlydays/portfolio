# Phongphisit Phumin - Portfolio Website

## Project Overview

A clean, responsive portfolio for Phongphisit Phumin. It presents React and
JavaScript development skills alongside practical experience with SAP FI-CO,
enterprise workflow support, tax data management, audit systems, and budget
workflow digitization.

**Repository:** [https://github.com/Devlydays/portfolio](https://github.com/Devlydays/portfolio)  
**Live Demo:** [https://devlydays.github.io/portfolio/](https://devlydays.github.io/portfolio/)

## Target Roles

- Frontend Developer
- Full Stack Developer
- Junior SAP Consultant

## Tech Stack

- React JS and JavaScript
- Vite
- Tailwind CSS
- React Router
- Framer Motion
- Lucide React
- GitHub Pages with `gh-pages`

## Features

- Professional single-page layout with responsive navigation
- Resume-led profile, education, work experience, skills, and contact content
- Four project cards prepared with planned GitHub Pages and repository URLs
- Budget Workflow Digitization case study
- Subtle fade-up motion with reduced-motion support
- GitHub Pages configuration for the `/portfolio/` project path

## Folder Structure

```text
public/
  resume/                 Downloadable PDF resume
src/
  components/             Reusable navigation, cards, title, and reveal UI
  data/                   Resume, project, skill, and case-study content
  sections/               Portfolio page sections
  App.jsx                 Page assembly and routing
  main.jsx                App entry and router base path
  index.css               Tailwind theme and shared component styles
vite.config.js            Vite plugins and `/portfolio/` Pages base path
```

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

Open the local URL printed by Vite.

## Build

```bash
npm run build
```

## GitHub Pages Deployment

This project targets the repository `Devlydays/portfolio`. Vite is configured
with `base: '/portfolio/'`, which matches the live URL:
`https://devlydays.github.io/portfolio/`.

To publish after pushing the source branch:

```bash
npm run deploy
```

The `predeploy` script automatically runs the production build before
publishing `dist/` to the `gh-pages` branch. In GitHub repository
**Settings > Pages**, configure deployment from the `gh-pages` branch and
the `/ (root)` folder.

## Push To GitHub

If this local folder has not yet been initialized as a Git repository:

```bash
git init
git branch -M main
git remote add origin https://github.com/Devlydays/portfolio.git
git add .
git commit -m "Prepare portfolio for GitHub Pages"
git push -u origin main
```

Then deploy the Pages branch:

```bash
npm run deploy
```

## Resume PDF

The download link expects the real resume PDF at:

```text
public/resume/Phongphisit-Phumin-CV-2026.pdf
```

When updating the resume, replace that PDF while keeping the same filename,
or update `resumePath` in `src/data/profile.js`.

## Notes For Customization

- Confirm each project repository and live-demo URL in `src/data/projects.js`
  once those projects are published.
- Add real project screenshots later by updating `src/components/ProjectCard.jsx`.
