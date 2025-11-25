/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'space-black': '#0a0a0a',
        'cosmic-purple': '#4c1d95',
        'starry-blue': '#1e3a8a',
        'nebula-gold': '#f59e0b',
      },
      backgroundImage: {
        'space-gradient': 'linear-gradient(135deg, #0f0f0f 0%, #1a1a2e 50%, #16213e 100%)',
        'gold-purple-blue': 'linear-gradient(135deg, #f59e0b 0%, #8b5cf6 50%, #3b82f6 100%)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 4s ease-in-out infinite',
        'float-fast': 'float 2s ease-in-out infinite',
        'twinkle': 'twinkle 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        twinkle: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        }
      }
    },
  },
  plugins: [],
}