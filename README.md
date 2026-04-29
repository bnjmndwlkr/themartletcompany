# Walker Media Site

A Vite + React + Tailwind site for Walker Media, The Martlet Review, and Beyond Good and Legal.

## Local setup

```bash
npm install
npm run dev
```

Then open the local URL shown in your terminal.

## Build

```bash
npm run build
```

## Publish on GitHub

```bash
git init
git add .
git commit -m "Initial Walker Media site"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

## Deploy

Recommended: connect this GitHub repository to Vercel or Netlify.

Build command:

```bash
npm run build
```

Output directory:

```bash
dist
```

## Add the Martlet logo

1. Create a `public` folder in the project root.
2. Add your logo file, for example: `public/martlet-review-logo.png`.
3. In `src/WalkerMediaSite.jsx`, change:

```js
const MARTLET_LOGO = "";
```

to:

```js
const MARTLET_LOGO = "/martlet-review-logo.png";
```
