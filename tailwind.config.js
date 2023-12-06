/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        workSans: ["var(--font-work_sans)"],
      },
      colors: {
        design: {
          "brown-100": "#E5C7A0",
          "brown-200": "#A5663D",
          "brown-300": "#604F44",
          orange: "#C16134",
          blue: "#69C1B1",
          white: "#FDF9ED",
          "pink-100": "#FCEADC",
          "pink-200": "#F1B09E",
          "green-100": "#B2CDAF",
          "green-200": "#C2DE93",
          "green-300": "#538B70",
          "green-400": "#769D6A",
          "green-500": "#334E26",
          "green-600": "#9CC688",
          "green-700": "#D9E7C2",
          "green-800": "#61934A",
          "green-900": "#334E26",
        },
        hackathon: {
          "blue-100": "#38A3A5",
          "blue-200": "#22577A",
          "green-100": "#E7F7E9",
          "green-200": "#80ED99",
          "green-300": "#57CC99",
          "green-400": "#3CB97A",
          "yellow-100": "#FFCF55",
          "gray-100": "#E7E7E7",
          "gray-200": "#9ea4af",
          "gray-300": "#525252",
          page: "#F5F5F5",
          tags: {
            "red-bg": "#FFE9E2",
            "red-text": "#F07167",
            "yellow-bg": "#FFF0BC",
            "yellow-text": "#FFB81C",
            "green-bg": "#CFEDEA",
            "green-text": "#00AFB9",
            "gray-bg": "#E9E9E9",
            "gray-text": "#969696",
            "purple-bg": "#E6DFF6",
            "purple-text": "#825ED0",
            "grayblue-bg": "#D3DDE4",
            "grayblue-text": "#22577A",
            "teal-bg": "#D7EDED",
            "teal-text": "#38A3A5",
            "lightgreen-bg": "#DDF5EB",
            "lightgreen-text": "#57CC99",
            "pink-bg": "#FFE3FB",
            "pink-text": "#F583F1",
            white: "#fff",
          },
        },
      },
      animation: {
        wiggle: "wiggle 2s ease-in-out infinite",
      },
      keyframes: {
        wiggle: {
          "0% 100%": {
            translate: "10px",
          },
          "50%": {
            translate: "-10px",
          },
        },
      },
    },
  },
  plugins: [],
};
