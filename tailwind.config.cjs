/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#000",       
        secondary: "#1A1A1A",      
        tertiary: "#ffffff",       
      },
      boxShadow: {
        card: "10px 10px 19px #181b1e, -10px -10px 19px #2a2d32",
      },
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [],
};
