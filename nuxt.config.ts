import { defineNuxtConfig } from 'nuxt';
import { resolve } from 'path';

export default defineNuxtConfig({
	head: {
		charset: 'utf-8',
		viewport: 'width=device-width, initial-scale=1',
		meta: [
			{ name: 'og:title', content: 'Megatank58' },
			{
				name: 'og:description',
				content:
					'Hello there! I am Megatank58 JS/TS developer from India, working on random projects, playing games or maybe writing notes',
			},
			{
				name: 'description',
				content:
					'Hello there! I am Megatank58 JS/TS developer from India, working on random projects, playing games or maybe writing notes',
			},
			{ name: 'og:site_name', content: 'megatank58.me' },
			{ name: 'theme-color', content: '#202020' },
			{ name: 'og:url', content: 'https://megatank58.me' },
			{ name: 'og:type', content: 'website' },
			{ name: 'og:image', content: 'https://megatank58.me/profile.png' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
		],
		link: [
			{ rel: 'icon', href: 'https://megatank58.me/favicon.ico' },
			{ rel: 'apple-touch-icon', href: 'https://megatank58.me/apple-touch-icon.png' },
		],
	},
	build: {
		postcss: {
			postcssOptions: require('./postcss.config.js'),
		},
	},
	css: ['@/assets/css/main.css'],
	vite: {
		resolve: {
			alias: {
				'~/': `${resolve(__dirname, 'src')}/`,
			},
		},
		server: {
			host: true,
			hmr: {
				protocol: 'wss',
			},
		},
	},
});
