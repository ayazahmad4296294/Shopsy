/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // Enables dark mode when 'dark' class is present on the root element
  theme: {
    extend: {
      colors: {
        primary: "#fea928",
        secondary: "#ed8900",
        dark: "#1e1e1e",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        },
      },
    },
  },
  plugins: [],
}