import { nextui } from '@nextui-org/react';

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {},
  darkMode: 'class',
  plugins: [nextui()],
  keyframes: {
    flicker: {
      '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
        opacity: 0.99,
        filter:
          'drop-shadow(0 0 1px rgba(252, 211, 77)) drop-shadow(0 0 15px rgba(245, 158, 11)) drop-shadow(0 0 1px rgba(252, 211, 77))',
      },
      '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
        opacity: 0.4,
        filter: 'none',
      },
    },
    shimmer: {
      '0%': {
        backgroundPosition: '-700px 0',
      },
      '100%': {
        backgroundPosition: '700px 0',
      },
    },
  },
  animation: {
    flicker: 'flicker 3s linear infinite',
    shimmer: 'shimmer 1.3s linear infinite',
  },
};

export default config;
