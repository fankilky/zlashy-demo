/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '375px',     // iPhone, medium phones
        'md': '390px',     // iPhone, larger phones
        'lg': '640px',     // Tablets
        'xl': '768px',     // Small laptops
        '2xl': '1024px',   // Laptops
        '3xl': '1280px',   // Desktops
        '3xl': '1280px',   // Desktops
        '4xl': '1600px',   // Desktops
        '5xl': '1920px',   // Desktops
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)'},
          '10%, 90%': { transform: 'rotate(-3deg)'},
          '50%': { transform: 'rotate(3deg)' },
        },
        scaleDown: {
          '0%': { transform: 'scale(1)', opacity: 1},
          '50%': { transform: 'scale(1)', opacity: 1},
          '100%': { transform: 'scale(0) translateY(300px)', opacity: 0 , transformOrigin: 'bottom'}
        },
        fadeInLeft: {
          '0%': { transform: 'translateX(50%)', opacity: 0 },
          '40%, 100%': { transform: 'translateX(0%)', opacity: 1 }
        },
        fadeInUp: {
          '0%': { transform: 'translateY(90%)', opacity: 0 },
          '40%, 100%': { transform: 'translateY(0%)', opacity: 1 }
        },
        fadeInRight: {
          '0%': { transform: 'translateX(-50%)', opacity: 0 },
          '40%, 100%': { transform: 'translateX(0%)', opacity: 1 },
        },
        phoneFadeOut: {
          '0%': { 
            opacity: 1,
            transform: 'translate(0, 0) rotate(0deg)'
          },
          '25%': {
            opacity: 0.8,
            transform: 'translate(-20%, -10%) rotate(-10deg)'
          },
          '50%': {
            opacity: 0.6,
            transform: 'translate(-40%, 30%) rotate(-10deg)'
          },
          '75%': {
            opacity: 0.4,
            transform: 'translate(-60%, 60%) rotate(0deg)'
          },
          '100%': { 
            opacity: 0,
            transform: 'translate(-100%, 100%) rotate(0deg)'
          }
        }
      },
      animation: {
        wiggle: 'wiggle 2.5s ease-in-out infinite ',
        scaleDown: 'scaleDown linear',
        fadeOutDown1: 'fadeOutDown1 1s ease-in-out', // for bubble
        fadeInLeft: 'fadeInLeft linear', // for session
        fadeInUp: 'fadeInUp linear', 
        fadeInRight: 'fadeInRight linear' ,
        phoneFadeOut: 'phoneFadeOut linear' 
      }
    },
  },
  plugins: [],
};
