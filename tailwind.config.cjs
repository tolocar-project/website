/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      transitionProperty: {
        height: "height",
      },
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
        "community-banner-1-lg":
          "linear-gradient(90.03deg, rgba(0, 0, 0, 0.5) 35.42%, rgba(0, 0, 0, 0) 56.02%), url(/images/metal-structure.jpg)",
        "community-banner-2-lg":
          "linear-gradient(90.03deg, rgba(0, 0, 0, 0.5) 35.42%, rgba(0, 0, 0, 0) 56.02%), url(/images/map-with-pins.jpg)",
        "community-banner-3-lg":
          "linear-gradient(90.03deg, rgba(0, 0, 0, 0.5) 35.42%, rgba(0, 0, 0, 0) 56.02%), url(/images/classroom.jpg)",
        "community-banner-1-sm":
          "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.301) 30.5%, rgba(0, 0, 0, 0.7) 66.96%), url(/images/metal-structure.jpg)",
        "community-banner-2-sm":
          "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.301) 30.5%, rgba(0, 0, 0, 0.7) 66.96%), url(/images/map-with-pins.jpg)",
        "community-banner-3-sm":
          "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.301) 30.5%, rgba(0, 0, 0, 0.7) 66.96%), url(/images/classroom.jpg)",
        "community-messages":
          "linear-gradient(-6.5deg, rgba(0, 150, 100, 1) 0%, rgba(0, 150, 100, 0) 31.54%, rgba(0, 150, 100, 0) 66.78%, rgba(0, 150, 100, 1) 100%), url(/community_messages.svg)",
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#000000",
      "tolo-black": "#111111",
      "tolo-green": "#009664",
      "tolo-dark-green": "#047C54",
      "tolo-darker-green": "#056746",
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
    content: {
      plus: 'url("/images/award/plus.svg")',
      minus: 'url("/images/award/minus.svg")',
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
