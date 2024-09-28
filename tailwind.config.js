/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      black: "#000F06",
      "008738": "#008738",
      "text-invert": "#6B7280",
      "color-neutral-100": "#F5F5F5",
      "color-neutral-200": "#E5E5E5",
      "color-neutral-400": "#A3A3A3",
      "color-neutral-500": "#737373",
      "color-neutral-600": "#525252",
      "color-neutral-700": "#404040",
      "color-neutral-900": "#171717",
      "color-neutral-950": "#0A0A0A",
      "color-base-white-pure": "#FFFFFF",
      "color-green-800": "#166534",
      "color-green-900": "#14532D",
      "color-green-950": "#052E16",
      "color-green-600": "#16A34A",
      "color-green-500": "#22C55E",
      "color-green-400": "#4ADE80",
      "color-green-50": "#F0FDF4",
      "color-base-white": "#14532D",
      "color-base-black": "#000000",
      "search-bar-black": "#000F06",
      "teal-500": "#20C997",
    },
    fontFamily: {
      maven: ["Maven Pro"], // Adds a new `font-display` class
      poppins: ["Poppins"],
      lexend: ["Lexend"],
    },
    extend: {
      spacing: {
        "8xl": "96rem",
        "9xl": "128rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      flex: {
        100: "1 0 0",
      },
      boxShadow: {
        "3xl": "0 5px 10px 0px rgba(21, 128, 61, 0.2)",
        "4xl": "0 -4px 5px 0px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
};
