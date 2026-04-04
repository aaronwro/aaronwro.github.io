# aaronwro.github.io

Personal homepage for Aaron Wroblewski, deployed to GitHub Pages.

## Stack

- React 16 (Create React App / react-scripts 5)
- Plain CSS + Font Awesome 4.4.0 icons
- Google Analytics (UA-65956524-1)
- Deployed at: https://aaronwro.github.io

## Commands

```
npm start        # local dev server
npm test         # run tests
npm run build    # production build
npm run deploy   # build + push to gh-pages branch
```

## Architecture

Most visible page content lives in **`public/index.html`**, not in React components.
`src/App.js` only renders an empty `<header>` — the name display, pronunciation
guide (🚣🙏🎿), and social links are all static HTML in `public/index.html`.

- Styles: `public/css/styles.css`, `public/css/EmojiSymbols.css`
- Analytics: `public/js/googleanalytics.js`
- PWA manifest: `public/manifest.json` (service worker is present but unregistered)

## Deployment

`npm run deploy` builds then pushes `build/` to the `gh-pages` branch automatically.
Never commit directly to the `gh-pages` branch.

## Security notes

Remaining vulnerabilities in `npm audit` are all transitive deps inside
`react-scripts@5.0.1` with no upstream fix. They are build-time only and do not
affect the production bundle. `package.json` uses `overrides` to pin `nth-check`
and `underscore` to patched versions.
