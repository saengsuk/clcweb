/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#003049", // Navy blue for header/footer & trust
        accent: "#D62828", // Crimson red for buttons & highlights
        background: "#FDF0D5", // Soft beige to keep warm & hopeful tone
        border: "#E0E0E0", // Light gray for subtle structure
        clean: "#FFFFFF", // For sections and contrast
      },
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        sans: ["Inter", "Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};