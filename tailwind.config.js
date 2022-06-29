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
					neutral: '#1b1d1d',
					'base-100': '#212121',
					info: '#2563eb',
					success: '#16a34a',
					warning: '#daf23a',
					error: '#dc2626',
				},
			},
		],
	},
	plugins: [require('@tailwindcss/typography'), require('daisyui')],
};
