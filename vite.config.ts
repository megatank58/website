import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import Pages from 'vite-plugin-pages';
import ViteComponents from 'vite-plugin-components';
import ViteIcons, { ViteIconsResolver } from 'vite-plugin-icons';
import { resolve } from 'path';
import { readdirSync, readFileSync } from 'fs';
import { parseMarkdown } from './src/util/rawParseMarkdown';
import { trim } from './src/util/Trim';
import { Blog } from "./src/types/Blog";

const BLOGS: Blog[] = [];

readdirSync('./blogs').forEach((blog) => {
	const name = blog.replace('.md', '').replace(/-/g, ' ');
	const content = parseMarkdown(readFileSync('./blogs/' + blog, 'utf8'));
	BLOGS.push({
		name,
		content,
		header: trim(content, 256),
	});
});

export default defineConfig({
	resolve: {
		alias: {
			'~/': `${resolve(__dirname, 'src')}/`,
		},
	},
	define: {
		BLOGS,
	},
	plugins: [
		Vue(),
		Pages(),
		ViteComponents({
			customComponentResolvers: [
				ViteIconsResolver({
					componentPrefix: '',
				}),
			],
		}),
		ViteIcons(),
	],
	server: {
		hmr: {
			protocol: 'wss',
			port: 443,
		},
	},
	optimizeDeps: {
		include: ['vue', 'vue-router', '@vueuse/core'],
		exclude: ['vue-demi'],
	},
});
