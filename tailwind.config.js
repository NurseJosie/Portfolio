/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      italiana: ["Italiana", "serif"],
      playfair: ["Playfair Display", "serif"]
    },
  },
  plugins: [],
}

