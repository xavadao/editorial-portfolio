import { renderToString } from 'react-dom/server';
import { createMemoryRouter, RouterProvider } from 'react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { appRoutes } from './react-app/app';
import { pageSeo, routes } from './react-app/seo';
export { routes };
export function renderPage(path: string) {
  const router = createMemoryRouter(appRoutes, { initialEntries: [path] });
  const html = renderToString(<QueryClientProvider client={new QueryClient()}><RouterProvider router={router} /></QueryClientProvider>);
  router.dispose();
  return { html, seo: pageSeo(path) };
}
