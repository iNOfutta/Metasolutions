/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors:{
        primary: '#1B98E0',
        secondary: '#13293D',
        terciary: '#E8F1F2',
        fourth: '#006494',
        fifth: '#247BA0'
      }
    },
  },
  plugins: [],
}

