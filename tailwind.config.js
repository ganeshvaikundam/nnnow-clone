/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        bold: ['RobotoBold', 'sans-serif'],
      },
      colors: {
        brand: { pink: '#ff3399', magenta: '#ff33ff' },
      },
      container: { center: true, padding: '1rem', screens: { xl: '1230px' } },
    },
  },
  plugins: [],
};
