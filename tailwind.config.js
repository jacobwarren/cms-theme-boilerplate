module.exports = {
  content: [
    './src/**/*.html',
  ],
  darkMode: 'class', // 'media', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
