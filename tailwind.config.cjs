const colors = require('tailwindcss/colors')
// const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,md,mdx,svelte,tsx,vue}'],
	theme: {
		container: {
			// center: true,
			// padding: "2rem",
			// screens: {
			// 	"2xl": "1400px",
			// },
		},
		fontFamily: {
			// heading: ["var(--font-heading)", ...fontFamily.sans],
		},
		colors: {
			accent: colors.cyan[300],
		},
		plugins: [],
	}
}
