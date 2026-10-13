import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { pageSeo } from '../seo';
export function PageHead() {
  const { pathname } = useLocation();
  const seo = pageSeo(pathname);
  useEffect(() => {
    document.title = seo.title;
    const values: Record<string, string> = { description: seo.description, 'og:title': seo.title, 'og:description': seo.description, 'og:url': seo.url, 'og:image': seo.image, 'twitter:title': seo.title, 'twitter:description': seo.description, 'twitter:image': seo.image };
    for (const [name, content] of Object.entries(values)) {
      const attribute = name.startsWith('og:') ? 'property' : 'name';
      let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${name}"]`);
      if (!element) { element = document.createElement('meta'); element.setAttribute(attribute, name); document.head.appendChild(element); }
      element.content = content;
    }
    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical); }
    canonical.href = seo.url;
  }, [pathname]);
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(seo.structuredData).replace(/</g, '\u003c') }} />;
}
