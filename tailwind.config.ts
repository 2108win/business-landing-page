import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F78430",
        primaryHover: "#F78410",
        primaryText: "#313131",
        secondText: "#828282",
        whiteText: "#FAFAFA",
        grayText: "#B6B6B6",
        grayDarkText: "#2C3847",
        borderPrimary: "#F0F0F0",
        borderSecondary: "#DEDEDE",
        bgWhite: "#FAFAFA",
        bgWhiteHover: "#FFFFFF",
        whiteHover: "#F0F0F0",
      },
      boxShadow: {
        custom: "0px 30px 30px rgba(99, 122, 166, 0.10)",
        customXl: "0px 1.8518518209457397px 3.1481480598449707px rgba(56, 56, 56, 0.02)",
      },
      fontFamily: {
        sans: ["var(--font-circular-std)"],
      },
    },
  },
  plugins: [],
};
export default config;
