# Portfolio Static

This is a standalone static version of the portfolio. Project and skill content
comes from `src/lib/data.ts`; it does not request data from the API used by the
assignment project.

## Local development

```bash
npm ci
npm run dev
```

## Build

```bash
npm run build
```

The static site is generated in `out/`. Vercel can deploy this project with the
root directory set to this folder and the default Next.js build settings.

Update `src/lib/data.ts` to change the projects and skills shown on the site.
