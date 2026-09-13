# Kavish Agarwal Portfolio

An intentionally lightweight Astro portfolio for Kavish Agarwal: technology leader, enterprise architect, principal engineer, and engineering multiplier.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Astro.

## Build locally

```bash
npm run build
npm run preview
```

The production output is generated in `dist/` as static HTML, CSS, JavaScript, and assets.

## GitHub Pages

The repository includes `.github/workflows/deploy.yml`. Pushes to `main` build and deploy the static site with the official GitHub Pages Actions flow.

1. In repository Settings → Pages, select **GitHub Actions** as the source.
2. Push to `main` or run the workflow manually.
3. A user site is available at `https://OWNER.github.io` when the repository is named `OWNER.github.io`.
4. A project site is available at `https://OWNER.github.io/REPOSITORY` for other repository names. The workflow sets Astro’s base path automatically.

The build also works locally for a project subpath:

```bash
PUBLIC_SITE_URL=https://OWNER.github.io PUBLIC_BASE_PATH=/REPOSITORY npm run build
```

No server, database, paid service, or runtime Node.js process is required.

## Content maintenance

Most portfolio content is kept in `src/data/content.ts` so shared cards, pages, and metadata stay consistent. The public downloadable resume is `public/Kavish-Agarwal-Resume.txt`.

To add a case study, add a `CaseStudy` entry in `src/data/content.ts`; the Work index and static `/work/[slug]` route will include it automatically. To add an Engineering Lab, add a `Lab` entry; the Labs index and static `/labs/[slug]` route follow the same pattern.

Long-form Markdown/MDX can be introduced later under `src/content/` without changing the static hosting model.

## Public-safe content

Professional case studies are intentionally described at a high level. They focus on role, architecture thinking, leadership approach, and lessons while omitting confidential implementation details, customer information, and non-public operating metrics. Public Engineering Lab repositories are independent personal POCs built with synthetic data.
