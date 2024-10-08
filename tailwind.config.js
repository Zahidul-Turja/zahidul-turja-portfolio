/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "white-glow": "0 0 20px 5px rgba(255, 255, 255, 0.2)", // Glowing white shadow
        "purple-glow": "0 0 20px 5px rgba(191, 151, 255, 0.2)", // Glowing white shadow
      },
      colors: {
        primary: {
          50: "#E1E8EF",
          100: "#D4DEE7",
          200: "#B7C7D7",
          300: "#99B0C7",
          400: "#7C99B6",
          500: "#5E82A6",
          600: "#4C6B8A",
          700: "#3C546C",
          800: "#2C3D4F",
          900: "#1B2631",
          950: "#141C24",
        },
        secondary: {
          300: "#dfd5ff",
          600: "#b49bff",
          800: "#7042f88b",
          950: "#4328928b",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
