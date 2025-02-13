/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        prata: ["var(--font-prata)"],
        pinyon: ["var(--font-pinyon)"],
      },
      maxWidth: {
        "mw-container": "1440px",
        wrapper: "1224px",
        358: "358px",
      },
      backgroundImage: {
        header: "url('/header.png')",
        header2: "url('/header2.png')",
        header3: "url('/header3.jpg')",
        header4: "url('/header44.webp')",
        bgWhite: "url('/bwhite.jpg')",
        bgWhite2: "url('/bwhite2.jpg')",
        bgMulti: "url('/backgrounds/bg-multicolor.jpg')",
        bg2: "url('/b2.jpg')",
        bg3: "url('/b3.jpg')",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#eaffcb",
        gold: "#ffeb44",
        primaryButton: "#4f8300",
        primarydark: "#90c048",
        primarydarkest: "#203500",
        "transparent-10": "#00000014",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontSize: {
        h10: "10vw",
        h5: "5vw",
        "h2.5": "2.5vw",
      },
      grayscale: {
        50: "50%",
        75: "75%",
        90: "90%",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
