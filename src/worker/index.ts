/**
 * Worker Entry Point
 *
 * Hono-based Cloudflare Worker. Add your API routes below the health check,
 * then keep the static asset fallback at the bottom to serve the React app.
 */
import { Hono } from 'hono';

const app = new Hono<{ Bindings: Env }>();

// ============================================================================
// API Routes — add your routes here
// ============================================================================

app.get('/api/health', (c) => c.json({ status: 'ok', timestamp: Date.now() }));

// ============================================================================
// Static Asset Fallback — serves the React app (keep at the bottom)
// ============================================================================

app.get('*', (c) => c.env.ASSETS.fetch(c.req.raw));

export default app;
