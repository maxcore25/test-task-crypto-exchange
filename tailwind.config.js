/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-color': 'var(--brand-color)',
        'dark-gray': 'var(--dark-gray)',
        'light-gray': 'var(--light-gray)',
        background: 'var(--background)',
      },
    },
  },
  plugins: [],
};
