/** @type {import('tailwindcss').Config} */
export default {
  content: [
      './src/**/*.{js,jsx,ts,tsx}', './public/index.html',
  ],
  theme: {
    extend: {},
    colors: {
      'yellowGreen': '#FAFFE5',
      'darkGreen': '#4F7942',
      'darkRed': '#800511',
      'white': '#FFFFFF',
      'lightGreen': '#EDFFE8',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}