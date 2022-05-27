module.exports = {
	mode: 'jit',
	content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./app.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
	daisyui: {
    themes: [
      'halloween',
    ],
  },
	plugins: [require('@tailwindcss/typography'), require('daisyui')],
};