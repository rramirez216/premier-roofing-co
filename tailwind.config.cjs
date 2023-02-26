/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'dark-blue': '#023047',
      'light-orange': '#ffb703',
      'dark-orange': '#fb8500',
      'off-white': '#F7F6F2',
      white: '#FDFDFC',
    },
    extend: {
      backgroundImage: {
        'hero-pattern':
          "linear-gradient(to right, hsl( 200 95% 14% / 0.9), hsl( 200 95% 14% / 0.5), hsl(200 95% 14% / 0.3)), url('/src/assets/hero.avif')",
      },
    },
  },
  plugins: [],
}
