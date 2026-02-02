import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary blue - the star of the show
        'bubbe-blue': '#2563EB',
        'bubbe-blue-light': '#60A5FA',
        'bubbe-blue-dark': '#1E40AF',
        // Bold primary accents
        'bubbe-red': '#DC2626',
        'bubbe-yellow': '#FBBF24',
        'bubbe-orange': '#F97316',
        // Supporting colors
        'bubbe-green': '#16A34A',
        'bubbe-navy': '#1E3A5F',
        // Neutral tones
        'bubbe-white': '#F8FAFC',
        'bubbe-cream': '#FEF9E7',
        'bubbe-gray': '#64748B',
        'bubbe-dark': '#1E293B',
      },
      fontFamily: {
        display: ['Bangers', 'Impact', 'sans-serif'],
        body: ['Nunito', 'Quicksand', 'sans-serif'],
      },
      borderRadius: {
        'bubble': '24px',
        'blob': '40% 60% 60% 40% / 60% 30% 70% 40%',
      },
      maxWidth: {
        'mobile': '430px',
        'tablet': '768px',
        'desktop': '1200px',
      },
      screens: {
        'xs': '375px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },
      boxShadow: {
        'bubbly': '0 8px 0 0 rgba(46, 92, 138, 0.3)',
        'bubbly-sm': '0 4px 0 0 rgba(46, 92, 138, 0.3)',
        'bubbly-lg': '0 12px 0 0 rgba(46, 92, 138, 0.2)',
        'pop': '0 6px 20px -5px rgba(74, 144, 217, 0.4)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'scale-tap': 'scaleTap 0.1s ease-out',
        'heart-pop': 'heartPop 0.3s ease-out',
        'bounce-in': 'bounceIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'wiggle': 'wiggle 0.5s ease-in-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(100%)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleTap: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(0.95)' },
          '100%': { transform: 'scale(1)' },
        },
        heartPop: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.3)' },
          '100%': { transform: 'scale(1)' },
        },
        bounceIn: {
          '0%': { opacity: '0', transform: 'scale(0.3)' },
          '50%': { transform: 'scale(1.05)' },
          '70%': { transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
