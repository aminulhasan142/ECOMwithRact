/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      black: "#000F06",
      "008738": "#008738",
      "color-green-800": "#166534",
      "color-green-900": "#14532D",
      "color-green-950": "#052E16",
      "color-green-600": "#16A34A",
      "color-green-500": "#22C55E",
      "color-green-50": "#F0FDF4",
      "color-base-white": "#14532D",
      "color-base-black": "#000000",
      "color-neutral-900": "#171717",
    },
    fontFamily: {
      maven: ["Maven Pro"], // Adds a new `font-display` class
      poppins: ["Poppins"],
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
        100: "1 0 0%",
      },
    },
  },
  plugins: [],
};
