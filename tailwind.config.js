/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xs': '375px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    extend: {
      keyframes: {
        fadeInOut: {
          '0%, 100%': { opacity: 0},
          '50%': { opacity: 1},
        },
      },

      animation: {
        fade: 
        'fadeInOut 4s ease-in-out infinite',
      },
    },
  },

  plugins: [],
}

