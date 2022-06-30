/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	daisyui: {
		themes: [
			{
				halloween: {
					primary: '#2563eb',
					secondary: '#2564f7',
					accent: '#ce9e02',
					neutral: '#1b1d1d',
					'base-100': '#212121',
					info: '#3387E1',
					success: '#16a34a',
					warning: '#FABA61',
					error: '#dc2626'
				}
			}
		]
	},
	plugins: [require('@tailwindcss/typography'), require('daisyui')]
};
