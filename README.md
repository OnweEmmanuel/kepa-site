# kepa-site

The website for [Kepa](https://kepa.pages.dev), a free, private tracker for
subscriptions, debit orders, renewals and warranties.

Astro 5 + TypeScript, static output, no client framework. Plain CSS with
tokens that mirror the app (`lib/app/theme/tokens.dart` in the kepa repo).
Geist and Geist Mono are self-hosted through `@fontsource-variable`. The site
makes no third-party requests: no analytics, no CDNs, no external fonts.

## Commands

| Command | What it does |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run dev` | Dev server on http://localhost:4321 |
| `npm run build` | Type-check (`astro check`) and build to `dist/` |
| `npm run preview` | Serve the built `dist/` |
| `npm run sync-policy` | Copy `../kepa/docs/privacy-policy.md` into `src/content/` |

## Layout

```
src/site.ts           links, stage ('testing' | 'live'), country list
src/faq.ts            questions for the home page and /support
src/styles/           tokens.css (colours, type, space, motion), global.css
src/layouts/Base.astro  head, meta, header/footer, scroll reveals
src/components/       one file per section (Hero, Statement, Features, ...)
src/content/privacy-policy.md   copy of the app's policy, rendered at /privacy/
src/pages/            index, privacy, support, 404
public/               images (webp), favicon, _headers for Cloudflare
```

## Rules carried over from the app

- Orange is a fill (`--primary`) with `--on-primary` on top. Orange text uses
  `--primary-text`. Never white on the bright orange, never orange on silver.
- Cards are flat: 1px `--line` border, radius 14.
- Data (labels, dates, money) is Geist Mono; amounts use tabular figures.
- Every animation has a `prefers-reduced-motion` branch, and the page is
  fully visible without JavaScript.

## Privacy policy

The source of truth is `docs/privacy-policy.md` in the app repo (it is also
bundled in the app). When it changes, run `npm run sync-policy`, check the
diff, and push.

## Going live on Google Play

When Kepa leaves closed testing, set `stage: 'live'` in `src/site.ts`. The
calls to action switch from the tester group to the Play Store listing.

## Deploy (Cloudflare Pages)

Connected to GitHub; every push to `main` deploys.

- Framework preset: Astro
- Build command: `npm run build`
- Output directory: `dist`
- Node version: from `.node-version` (22)

If the project name or a custom domain changes the URL, update `site` in
`astro.config.mjs`.
