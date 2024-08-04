/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'Noto-San':[ "Noto Sans", 'sans-serif'],
        'Roboto':["Roboto", 'sans-serif'],
        'style':["Pacifico", 'cursive']
      }
    },
  },
  plugins: [],
}

