module.exports = {
	purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	darkMode: 'class',
	corePlugins: {
		preflight: false,
    },
	theme: {
		extend: {
			colors: {
				dark: {
					primary: '#191919',
					secondary: '#202020',
				},
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
