import type { Config } from 'tailwindcss'

export default {
	content: ['./src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			animation: {
				opacity: 'opacity 1s ease-in-out forwards'
			}
		}
	},
	plugins: []
} satisfies Config
