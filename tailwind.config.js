/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px', // Padding default
    },
    extend: {
      fontFamily : {
        poppins : ['poppins', 'sans-serif'],
      },
      colors: {
        primary: '#ef4444',
        dark: '#020617',
        bgGradientpurple: '#755bc9',
        bgGradientDark: '#1b1b33',
      },
      screens: {
        '2xl': '1320px', // Ukuran untuk breakpoint 2xl (atau sesuai preferensi)
      },
    },
  },
  plugins: [],
}
