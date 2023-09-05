/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        designPurple: '#A682FF',
        designYellow: '#F8F32B',
        designGreen: '#6AF180',
        designBlue: '#55C1FF'
      },
      screens: {
        '2xs': '0px',
        // => @media (min-width: 0px) { ... }
        'xs': '440px',
        // => @media (min-width: 440px) { ... }
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
        'md': '768px',
        // => @media (min-width: 768px) { ... }
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      }
    },
  },
  plugins: [],
}

