/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx,vue}",
    './node_modules/preline/preline.js',
  ],
  theme: {
    extend: {},
    fontSize: {
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

