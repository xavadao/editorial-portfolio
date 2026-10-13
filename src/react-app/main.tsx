/**
 * Client Entry Point
 *
 * This file initializes the React application.
 * The App component contains React Router and React Query setup.
 */

import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './app';
import './globals.css';

const rootElement = document.getElementById('root');

if (!rootElement) {
	throw new Error('Root element not found');
}

if (rootElement.hasChildNodes()) hydrateRoot(rootElement, <App />);
else createRoot(rootElement).render(<App />);
