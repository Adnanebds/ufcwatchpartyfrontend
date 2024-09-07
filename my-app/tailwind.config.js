/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-gray': '#212121',
        'red-primary': '#D32F2F',
        'red-hover': '#B71C1C',
      },
    },
  },
  plugins: [],
}