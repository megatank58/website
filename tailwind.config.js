module.exports = {
	mode: 'jit',
	content: [
		'./components/**/*.{js,vue,ts}',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./app.vue',
		'./plugins/**/*.{js,ts}',
		'./nuxt.config.{js,ts}',
	],
	daisyui: {
		themes: [
			{
				halloween: {
					primary: '#2563eb',

					secondary: '#2564f7',

					accent: '#ce9e02',

					neutral: '#181818',

					'base-100': '#202020',

					info: '#43B0CB',

					success: '#18db8d',

					warning: '#F8CE6D',

					error: '#E34A57',
				},
			},
		],
	},
	plugins: [require('@tailwindcss/typography'), require('daisyui')],
};
