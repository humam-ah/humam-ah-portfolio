/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#1e40af',
        secondary: '#64748b',
        dark: '#1e293b',
      },
      screens: {
        '2x1': '1320px',
      }
    },
  },
  plugins: [],
}