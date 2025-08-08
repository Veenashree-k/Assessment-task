/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
    './plugins/**/*.{js,ts}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Poppins"', 'sans-serif'],
        body: ['"Open Sans"', 'sans-serif'],
        heading: ['"Raleway"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
