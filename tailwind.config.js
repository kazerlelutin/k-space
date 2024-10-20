/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/templates/**/*.html'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Inter', 'sans-serif'],
        mono: ['Inter', 'sans-serif'],
      },
      colors: {
        sepia: {
          100: '#c09771',
          200: '#a87f5a',
          300: '#956f4c',
          400: '#6f4b2c',
          500: '#301d0d',
          grey_one: '#ffffff',
          grey_two: '#bcb9b9',
          grey_three: '#908e8e',
          grey_four: '#000000',
          blood_one: '#9a1313',
          blood_two: '#570808',
        },
        rd: {
          bg: 'var(--color-bg)',
          text: 'var(--color-text)',
          link: 'var(--color-link)',
          highlight: 'var(--color-highlight)',
          sagwa_young: 'var(--color-sagwa_young)',
          sagwa: 'var(--color-sagwa)',
          sagwa_old: 'var(--color-sagwa_old)',
          urban_gray: 'var(--color-urban_gray)',
          sand: 'var(--color-sand)',
          pur: 'var(--color-pur)',
          unknown: 'var(--color-unknown)',
          recognized: 'var(--color-recognized)',
          known: 'var(--color-known)',
          learning: 'var(--color-learning)',
        },
        dark: {
          text: '#ebeadd',
          bg: '#000',
          link: '#378C4C',
          highlight: '#bfba1d',
        },
      },
    },
  },
  plugins: [],
}
