/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "../clade_assignment/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: { poppins: ["Poppins", "san-serif"] },
    },
  },
  plugins: [],
};
