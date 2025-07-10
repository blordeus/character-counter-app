/** @type {import('tailwindcss').Config} */

module.exports = {
  // Enable dark mode: 'media' uses OS preference, 'class' allows manual toggling
  darkMode: 'class', // Or 'media' if you prefer automatic switching

  theme: {
    extend: {
      colors: {
        // Direct mapping of your neutral palette (values will change based on dark mode class)
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
        // Semantic colors (recommended for dark mode)
        'text-primary': 'var(--color-text-primary)',
        'text-secondary': 'var(--color-text-secondary)',
        'background-primary': 'var(--color-background-primary)',
        'background-secondary': 'var(--color-background-secondary)',
        'border-default': 'var(--color-border-default)',
      },
    },
  },
  plugins: [],
};