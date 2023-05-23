/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    screens: {
      sm: "375px",
      // => @media (min-width: 375px) { ... }
      md: "768px",
      // => @media (min-width: 800px) { ... }
      lg: "1024px",
      // => @media (min-width: 1440px) { ... }
    },
    extend: {
      fontFamily: {
        Public: ["public-sans, sans-serif"],
      },
      colors: {
        "Dark-blue": "hsl(233, 26%, 24%)",
        "Lime-Green": "hsl(136, 65%, 51%)",
        "Bright-Cyan": "hsl(192, 70%, 51%)",
        "Grayish-Blue": "hsl(233, 8%, 62%)",
        "Light-grayish-blue": "hsl(220, 16%, 96%)",
        "Very-light-gray": "hsl(0, 0%, 98%)",
      },
    },
  },
  plugins: [],
};
