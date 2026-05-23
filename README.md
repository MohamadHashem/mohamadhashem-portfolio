# Mohamad Hashem Portfolio

A modern portfolio website built with **React**, **Vite**, and **Tailwind CSS**, automatically deployed to GitHub Pages.

🌐 **Live Site:** https://mohamadhashem.github.io/mohamadhashem-portfolio/

## Quick Start

### Development

```bash
npm install
npm run dev
```

The app runs on `http://localhost:5173` with hot module reloading.

### Build & Deploy

```bash
npm run deploy
```

This builds the project and deploys to GitHub Pages via `gh-pages`.

## Automatic Deployment

The project includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that:
- ✅ Automatically builds on every push to `main`
- ✅ Deploys to GitHub Pages
- ✅ Uses Node.js 18 with cached dependencies

## Project Structure

```
src/
├── components/    # React components
├── data/         # Portfolio data
├── App.jsx       # Main app component
├── index.css     # Global styles
└── main.jsx      # Entry point
```

## Tech Stack

- **React** 19.2 - UI library
- **Vite** 8.0 - Build tool & dev server
- **Tailwind CSS** 4.3 - Utility-first CSS
- **Framer Motion** - Animations
- **React Icons** - Icon library

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run deploy` - Build and deploy to GitHub Pages
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Configuration

The `base` path in `vite.config.js` is set to `/mohamadhashem-portfolio/` to work correctly with GitHub Pages subpath deployment.
