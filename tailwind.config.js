module.exports = {
	mode: 'jit',
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	daisyui: {
    themes: [
      'halloween',
    ],
  },
	plugins: [require('@tailwindcss/typography'), require('daisyui')],
};