import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import Pages from 'vite-plugin-pages';
import ViteComponents from 'vite-plugin-components';
import ViteIcons, { ViteIconsResolver } from 'vite-plugin-icons';
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
			port: 443
		}
	}
});