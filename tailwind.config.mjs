/** @type {import('tailwindcss').Config} */

export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx,vue}",
    './node_modules/preline/preline.js',
  ],
  theme: {
    extend: {
      transitionProperty: {
        'width': 'width',
      },
      colors: {
        dark: {
          50: '#e6f0f3',
          100: '#cce1e7',
          200: '#99c3cf',
          300: '#66a5b7',
          400: '#33879f',
          500: '#006987',
          600: '#00556b',
          700: '#00414f',
          800: '#002d33',
          900: '#001917',
          950: '#000c0c',
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
      desktop: "720px",
    },
  },
  plugins: [
    require('preline/plugin'),
    require('@tailwindcss/forms'),
  ],

}

