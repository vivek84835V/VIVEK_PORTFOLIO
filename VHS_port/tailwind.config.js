/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        patrick: ["Patrick Hand SC", "cursive"],
        moonwalk: ["Moonwalk", "sans-serif"],
        satoshi: ["Satoshi", "sans-serif"],
      },
      colors: {
        primary: "#8B5CF6",
      },
    },
  },
  plugins: [],
};
