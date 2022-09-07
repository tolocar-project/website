/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        "illustration-1": "url('./tolocar_illustration_1.svg')",
        "illustration-2": "url('./tolocar_illustration_2.svg')",
        "illustration-3": "url('./tolocar_illustration_3.svg')",
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#000000",
      "tolo-green": "#148554",
      "tolo-dark-grey": "#212121",
      "tolo-grey": "#7B7B7B",
      "tolo-black": "#111111",
    },
    fontFamily: {
      aktiv: ["aktiv-grotesk-extended", "Arial", "sans-serif"],
    },
  },
  plugins: [],
};
