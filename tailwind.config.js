/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#C1272D',      // Rojo vibrante de la marca
          black: '#1A1A1A',    // Negro carbón para elegancia
          gold: '#C5A059',     // Dorado/Beige para acentos premium
          white: '#F9F9F9',    // Blanco hueso para fondos limpios
        },
        primary: {
          50: '#fdf2f2',
          100: '#fbe1e1',
          200: '#f7c9c9',
          300: '#f1a5a5',
          400: '#e87171',
          500: '#c1272d',      // Color principal de marca
          600: '#b01d22',
          700: '#94181c',
          800: '#7a171a',
          900: '#67181a',
        }
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
