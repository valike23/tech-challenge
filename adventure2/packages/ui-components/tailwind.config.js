/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Jost', 'sans-serif'],
			  },
			  fontSize: {
				h1: ['24px', '35px'],
				h2: ['20px', '29px'],
				h3: ['18px', '26px'],
				h4: ['14px', '20px'],
				body1: ['16px', '23px'],
				body2: ['15px', '22px'],
				body3: ['13px', '19px'], 
			  },
			  fontWeight: {
				bold: '700',
				regular: '400',
				semibold: '600',
			  },
		  colors: {
			primary: '#AD1FEA',  
			secondary: '#4661E6', 
			accent: '#F49F85',   
			neutral: '#F2F4FF',  
			textDark: '#3A4374', 
			textLight: '#647196', 
			success: '#62BCFA',  
			danger: '#FF7BAD', 
			white: '#FFFFFF',
		  },
		},
	  },
	plugins: []
};
