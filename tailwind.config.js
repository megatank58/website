module.exports = {
	mode: 'jit',
	purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	variants: {
		extend: {},
	},
	plugins: [require('@tailwindcss/typography'), require('daisyui')],
};