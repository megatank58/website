import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import Pages from 'vite-plugin-pages';
import ViteComponents from 'vite-plugin-components';
import { resolve } from 'path';
export default defineConfig({
	resolve: {
		alias: {
			'~/': `${resolve(__dirname, 'src')}/`,
		},
	},
	plugins: [
		Vue(),
		Pages(),
		ViteComponents(),
	],
	server: {
		host: true,
		hmr: {
			protocol: 'wss',
			port: 443,
		},
	},
	optimizeDeps: {
		include: ['vue', 'vue-router'],
		exclude: ['vue-demi'],
	},
});
