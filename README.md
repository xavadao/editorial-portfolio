# Alex Morgan — Creative Direction

A standalone editorial design portfolio demo built with React, React Router, Vite, and Tailwind CSS.

[Live demo](https://vibed-editorial.xavainf.com) · [View source on GitHub](https://github.com/xavadao/editorial-portfolio)

## Features

- Responsive home, about, work, and contact pages.
- Project filtering, image galleries, and project detail navigation.
- Scroll reveals and carefully styled typography.
- Static hosting on Cloudflare Workers Static Assets.

## Install and develop

Requires Node.js 22 or later and pnpm.

```bash
pnpm install
pnpm dev
```

## Build and preview

```bash
pnpm build
pnpm preview
```

The production build is written to `dist`. Preview uses Wrangler to test the same static routing used in production.

## Deploy

Authenticate Wrangler with an account that can manage the configured Cloudflare account and `xavainf.com` zone:

```bash
pnpm exec wrangler login
pnpm deploy
```

`wrangler.jsonc` configures the `vibed-editorial.xavainf.com` custom domain. Update the account ID and domain when deploying your own copy.

## Demo limitations

Portfolio identities, project descriptions, testimonials, and contact details are sample content. The contact form demonstrates a confirmation state in the browser; it does not send email or save submissions. Social and journal links are illustrative. Images load from Unsplash and fonts load from Google Fonts, so those services need to be reachable. There is no authentication, database, or backend API.

## Search and accessibility

The Vite build also renders every bundled route to real HTML with per-page metadata, canonical URLs, and truthful sample structured data. React hydrates that markup and preserves client navigation. Missing routes serve a 404 page. Robots, sitemap, and `llms.txt` describe the demo scope, and every page includes a keyboard accessible “Made with XavaInf” badge fixed to the bottom-right while scrolling and a visible GitHub source link in the footer. The badge respects device safe areas and yields to the mobile menu.

## Open source

The source is publicly available at [xavadao/editorial-portfolio](https://github.com/xavadao/editorial-portfolio). Demo disclosures remain part of the page content.

## License

The code is available under the [MIT License](LICENSE). See [Third-party notices](THIRD_PARTY_NOTICES.md) for external imagery, fonts, and other assets; their rights are separate from the code license.
