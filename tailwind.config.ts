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
        wine: {
          "100": "#210a04",
          "200": "#140602",
          "300": "rgba(255, 255, 255, 0.08)",
          "400": "rgba(0, 0, 0, 0.08)",
          "500": "rgba(255, 255, 255, 0.22)",
          "600": "rgba(0, 0, 0, 0.06)",
        },
        gray: {
          "100": "#210a04",
          "200": "#140602",
          "300": "rgba(255, 255, 255, 0.08)",
          "400": "rgba(0, 0, 0, 0.08)",
          "500": "rgba(255, 255, 255, 0.22)",
          "600": "rgba(0, 0, 0, 0.06)",
        },
        dimgray: {
          "100": "#5e5e5e",
          "200": "#5d5d5d",
        },
        white: "#fff",
        lightsalmon: "#ff916e",
        black: "#000",
        tomato: "#e1562b",
      },
      spacing: {},
      fontFamily: {
        "aeonik-trial-bold": "AeoknikTRIAL-Bold",
        "aeonik-trial-bolditalic": "AeoknikTRIAL-BoldItalic",
        "aeonik-trial-light": "AeoknikTRIAL-Light",
        "aeonik-trial-lightitalic": "AeoknikTRIAL-LightItalic",
        "aeonik-trial-regular": "AeoknikTRIAL-Regular",
        "aeonik-trial-regularitalic": "AeoknikTRIAL-RegularItalic",
        "dm-sans": "'DM Sans'",
        "archivo-black": "'Archivo Black'",
        inter: "Inter",
      },
      borderRadius: {
        "11xl": "30px",
        "9xl": "28px",
        "2xs": "11px",
        "8xl": "27px",
        "81xl": "100px",
      },
    },
    fontSize: {
      lg: "18px",
      base: "16px",
      "14xl-9": "33.9px",
      "7xl": "26px",
      sm: "14px",
      "45xl": "64px",
      "9xl": "28px",
      "3xl": "22px",
      "23xl": "42px",
      xs: "12px",
      inherit: "inherit",
    },
    fontFamily: {
      base: "AeonikTRIAL"
    }
  },
  plugins: [],
};
export default config;
