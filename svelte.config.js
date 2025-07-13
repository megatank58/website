import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-cloudflare';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: { adapter: adapter() },
	preprocess: [mdsvex()],
	extensions: ['.svelte', '.svx'],
	compilerOptions: {
		runes: true,
	}
};

export default config;
