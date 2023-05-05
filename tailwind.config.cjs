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
      'darker-orange': '#EB840F',
      'off-white': '#F7F6F2',
      'off-white-dark': '#E5E4E1',
      white: '#FDFDFC',
      blue: '#219ebc',
      'light-blue': '#8ecae6',
      grey: '#f2f2f2',
    },
    extend: {
      backgroundImage: {
        'hero-pattern':
          "linear-gradient(to right, hsl( 200 95% 14% / 0.9), hsl( 200 95% 14% / 0.5), hsl(200 95% 14% / 0.3)), url('/src/assets/hero.avif')",
      },
      flex: {
        2: '2 2 0%',
        3: '3 3 0%',
      },
      width: {
        240: '60rem',
      },
    },
  },
  plugins: [],
}
