/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark': 'var(--color-dark)',
        'darker': 'var(--color-darker)',
        'card': 'var(--color-card)',
        'facebook': '#1DA1F2',
        'twitter': '#1DA1F2',
        'instagram': '#E4405F',
        'tiktok': '#00F2EA',
        'accent-green': '#1EB589',
        'accent-red': '#DC414C',
        'text-primary': 'var(--color-text-primary)',
        'text-secondary': 'var(--color-text-secondary)'
      }
    },
  },
  plugins: [],
} 