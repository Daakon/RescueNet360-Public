/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // SYSTEM TOKENS
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        'primary-deep': 'rgb(var(--color-primary-deep) / <alpha-value>)',
        'primary-soft': 'rgb(var(--color-primary-soft) / <alpha-value>)',
        
        secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
        'secondary-deep': 'rgb(var(--color-secondary-deep) / <alpha-value>)',
        'secondary-soft': 'rgb(var(--color-secondary-soft) / <alpha-value>)',
        
        bg: 'rgb(var(--color-bg) / <alpha-value>)',
        'bg-subtle': 'rgb(var(--color-bg-subtle) / <alpha-value>)',
        surface: 'rgb(var(--color-surface) / <alpha-value>)',
        'surface-elevated': 'rgb(var(--color-surface-elevated) / <alpha-value>)',
        'surface-muted': 'rgb(var(--color-surface-muted) / <alpha-value>)',
        'surface-dark': 'rgb(var(--color-surface-dark) / <alpha-value>)',
        'surface-dark-elevated': 'rgb(var(--color-surface-dark-elevated) / <alpha-value>)',
        
        'text-primary': 'rgb(var(--color-text-primary) / <alpha-value>)',
        'text-secondary': 'rgb(var(--color-text-secondary) / <alpha-value>)',
        'text-muted': 'rgb(var(--color-text-muted) / <alpha-value>)',
        'text-inverse': 'rgb(var(--color-text-inverse) / <alpha-value>)',
        'text-dark-muted': 'rgb(var(--color-text-dark-muted) / <alpha-value>)',
        
        separator: 'var(--color-separator)',
        'separator-strong': 'var(--color-separator-strong)',
        'border-dark': 'var(--color-border-dark)',
        
        // SEMANTIC STATES
        'state-success': 'rgb(var(--state-success) / <alpha-value>)',
        'state-success-bg': 'rgb(var(--state-success-bg) / <alpha-value>)',
        'state-success-text': 'rgb(var(--state-success-text) / <alpha-value>)',
        
        'state-info': 'rgb(var(--state-info) / <alpha-value>)',
        'state-info-bg': 'rgb(var(--state-info-bg) / <alpha-value>)',
        'state-info-text': 'rgb(var(--state-info-text) / <alpha-value>)',
        
        'state-warning': 'rgb(var(--state-warning) / <alpha-value>)',
        'state-warning-bg': 'rgb(var(--state-warning-bg) / <alpha-value>)',
        'state-warning-text': 'rgb(var(--state-warning-text) / <alpha-value>)',
        
        'state-danger': 'rgb(var(--state-danger) / <alpha-value>)',
        'state-danger-bg': 'rgb(var(--state-danger-bg) / <alpha-value>)',
        'state-danger-text': 'rgb(var(--state-danger-text) / <alpha-value>)',

        // Replace dark blue slate shades with rich charcoal grey (WCAG AAA compliant)
        slate: {
          50: '#fafafa',
          100: '#f4f4f5',
          200: '#e4e4e7',
          300: '#d4d4d8',
          400: '#a1a1aa',
          500: '#71717a',
          600: '#52525b',
          700: '#3f3f46',
          800: '#27272a', // WCAG AAA (>11:1 with white)
          900: '#18181b', // WCAG AAA (>15:1 with white)
          950: '#09090b',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': 'var(--font-size-display)',
        'hero': 'var(--font-size-hero)',
        'h1': 'var(--font-size-h1)',
        'h2': 'var(--font-size-h2)',
        'h3': 'var(--font-size-h3)',
        'body-lg': 'var(--font-size-body-lg)',
        'body': 'var(--font-size-body)',
        'body-sm': 'var(--font-size-body-sm)',
        'caption': 'var(--font-size-caption)',
      },
      spacing: {
        '0': 'var(--space-0)',
        '1': 'var(--space-1)',
        '2': 'var(--space-2)',
        '3': 'var(--space-3)',
        '4': 'var(--space-4)',
        '5': 'var(--space-5)',
        '6': 'var(--space-6)',
        '7': 'var(--space-7)',
        '8': 'var(--space-8)',
        '9': 'var(--space-9)',
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
        pill: 'var(--radius-pill)',
      },
      boxShadow: {
        soft: 'var(--shadow-soft)',
        card: 'var(--shadow-card)',
        elevated: 'var(--shadow-elevated)',
        focus: 'var(--shadow-focus)',
      },
      transitionDuration: {
        fast: '120ms',
        standard: '180ms',
        slow: '260ms',
      },
      transitionTimingFunction: {
        standard: 'cubic-bezier(0.2, 0, 0, 1)',
        soft: 'cubic-bezier(0.16, 1, 0.3, 1)',
      }
    },
  },
  plugins: [],
}
