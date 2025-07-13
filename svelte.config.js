import { mdsvex } from 'mdsvex';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex-svelte';
import adapter from '@sveltejs/adapter-cloudflare';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: { adapter: adapter() },
	preprocess: [
		mdsvex({
			extensions: ['.svx'],
			remarkPlugins: [remarkMath],
			rehypePlugins: [rehypeKatex]
		})
	],
	extensions: ['.svelte', '.svx'],
	compilerOptions: {
		runes: true
	}
};

export default config;
