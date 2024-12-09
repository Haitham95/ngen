import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        protestRiot: "var(--font-protestRiot)",
      },
      colors: {
        pumpkin: "#ff7723",
        purple: {
          darker: "#2E1660",
          dark: "#3B117F",
          default: "#c48cdf",
          light: "#E6CFF2",
          lighter: "#F0E3F7",
        },
        gray: {
          default: "#F5F5F5",
          dark: "#878787",
        },
        blueberry: "#627CEE",
        green: "#0BCA6C",
        yellow: "#EFD43E",
        rose: "#F659A0",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
