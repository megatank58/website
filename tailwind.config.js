module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './pages/**/*.vue',
    './nuxt.config.{js,ts}',
  ],
  darkMode: 'media',
  theme: {
    extend: {
      textColor: {
        primary: '#f3f3f3',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
