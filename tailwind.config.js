/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        nutri: {
          green: '#22C55E',
          'green-dark': '#16A34A',
          'green-darker': '#15803D',
          'green-light': '#ECFDF3',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      maxWidth: {
        'content': '1200px',
      }
    },
  },
  plugins: [],
}
