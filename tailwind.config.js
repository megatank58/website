module.exports = {
	mode: 'jit',
	purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	darkMode: 'class',
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
