import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
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
export default config;
