import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: { 300: "#48214d", 400: "#37193b", 700: "#261129" },
      danger: { 300: "#ea708c", 400: "#e75a7a", 700: "#e44468" },
      success: { 300: "#f7a58d", 400: "#f59275", 700: "#f37f5d" },
      alert: { 300: "#f7cc8b", 400: "#f59275", 700: "#f3b85b" },
      dark: { 400: "#555", 700: "#333" },
      light: { 300: "#eee", 400: "#ccc" },
    },
    extend: {
      borderRadius: {
        normal: "4px",
        exceptional: "8px",
        "radius-rounded": "50%",
        "radius-flat": "0",
      },
      spacing: {
        small: "4px",
        normal: "8px",
        large: "16px",
        largest: "24px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        khand: ["var(--font-family-khand)"],
        roboto: ["var(--font-family-roboto)"],
        lily: ["var(--font-family-lily)"],
      },
    },
  },
  plugins: [],
};

export default config;
