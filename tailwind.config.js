module.exports = {
  content: [
    '/src/**/*.html',
    'src/templates/*/*.html',
    'src/sections/*.html',
    'src/modules/*/*.html',
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
