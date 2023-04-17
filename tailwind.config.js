require('dotenv').config()

/** @type {import('tailwindcss').Config} */
module.exports = {
  jit: false,
  content: ['./src/components/NestedDropdown/**/*.{ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: process.env.RUN_PREFLIGHT === 'true' ? true : false,
  },
  prefix: 'nd-'
}
