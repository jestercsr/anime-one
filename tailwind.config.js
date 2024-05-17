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
      colors: {
        'custom-black': '#000505',
        'turquoise-dark': '#021B1B',
        'sky-bleu': '#0879aa',
        'sky-marine': '#033144',
        'turquoise-claire': '#078181',
        'blue-darker': '#021b1b',
      },
    },
  },
  plugins: [],
};
