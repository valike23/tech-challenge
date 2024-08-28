/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: "class",
	theme: {
		screens: { md: {max: "1050px"}, sm: {max: "550px"}},
		extend: {
			colors: {
			  black: { "900_00": "#00000000" },
			  blue: { 100: "#4661E6", 300: "#62bcfa", 500: "#F2F4FF", "100_01": "#ced6ff" },
			  blue_gray: {
				100: "#373F68",
				300: "#8c92b3",
				400: "#647196",
				700: "#3a4374",
				800: "#373f68",
				
			  },
			  deep_orange: { a100: "#fab57a", a100_01: "#f49f85" },
			  deep_purple: { a200: "#a337f6" },
			  gray: { 50: "#f7f8fd", 100: "#f2f4fe", 900: "#373F68", "100_01": "#f2f4ff", "100_bf": "#f2f4febf" },
			  indigo: {
				100: "#cdd2e4",
				"100_01": "#c0c4dc",
				a100: "#7c91f9",
				a100_01: "#8396f7",
				a400: "#4661e6",
				a400_3f: "#4661e63f"
			  },
			  light_blue: { a100: "#7ad8fa" },
			  pink: { 400: "#e84d6f" },
			  purple: { a200: "#c75af6", a700: "#ad1fea" },
			  red: { 700: "#d73737", a100: "#e9887b" },
			  white: { a700: "#fffefe", a700_01: "#ffffff", a700_bf: "#ffffffbf" },
			},
			boxShadow: { xs: "0 10px 40px -7px #373f6859" },
			backgroundImage: { gradient: "radial-gradient(219deg,#e84d6f,#a337f6,#27a6ec)" },
			fontFamily: { jost: "Jost" },
		  },
		},
	
	plugins: []
};
