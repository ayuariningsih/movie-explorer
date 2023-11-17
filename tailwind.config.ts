/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#0e6eff",
        "blue-100": "#0051cc",
        "dark": "#0f1014",
        "light": "#ffffff",
        "inverse" : "#0f172a",
        "inverse-50": "#334155",
        "light-blue": "#38bdf8"
      },
    },
  },
  plugins: [],
}