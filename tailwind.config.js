/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        young: ['Young Serif', 'serif'],
        outfit: ['Outfit', 'sans-serif'],
      },
      fontSize: {
        preset1: ['2.25rem', { lineHeight: '100%', letterSpacing: '0px' }],
        preset2: ['1.75rem', { lineHeight: '100%', letterSpacing: '0px' }],
        preset3: ['1.25rem', { lineHeight: '100%', letterSpacing: '0px' }],
        preset4: ['1rem', { lineHeight: '150%', letterSpacing: '0px' }],
        40: '2.5rem',
      },
      colors: {
        primary: {
          50: '#FFF7FB',
          800: '#7A284E',
        },
        secondary: {
          100: '#F3E5D7',
          150: '#E3DDD7',
          600: '#5F564D',
          900: '#312E2C',
        },
        tertiary: {
          800: '#854632',
        },
      },
      maxWidth: {
        375: '23.4375rem',
        616: '38.5rem',
        736: '46rem',
      },
    },
  },
  plugins: [],
}
