import type {Config} from 'tailwindcss'

import TailwindForms from '@tailwindcss/forms'
import tailwindScrollbar from "tailwind-scrollbar"


export default <Partial<Config>>{

	darkMode: 'class',
	content: [
		"./index.html",
		"./app/**/*.{vue,js,ts,jsx,tsx,vue}",
		"./app/*.{vue,js,ts,jsx,tsx,vue}",
	],
	theme: {
		extend: {
			transitionProperty: {
				'width': 'width',
			},
			colors: {
				waikawa: {
					'50': '#f3f6fa',
					'100': '#e9eef6',
					'200': '#d7dfee',
					'300': '#becae3',
					'400': '#a3afd6',
					'500': '#808ac2',
					'600': '#7479b7',
					'700': '#6265a0',
					'800': '#515482',
					'900': '#464a69',
					'950': '#292b3d',
				},
				shark: {
					'50': '#f7f8f8',
					'100': '#eeeef0',
					'200': '#d9dade',
					'300': '#b8bac1',
					'400': '#91959f',
					'500': '#737884',
					'600': '#5d616c',
					'700': '#4c4f58',
					'800': '#41434b',
					'900': '#393b41',
					'950': '#27282c',
				}
			}
		},
		fontSize: {
			xs: "0.425rem", //
			sm: "0.625rem", // 10px
			//base: "0.875rem", // 14px
			base: "0.75rem", // 14px
			xl: "1.125rem", // 18px
			"2xl": "1.25rem", //20px
			"3xl": "1.5rem", // 24px
			"4xl": "1.875rem", // 30px
			"5xl": "2.25rem", // 36px
			"6xl": "3rem", // 48px
		},
		screens: {
			tablet: "575px",
			desktop: "768px",
		},
	},
	plugins: [
		TailwindForms,
		tailwindScrollbar({ nocompatible: true }),
	]

}

