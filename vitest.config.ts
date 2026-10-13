import { defineWorkersConfig } from '@cloudflare/vitest-pool-workers/config';

export default defineWorkersConfig({
	test: {
		watch: false,
		include: ['test/**/*.test.ts'],
		poolOptions: {
			workers: {
				main: './src/worker/index.ts',
				wrangler: {
					configPath: './wrangler.vitest.jsonc',
				},
				miniflare: {
					compatibilityDate: '2026-01-07',
					compatibilityFlags: ['nodejs_compat'],
				},
			},
		},
	},
});
