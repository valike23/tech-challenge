/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}', '../../packages/**/*.{html,js,svelte,ts}'],
	darkMode: "class",
	theme: {
		screens: { md: {max: "1050px"}, sm: {max: "550px"}},
		extend: {
			colors: {
				black: { "900_00" : "#00000000"},
				blue: { 100: "#4661E6", 300: "#62bcfa", 500: "#F2F4FF", "100_01": "#ced6ff" },
			}
		}
	},
	plugins: []
};
