/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      "border": "rgba(1, 69, 254, 0.2)",
      "lightGren": "rgba(31, 193, 136, 0.60)",
      "white":"#FFFFFF",
      "black": "#222222",
      "thinGrey": "#616464",
      "red": "#EB4335",
      "blue": '#1FC188',
    },
  },
  plugins: [],
};
