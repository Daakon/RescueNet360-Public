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
        muted: '#334155',
        soft: '#eaf0f6',
        teal: '#1fc7b6',
        'teal-strong': '#0f766e',
        deep: '#060c15',
        pink: '#F58F7C',
        card: '#ffffff',
        dark: '#101722',
        success: '#166534',
        'chrome-dark': '#171D27',
        'chrome-medium': '#2A3442',
        'chrome-light': '#465466',
        'chrome-accent': '#9AA8BA',
      },
      fontFamily: {
        sans: ['Manrope', 'system-ui', 'sans-serif'],
        display: ['Sora', 'Manrope', 'sans-serif'],
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
