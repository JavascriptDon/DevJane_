/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,jsx,md,mdx,ts,tsx,vue}'],
    theme: {
    extend: {  
      screens:{
        'light': { raw: '(prefers-color-scheme: light)' },
        'dark': { raw: '(prefers-color-scheme: dark)' }
      },
      backgroundColor: {
        primary: 'var(--color-bg-primary)',
        secondary: 'var(--color-bg-secondary)',
        card: 'var(--color-bg-card)',
      },
      textColor: {
        accent: 'var(--color-text-accent)',
        primary: 'var(--color-text-primary)',
        secondary: 'var(--color-text-secondary)',
      },
      fontFamily: {
      Montserrat: ["Montserrat", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
      Oswald: ["Oswald" ,"sans-serif"],
    }, 
    variants: {
      textColor: ['dark', 'responsive', 'hover', 'focus'],
      backgroundColor: ['dark', 'responsive', 'hover', 'focus']
    },
  },
  },
  plugins: [],
  }