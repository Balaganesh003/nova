/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3F52E1',
        accent: '#324871',

        'accent-dark': '#071530',
      },
      screens: {
        xw: '570px',
        xl: '1200px',
      },
      aspectRatio: {
        '4/3': '4 / 3',
      },
      boxShadow: {
        equal: '0 2px 8px rgba(0,0,0,.12)',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
