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
          // "brown-100": "#BCA07D",
          // "brown-200": "#8D7454",
          orange: "#DF673E",
          "blue-100": "#69CDBA",
          "blue-200": "#4DB5A2",
          "blue-300": "#18836F",
          "blue-400": "#57C0AC",
          white: "#FAF8F3",
          beige: "#DDD5C9",
          "green-100": "#B2CDAF",
          "green-200": "#61934A",
          "green-300": "#7CA677",
          "green-400": "#334E26",
          "green-500": "#7DA878",
          "brown-100": "#E8D9C6",
          "brown-200": "#C5A687",
          "brown-300": "#AD7D5E",
          "brown-400": "#644539",
          "brown-500": "#5F4B3D",
          "brown-600": "#A28967",
          "green-light": "#9CC688",
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
            "red-bg": "#F5C1B3",
            "red-text": "#C35927",
            "yellow-bg": "#FEF2CA",
            "yellow-text": "#DFA719",
            "green-bg": "#B7E4DC",
            "green-text": "#538B70",
            "gray-bg": "#E9E9E9",
            "gray-text": "#969696",
            "purple-bg": "#E6DFF6",
            "purple-text": "#825ED0",
            "grayblue-bg": "#D3DDE4",
            "grayblue-text": "#22577A",
            "teal-bg": "#D7EDED",
            "teal-text": "#38A3A5",
            "lightgreen-bg": "#D9E7C2",
            "lightgreen-text": "#61934A",
            "pink-bg": "#FFE3FB",
            "pink-text": "#F583F1",
            white: "#fff",
          },
        },
      },
      animation: {
        wiggle1: "wiggle1 5s ease-in-out infinite",
        wiggle2: "wiggle2 5s ease-in-out infinite",
        wiggle3: "wiggle3 12.5s ease-in-out infinite",
      },
      keyframes: {
        wiggle1: {
          "0% 100%": {
            translate: "25px",
          },
          "50%": {
            translate: "-25px",
          },
        },
        wiggle2: {
          "0% 100%": {
            translate: "10px",
          },
          "50%": {
            translate: "-10px",
          },
        },
        wiggle3: {
          "0% 100%": {
            translate: "-17.5px",
          },
          "50%": {
            translate: "17.5px",
          },
        },
      },
    },
  },
  plugins: [],
};
