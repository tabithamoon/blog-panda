/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'cerulean': '#007BA7',
        'truegray': '#202020',
        'truedarkgray': '#161616'
      },
      fontFamily: {
        'bsod': ['Segoe UI', 'Open Sans', 'sans-serif']
      },
    },
  },
  plugins: [],
}

