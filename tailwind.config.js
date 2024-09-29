/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px', // Padding default
    },
    extend: {
      colors: {
        primary: '#ef4444',
        dark: '#020617',
      },
      screens: {
        '2xl': '1320px', // Ukuran untuk breakpoint 2xl (atau sesuai preferensi)
      },
    },
  },
  plugins: [],
}
