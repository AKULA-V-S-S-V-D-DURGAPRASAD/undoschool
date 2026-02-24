/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        display: ['Syne', 'sans-serif'],
      },
      colors: {
        brand: {
          50:  '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
          950: '#2e1065',
        },
      },
      animation: {
        'fade-up':    'fadeUp 0.5s ease forwards',
        'float':      'float 3s ease-in-out infinite',
        'pulse-dot':  'pulseDot 2s ease infinite',
        'slide-down': 'slideDown 0.25s ease forwards',
        'shimmer':    'shimmer 1.8s ease infinite',
      },
      keyframes: {
        fadeUp:    { from: { opacity: 0, transform: 'translateY(20px)' }, to: { opacity: 1, transform: 'translateY(0)' } },
        float:     { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-8px)' } },
        pulseDot:  { '0%,100%': { opacity: 1 }, '50%': { opacity: 0.4 } },
        slideDown: { from: { opacity: 0, transform: 'translateY(-10px)' }, to: { opacity: 1, transform: 'translateY(0)' } },
        shimmer:   { '0%': { backgroundPosition: '200%' }, '100%': { backgroundPosition: '-200%' } },
      },
      boxShadow: {
        'card':      '0 4px 24px rgba(124,58,237,0.08), 0 1px 4px rgba(0,0,0,0.04)',
        'card-hover':'0 24px 60px rgba(124,58,237,0.14), 0 8px 20px rgba(0,0,0,0.06)',
        'brand':     '0 8px 24px rgba(124,58,237,0.35)',
        'hero':      '0 20px 60px rgba(0,0,0,0.3)',
      },
    },
  },
  plugins: [],
}
