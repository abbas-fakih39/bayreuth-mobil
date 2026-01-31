/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./*.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#9EC446',
          blue: '#1A6B8F',
          dark: '#114B63',
          light: '#F0F9FB',
        }
      },
      fontFamily: {
        sans: ['Montserrat', 'Roboto'],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      }
    },
  },
  plugins: [],
}