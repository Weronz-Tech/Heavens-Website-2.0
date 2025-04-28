/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        customGray: '#1A1A1A',
        logoClr: '#631930'
      },
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('tailwind-scrollbar-hide'),
  ],
}