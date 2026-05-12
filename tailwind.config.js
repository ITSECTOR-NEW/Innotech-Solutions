/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        display: ["'Syne'", "sans-serif"],
        body: ["'DM Sans'", "sans-serif"],
      },
      colors: {
        cyan: "#00d4ff",
        brand: {
          blue: "#3b82f6",
          purple: "#8b5cf6",
          violet: "#a855f7",
          pink: "#ec4899",
          green: "#10b981",
          orange: "#f59e0b",
        },
        dark: {
          900: "#04060f",
          800: "#070c1a",
          700: "#0b1228",
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        blink: "blink 1.5s infinite",
        marquee: "marquee 25s linear infinite",
        fadeUp: "fadeUp 0.8s ease both",
        barGrow: "barGrow 1s ease both",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        blink: {
          "0%,100%": { opacity: 1 },
          "50%": { opacity: 0.3 },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        fadeUp: {
          from: { opacity: 0, transform: "translateY(24px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        barGrow: {
          from: { transform: "scaleY(0)", transformOrigin: "bottom" },
          to: { transform: "scaleY(1)", transformOrigin: "bottom" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};