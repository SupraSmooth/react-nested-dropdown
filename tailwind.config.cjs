/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
}
