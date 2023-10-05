/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'neutralSilver': '#F5F7F4',
        'neutralDGrey': '#4D4D4D',
        'brandPrimary': '#4CAF4F',
        'gray900': '#717171',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

