export default {
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
    './plugins/**/*.{js,ts}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      colors: {
        pastel: {
          pink: '#FFB6C1',
          blue: '#87CEEB',
          yellow: '#FFFACD',
          green: '#98FF98',
          purple: '#E6E6FA',
          orange: '#FFDAB9',
        },
      },
    },
  },
  plugins: [],
}
