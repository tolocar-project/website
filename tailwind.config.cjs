/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      opacity: {
        15: ".15",
      },
      backgroundImage: {
        "illustration-1": "url('/tolocar_illustration_1.svg')",
        "illustration-2": "url('/tolocar_illustration_2.svg')",
        "illustration-2-alpha": "url('/tolocar_illustration_2_alpha.svg')",
        "illustration-3": "url('/tolocar_illustration_3.svg')",
        "illustration-3-dark": "url('/tolocar_illustration_3_dark.svg')",
        "illustration-3-alpha": "url('/tolocar_illustration_3_alpha.svg')",
        "illustration-4-wide": "url('/tolocar_illustration_4_wide.svg')",
        "illustration-wide": "url('/tolocar_illustration_wide.svg')",
        "illustration-1-dark": "url('/tolocar_illustration_1_dark.svg')",
        "link": "url('/link.svg')",
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#000000",
      "tolo-black": "#111111",
      "tolo-green": "#009664",
      neutral: {
        50: "#F5F5F5",
        100: "#EEEEEE",
        200: "#DCDCDC",
        300: "#B8B8B8",
        400: "#8F8F8F",
        500: "#707070",
        600: "#575757",
        700: "#343434",
        800: "#212121",
        900: "#131313",
      },
    },
    fontFamily: {
      aktiv: ["aktiv-grotesk-extended", "Arial", "sans-serif"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
