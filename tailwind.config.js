/** @type {import('tailwindcss').Config} */
module.exports = {
  jit: false,
  content: ['./src/components/NestedDropdown/**/*.{ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
  prefix: 'nd-'
}
