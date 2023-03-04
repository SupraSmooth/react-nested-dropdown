/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/NestedDropdown/**/*.{ts,tsx}",
  ],
  prefix: "nd-",
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
}
