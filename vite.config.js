import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	ssr: {
		noExternal: [
			// Problem solved:  "Cannot use import statement outside a module" regarding "@popperjs " inside "sveltestrap"
			// Solution: 		https://github.com/bestguy/sveltestrap/issues/463#issuecomment-1493006040
			'@popperjs/core'
		]
	}
});
