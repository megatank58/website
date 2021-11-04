module.exports = {
	mode: 'jit',
	purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				dark: {
					primary: '#202020',
					secondary: '#191919',
				},
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
