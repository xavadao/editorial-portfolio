import { env, SELF } from 'cloudflare:test';
import { describe, expect, it } from 'vitest';

describe('webapp worker loader bootstrap', () => {
	it('serves the health endpoint inside a Workers runtime', async () => {
		expect(env).toBeDefined();

		const response = await SELF.fetch('http://example.com/api/health');

		expect(response.status).toBe(200);
		await expect(response.json()).resolves.toMatchObject({
			status: 'ok',
		});
	});

	it('executes worker request handlers with request bodies', async () => {
		const response = await SELF.fetch('http://example.com/api/echo', {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify({ value: 'loader-check' }),
		});

		expect(response.status).toBe(200);
		await expect(response.json()).resolves.toMatchObject({
			echo: {
				value: 'loader-check',
			},
		});
	});
});
