/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textShadow: {
        'cyan': '0px 0px 10px rgba(0, 255,255)',
      },
    },
  },
  plugins: [
    require('tailwindcss-textshadow'),
  ],
}

