/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0f141a',
        muted: '#6b7a8c',
        soft: '#f6f7fb',
        teal: '#1fc7b6',
        pink: '#F58F7C',
        card: '#ffffff',
        dark: '#0B0F14',
        'chrome-dark': '#1A1D23',
        'chrome-medium': '#2C2F35',
        'chrome-light': '#4A4E56',
        'chrome-accent': '#8B8F97',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        opensans: ['Open Sans', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '18px',
      },
      boxShadow: {
        soft: '0 10px 30px rgba(16,22,35,.14)',
      }
    },
  },
  plugins: [],
}
