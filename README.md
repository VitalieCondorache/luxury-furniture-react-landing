# MobilaLux

Responsive furniture and interior design landing page built with React and Vite.

MobilaLux presents a fictional custom furniture studio through a polished, conversion-focused page with multilingual content, project highlights, testimonials, and a contact form.

## Features

- Responsive layout for desktop, tablet, and mobile screens
- Romanian and English language switcher
- Selected language persisted with `localStorage`
- Hero section with primary conversion actions
- Services, portfolio, about, testimonials, and contact sections
- Data-driven content stored separately from the UI in `src/content.js`
- Accessible navigation labels, form fields, buttons, and image alternative text
- Contact form integration prepared for FormSubmit
- Production build powered by Vite

## Tech Stack

- React 19
- Vite 8
- JavaScript (ES modules)
- CSS3 with responsive grid and flexbox layouts
- Google Fonts: Playfair Display and Plus Jakarta Sans
- Font Awesome icons
- Oxlint

## Getting Started

### Prerequisites

- Node.js 20 or newer
- npm 10 or newer

### Installation

Clone the repository and move into the React project directory:

```bash
npm install
```

### Run locally

Start the Vite development server:

```bash
npm run dev
```

Open the local URL shown in the terminal, usually:

```text
http://localhost:5173
```

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the development server with hot module replacement |
| `npm run build` | Creates an optimized production build in `dist/` |
| `npm run preview` | Serves the production build locally |
| `npm run lint` | Runs Oxlint against the project |

## Project Structure

```text
react-landing/
├── public/                 # Public static assets
├── src/
│   ├── assets/             # Project assets
│   ├── App.jsx             # Main page and reusable section components
│   ├── App.css             # Page layout and component styles
│   ├── content.js          # Romanian and English content
│   ├── index.css           # Global styles and design tokens
│   └── main.jsx            # React application entry point
├── index.html              # HTML entry point and external font/icon imports
├── package.json             # Scripts and dependencies
└── vite.config.js           # Vite configuration
```

## Content and Integrations

The project is a frontend demonstration. The portfolio imagery is loaded from Unsplash, while the contact form is configured for FormSubmit. Before using this page for a real business, update the following values:

- FormSubmit email address and redirect URL in `src/App.jsx`
- Phone number, address, and social media links
- Portfolio images and project information
- Testimonials and business statistics
- SEO metadata in `index.html`

## Production Build

Create and locally preview the production build:

```bash
npm run build
npm run preview
```

The generated files are placed in the `dist/` directory and can be deployed to Vercel, Netlify, GitHub Pages, or any static hosting provider.

## Design Notes

The interface uses a warm editorial visual direction suited to an interior design brand. Playfair Display creates a premium display hierarchy, while Plus Jakarta Sans keeps body copy and controls readable. The layout uses CSS custom properties, responsive grids, subtle motion, and high-contrast calls to action.

## Status

This project is an actively developed portfolio demonstration. Business content, contact details, and production integrations should be replaced before launch.

## License

This project is available for portfolio and educational use. Replace the demo content and verify image and third-party asset licenses before commercial use.
