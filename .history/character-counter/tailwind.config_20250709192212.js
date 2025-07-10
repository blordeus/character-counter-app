/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: { extend: {colors: {
        neutral: {
          900: 'var(--color-neutral-900)',
          800: 'var(--color-neutral-800)',
          700: 'var(--color-neutral-700)',
          600: 'var(--color-neutral-600)',
          200: 'var(--color-neutral-200)',
          100: 'var(--color-neutral-100)',
          0: 'var(--color-neutral-0)',
        },
        purple: {
          400: 'var(--color-purple-400)',
          500: 'var(--color-purple-500)',
        },
        blue: {
          400: 'var(--color-blue-400)',
          500: 'var(--color-blue-500)',
        },
        yellow: {
          500: 'var(--color-yellow-500)',
        },
        orange: {
          500: 'var(--color-orange-500)',
          800: 'var(--color-orange-800)',
        },
      },} },
  plugins: [],
};