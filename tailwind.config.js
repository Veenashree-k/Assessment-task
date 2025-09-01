/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
    './plugins/**/*.{js,ts}',
  ],
  safelist: [
    'text-red-500',
    'group-hover:bg-red-500',
    'text-blue-500',
    'group-hover:bg-blue-500',
    'text-green-500',
    'group-hover:bg-green-500',
    'text-yellow-500',
    'group-hover:bg-yellow-500',
    'text-purple-500',
    'group-hover:bg-purple-500',
    'text-pink-500',
    'group-hover:bg-pink-500',
    'text-teal-500',
    'group-hover:bg-teal-500',
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
