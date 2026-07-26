# Edusity (React + Vite)

Edusity is a responsive React front-end built with Vite. This repository contains the UI for an educational platform demo featuring a modern component structure, responsive layout, and media assets.

## Features

- Built with React and Vite for fast development and HMR.
- Component-driven layout located under `src/Components`.
- CSS modules / component-level CSS in `src/Components/*/*.css`.
- Simple, readable folder structure ready for extension.

## Tech Stack

- React (JSX)
- Vite (dev server + build)
- Plain CSS (component-scoped files)

## Local setup (Development)

1. Clone the repository (or skip if already on your machine):

```bash
git clone https://github.com/shraddhabca96-oss/Edusity_react.git
cd Edusity_react
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

Open http://localhost:5173 (or the printed URL) to view the app.

## Build for production

```bash
npm run build
npm run preview
```

## Available scripts

- `npm run dev` — Start Vite dev server with HMR
- `npm run build` — Build production assets
- `npm run preview` — Preview production build locally

## Project structure

- `index.html` — App entry HTML
- `src/` — Source files
	- `main.jsx` — App bootstrap
	- `App.jsx` — Top-level app component
	- `index.css` — Global styles
	- `assets/` — Images and media
	- `Components/` — Feature components (each in its own folder)
		- `Navbar/`, `Hero/`, `Programs/`, `Campus/`, `Testimonials/`, `Contact/`, `Footer/`, etc.

## Notes about this workspace

- This repo already contains component scaffolding and assets. Review `src/Components` to customize layout and copy.
- If you want to use TypeScript, migrate files to `.tsx` and add a `tsconfig.json` and type-aware ESLint config.

## Contributing

1. Fork the repo and create a feature branch: `git checkout -b feat/your-feature`
2. Make changes and commit with clear messages.
3. Push to your fork and open a Pull Request.

## License

Specify a license for your project (e.g., MIT). Add a `LICENSE` file if you want to make this explicit.

## Contact

If you need help or want this pushed to your GitHub remote from this machine, ensure your local Git is authenticated (HTTPS credential helper or SSH key). If push fails, I will show the error and next steps.

---

Generated/updated README to document local development and repo structure.
