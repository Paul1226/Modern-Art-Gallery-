/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: "#D5966C",
				secondary: "#151515",
				tertiary: "#444444"
			},
			fontFamily: {
				'bshouldersd': ['Big Shoulders Display Variable', 'sans-serif'],
			},
			gridTemplateColumns:{
				'2p':'1fr 1.3fr',
				'3p':'1fr 1fr 1.5fr'
			},
		},
	},
	plugins: [],
}
