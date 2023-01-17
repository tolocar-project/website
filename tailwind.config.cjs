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
        "illustration-2-dark": "url('/tolocar_illustration_2_dark.svg')",
        "illustration-3": "url('/tolocar_illustration_3.svg')",
        "illustration-3-dark": "url('/tolocar_illustration_3_dark.svg')",
        "illustration-3-alpha": "url('/tolocar_illustration_3_alpha.svg')",
        "illustration-4-wide": "url('/tolocar_illustration_4_wide.svg')",
        "illustration-wide": "url('/tolocar_illustration_wide.svg')",
        "illustration-1-dark": "url('/tolocar_illustration_1_dark.svg')",
        link: "url('/link.svg')",
        community_multi_1_lg:
          "linear-gradient(90.03deg, rgba(0, 0, 0, 0.5) 35.42%, rgba(0, 0, 0, 0) 56.02%), url(/images/metal-structure.jpeg)",
        community_multi_2_lg:
          "linear-gradient(90.03deg, rgba(0, 0, 0, 0.5) 35.42%, rgba(0, 0, 0, 0) 56.02%), url(/images/map-with-pins.jpeg)",
        community_multi_3_lg:
          "linear-gradient(90.03deg, rgba(0, 0, 0, 0.5) 35.42%, rgba(0, 0, 0, 0) 56.02%), url(/images/classroom.jpeg)",
        community_multi_1_sm:
          "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.301) 30.5%, rgba(0, 0, 0, 0.7) 66.96%), url(/images/metal-structure.jpeg)",
        community_multi_2_sm:
          "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.301) 30.5%, rgba(0, 0, 0, 0.7) 66.96%), url(/images/map-with-pins.jpeg)",
        community_multi_3_sm:
          "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.301) 30.5%, rgba(0, 0, 0, 0.7) 66.96%), url(/images/classroom.jpeg)",
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
      inter: ["Inter", "sans-serif"],
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
  ],
};
