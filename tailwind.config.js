/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./templates/**/*.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Inter', 'sans-serif'],
        mono: ['Inter', 'sans-serif'],
      },
      colors: {
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
