/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      animation: {
        ['infinite-slider']: 'infiniteSlider 20s linear infinite'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      container: {
        center: true
      },
      fontFamily: {
        'neulis-alt-medium': ['Neulis Alt Medium', 'sans-serif'],
        'neulis-alt-semibold': ['Neulis Alt SemiBold', 'sans-serif']
      },
      keyframes: {
        infiniteSlider: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-250px * 5))' }
        }
      }
    }
  },
  plugins: []
};

module.exports = config;
