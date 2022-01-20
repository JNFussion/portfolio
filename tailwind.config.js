module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        "green-ryb": {
          DEFAULT: "#6AA445",
          light: "#E9F3E2",
        },
        "pine-tree": { DEFAULT: "#212000", dark: "#0F0F00" },
        "army-green": "#313D0F",
        "screaming-green": "#9BF973",
        celeste: "#A2F6F6",
      },
      gridTemplateRows: {
        "1fr": "1fr",
        media: "1fr 2fr 1fr",
      },
    },
  },
  plugins: [],
};
