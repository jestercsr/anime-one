/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "telephone": "390px",
        "phone": "660px",
        "tablet": "768px",
        "laptop": "1024px",
        "desktop": "1280px",
        "2xl": "1536px",
      },
    },
    extend: {
      colors: {
        blacker: {
          8: "rgba(0,0,0,0.8)",
          10: "rgba(39,39,39,0.7)",
          200: "#383B38",
          300: "rgba(12,14,52,0.8)",
          950: "#000505",
        },
        reder: {
          10: "rgba(235,0,27,0.5)",
          800: "rgba(200,18,15,0.7)",
        },
        amberer: {
          500: "rgba(134,85,26,0.7)",
          600: "rgba(209,191,60,0.7)",
          700: "rgba(168,148,35,0.7)",
        },
        greener: {
          300: "rgba(29,129,13,0.7)",
          400: "#078888",
          450: "#5AA569",
          500: "#377B28",
          550: "rgba(33,125,29,0.7)",
          600: "#14540A",
          650: "rgba(14,116,34,0.6)",
          700: "#0fcb23",
          950: "#055656",
        },
        yellower: {
          600: "rgb(251,255,0,0.6)",
          700: "rgba(255,166,0,0.6)",
          900: "rgba(124,75,13,0.6)",
        },
        skyer: {
          500: "#0879AA",
          600: "rgb(2,132,199,0.7)",
          950: "#033144",
        },
        bluer: {
          600: "rgba(11,30,80,0.7)",
          700: "rgba(12,27,102,0.7)",
          800: "rgba(15,47,137,0.6)",
          950: "rgba(10,30,120,0.9)",
        },
        emeralder: {
          100: "#078181",
          300: "rgba(129,167,137,0.7)",
          900: "#021B1B",
          950: "#0ABCBC",
        },
        cyaner: {
          50: "#86FFFF",
          100: "#84FFFF",
          600: "rgba(117,240,255,0.6)",
          700: "rgba(117,240,255,0.7)",
        },
        oranger: {
          700: "rgba(255, 124, 0, 0.5)",
          800: "rgba(255,135,0,0.7)",
        },
        neutraler: {
          50: "#E0FFFF",
          100: "rgba(56,59,56,0.8)",
          800: "rgba(161,158,153,0.6)",
          900: "rgba(212,212,212,0.8)",
        },
        violeter: {
          600: "rgba(126,68,85,0.6)",
          700: "#481069",
          800: "rgba(76,12,174,0.7)",
        },
        pinker: {
          400: "#E141B5",
        },
        limer: {
          600: "rgba(55,123,40,0.6)",
        },
      },
    },
    plugins: [],
  },
};
