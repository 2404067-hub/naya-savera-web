/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0D7377",
        secondary: "#14A0A6",
        positive: "#22C55E",
        attention: "#F59E0B",
        critical: "#EF4444",
        ink: "#1F2937",
        soft: "#6B7280",
        cream: "#FAFAF8",
      },
    },
  },
  plugins: [],
}