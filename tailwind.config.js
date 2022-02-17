module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,js}"],
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
