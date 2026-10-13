/**
 * App Component — Editorial Portfolio
 *
 * Routing: React Router v7 library mode — createBrowserRouter + RouterProvider.
 * - Import from 'react-router' only. Never from 'react-router-dom'.
 */

import { createBrowserRouter, RouterProvider, Outlet, useLocation } from 'react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useEffect } from 'react';

import Nav from './components/Nav';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import WorkPage from './pages/WorkPage';
import WorkDetailPage from './pages/WorkDetailPage';
import ContactPage from './pages/ContactPage';

/** Reset scroll position on every route change — prevents IntersectionObserver
 *  from seeing below-fold elements as already-intersecting from a prior scroll. */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 1000 * 60 * 5,
			refetchOnWindowFocus: false,
		},
	},
});

function RootLayout() {
	return (
		<>
			<ScrollToTop />
			<Nav />
			<Outlet />
			<Footer />
		</>
	);
}

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		children: [
			{ index: true, element: <HomePage /> },
			{ path: 'about', element: <AboutPage /> },
			{ path: 'work', element: <WorkPage /> },
			{ path: 'work/:id', element: <WorkDetailPage /> },
			{ path: 'contact', element: <ContactPage /> },
		],
	},
]);

export default function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
		</QueryClientProvider>
	);
}
