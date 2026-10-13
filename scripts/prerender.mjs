import { readFile, writeFile, mkdir, rm } from 'node:fs/promises';
import { renderPage, routes } from '../.prerender/entry-server.js';
const template = await readFile('dist/index.html', 'utf8');
const escape = value => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
for (const path of [...routes, '/404']) {
  const { html, seo } = renderPage(path);
  const meta = `<meta name="description" content="${escape(seo.description)}"><link rel="canonical" href="${seo.url}"><meta property="og:type" content="website"><meta property="og:site_name" content="Alex Morgan — Creative Direction"><meta property="og:title" content="${escape(seo.title)}"><meta property="og:description" content="${escape(seo.description)}"><meta property="og:url" content="${seo.url}"><meta property="og:image" content="${escape(seo.image)}"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${escape(seo.title)}"><meta name="twitter:description" content="${escape(seo.description)}"><meta name="twitter:image" content="${escape(seo.image)}"><meta name="robots" content="${seo.found ? 'index,follow' : 'noindex,follow'}">`;
  const output = template.replace(/<title>.*?<\/title>/s, `<title>${escape(seo.title)}</title>`).replace('</head>', meta + '</head>').replace('<div id="root"></div>', '<div id="root">' + html + '</div>');
  const file = path === '/' ? 'dist/index.html' : 'dist' + path + '.html';
  await mkdir(file.slice(0, file.lastIndexOf('/')), { recursive: true });
  await writeFile(file, output);
}
await writeFile('dist/sitemap.xml', '<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' + routes.map(path => `<url><loc>https://vibed-editorial.xavainf.com${path}</loc></url>`).join('') + '</urlset>');
await rm('.prerender', { recursive: true, force: true });
console.log('Prerendered ' + routes.length + ' portfolio routes and a 404 page.');
