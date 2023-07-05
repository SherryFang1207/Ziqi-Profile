/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    keyframes: {
      wiggle: {
        '0%, 100%': { transform: 'rotate(-3deg)' },
        '50%': { transform: 'rotate(3deg)' },
      },
      typing: {
        '0%,100%': {left: '0', margin: '0 0 0 0px'},
        '75%': {left: '100%', margin: '0 0 0 20px'},
      },
      slide_2xl:{
        '100%':{top:'-96px'}
      },
      slide_xl:{
        '100%':{top:'-84px'}
      },
      bouncing : { 
        '0%, 20%, 50%, 80%, 100%' : {transform: 'translateY(0)'}, 
        '40%' : {transform: 'translateY(-20px)'},
        '60%' : {transform: 'translateY(-15px)'},
      },
      rotating: {
        '0%': {transform: 'rotate(0deg)'},
        '100%': {transform: 'rotate(360deg)'},
      },
    },
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'typing-engineer': 'typing 4s steps(19) infinite',
        'typing-freelance': 'typing 4s steps(27) infinite',
        'typing-modest': 'typing 4s steps(16) infinite',
        'slide_2xl': 'slide_2xl 12s steps(3) infinite',
        'slide_xl': 'slide_xl 12s steps(3) infinite',
        'big-bounce':'bouncing 2s linear infinite',
        'rotating':'rotating 3s linear infinite',
      },
      backgroundImage: {
        'main-pattern': "url('/src/assets/webb.png')",
      }
    },
  },
  plugins: [],
}