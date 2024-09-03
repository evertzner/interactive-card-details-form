/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      screens: {
        xl: '1440px'
      },
      colors: {
        violet: { DEFAULT: '#6348FE' },
        'deep-violet': '#21092F',
        'purplish-gray': '#8F8694',
        'light-gray': '#DFDEE0',
        red: { DEFAULT: '#FF5050' }
      }
    }
  },
  plugins: []
};
