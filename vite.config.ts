import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import Pages from 'vite-plugin-pages';
import ViteComponents from 'vite-plugin-components';
import { VitePWA } from 'vite-plugin-pwa';
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
		VitePWA({
			includeAssets: ['favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
			workbox: {
				cleanupOutdatedCaches: false,
			},
			manifest: {
				theme_color: '#202020',
				background_color: '#202020',
				name: 'Megatank58',
				short_name: 'Megatank58',
				start_url: '.',
				display: 'standalone',
				description:
					'Hello there! I am Megatank58 JS/TS developer from India, working on random projects, playing games or maybe writing notes',
				icons: [
					{
						src: '/android-chrome-192x192.png',
						sizes: '192x192',
						type: 'image/png',
						purpose: 'any maskable',
					},
					{
						src: '/android-chrome-512x512.png',
						sizes: '512x512',
						type: 'image/png',
						purpose: 'any maskable',
					},
				],
			},
		}),
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
});
