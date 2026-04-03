/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#ffffff",
        foreground: "#000000",
        accent: "#f3f4f6",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      boxShadow: {
        pixel: "4px 4px 0px 0px #000000",
        "pixel-hover": "6px 6px 0px 0px #000000",
      },
    },
  },
  plugins: [],
}
