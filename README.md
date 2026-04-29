# Walker Media

Walker Media is a React/Vite website for two related projects:

- **The Martlet Review** — written essays, commentary, reviews, and social-science analysis.
- **Beyond Good and Legal** — a podcast focused on law, policy, jurisprudence, and philosophy.

## Tech stack

- React
- Vite
- Tailwind CSS

## Project structure

```text
/
├── index.html
├── package.json
├── vite.config.js
├── public/
│   └── martlet-review-logo.png
└── src/
    ├── main.jsx
    ├── WalkerMediaSite.jsx
    └── styles.css
```

## Run locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Then open the local URL shown in your terminal.

## Build

```bash
npm run build
```

The production files will be created in the `dist` folder.

## Deploy with Vercel

1. Push this project to GitHub.
2. Go to Vercel and import the GitHub repository.
3. Use these settings:

```text
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
```

4. Click **Deploy**.

## Deploy with Netlify

Use these settings:

```text
Build Command: npm run build
Publish Directory: dist
```

## Notes

The Martlet Review logo is stored at:

```text
public/martlet-review-logo.png
```

The React code references it as:

```js
const MARTLET_LOGO = "/martlet-review-logo.png";
```
