/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  extend: {
    animation: {
      'infinite-scroll': 'infinite-scroll 40s linear infinite',
      'float': 'float 6s ease-in-out infinite',
      'glow': 'glow 2s ease-in-out infinite alternate',
      'slide-up': 'slide-up 0.5s ease-out',
      'slide-down': 'slide-down 0.5s ease-out',
      'fade-in': 'fade-in 0.6s ease-out',
      'scale-in': 'scale-in 0.3s ease-out',
      'flip-in': 'flip-in 0.6s ease-out',
      'blur-in': 'blur-in 0.5s ease-out',
    },
    keyframes: {
      'infinite-scroll': {
        from: { transform: 'translateX(0)' },
        to: { transform: 'translateX(-50%)' },
      },
      'float': {
        '0%, 100%': { transform: 'translateY(0)' },
        '50%': { transform: 'translateY(-20px)' },
      },
      'glow': {
        '0%': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)' },
        '100%': { boxShadow: '0 0 40px rgba(59, 130, 246, 0.6)' },
      },
      'slide-up': {
        '0%': { transform: 'translateY(30px)', opacity: '0' },
        '100%': { transform: 'translateY(0)', opacity: '1' },
      },
      'slide-down': {
        '0%': { transform: 'translateY(-30px)', opacity: '0' },
        '100%': { transform: 'translateY(0)', opacity: '1' },
      },
      'fade-in': {
        '0%': { opacity: '0' },
        '100%': { opacity: '1' },
      },
      'scale-in': {
        '0%': { transform: 'scale(0.9)', opacity: '0' },
        '100%': { transform: 'scale(1)', opacity: '1' },
      },
      'flip-in': {
        '0%': { transform: 'perspective(1000px) rotateX(-10deg)', opacity: '0' },
        '100%': { transform: 'perspective(1000px) rotateX(0)', opacity: '1' },
      },
      'blur-in': {
        '0%': { filter: 'blur(10px)', opacity: '0' },
        '100%': { filter: 'blur(0)', opacity: '1' },
      },
    },
    perspective: {
      '1000': '1000px',
    },
  },
},
  plugins: [],
}
