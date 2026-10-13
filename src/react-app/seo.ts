import { PROJECTS } from './pages/WorkPage';
export const siteUrl = 'https://vibed-editorial.xavainf.com';
export const siteName = 'Alex Morgan — Creative Direction';
export const siteDescription = 'A sample creative direction portfolio featuring brand identity, art direction, editorial design, and photography projects.';
export const routes = ['/', '/about', '/work', '/contact', ...PROJECTS.map(project => '/work/' + project.id)];
export function pageSeo(pathname: string) {
  const path = pathname.replace(/\/$/, '') || '/';
  const project = PROJECTS.find(project => path === '/work/' + project.id);
  const pages: Record<string, [string, string]> = {
    '/': ['Creative direction portfolio', siteDescription],
    '/about': ['About Alex Morgan', 'Explore the sample creative profile, approach, and experience behind the Alex Morgan portfolio.'],
    '/work': ['Selected work', 'Browse six sample projects across branding, art direction, photography, visual identity, and fashion editorial.'],
    '/contact': ['Contact', 'Try the Alex Morgan demo contact experience. Messages are not sent or saved.'],
  };
  const [title, description] = project ? [project.title, 'Sample portfolio project. ' + project.desc] : pages[path] ?? ['Page not found', 'The requested portfolio page does not exist.'];
  const image = project?.img ?? PROJECTS[0].img;
  const fullTitle = title + ' | ' + siteName;
  const url = siteUrl + path;
  const structuredData: Record<string, unknown> = project ? { '@context': 'https://schema.org', '@type': 'CreativeWork', name: project.title, description, url, image } : { '@context': 'https://schema.org', '@type': 'WebSite', name: siteName, description: siteDescription, url: siteUrl };
  return { title: fullTitle, description, image, url, structuredData, found: !!project || path in pages };
}
