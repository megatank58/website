module.exports = {
	mode: 'jit',
	purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	daisyui: {
    themes: [
      'halloween',
    ],
  },
	plugins: [require('@tailwindcss/typography'), require('daisyui')],
};