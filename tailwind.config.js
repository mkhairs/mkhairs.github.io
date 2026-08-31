/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#e8702a',
          hover: '#d2611f',
          glow: 'rgba(232, 112, 42, 0.15)',
        }
      }
    },
  },
  plugins: [],
}
