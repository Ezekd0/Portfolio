/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: '#071827',
        secondary: '#0D2235',
        accent: '#2ECC71',
        textMuted: '#B7C2D0',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
      },
      keyframes: {
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(46,204,113,0.3)' },
          '50%': { boxShadow: '0 0 20px rgba(46,204,113,0.6)' },
        }
      }
    },
  },
  plugins: [],
}
