/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Milk white: replaces pure white everywhere (text-white, bg-white, border-white/10 ...)
        white: "#FBF8F1",
        milk: "#FBF8F1",
        // Atlantic blue scale (deep -> lighter)
        ink: {
          950: "#04243d",
          900: "#06304f",
          800: "#0a4068",
          700: "#0f5282",
        },
        // Accent tokens (names kept for convenience): aqua, sea blue, pale ice blue
        neon: {
          cyan: "#8fe0ee",
          blue: "#5aa9e6",
          violet: "#c7dcf0",
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ['"Inter"', "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 40px -8px rgba(143, 224, 238, 0.4)",
        "glow-violet": "0 0 40px -8px rgba(199, 220, 240, 0.4)",
      },
    },
  },
  plugins: [],
};
