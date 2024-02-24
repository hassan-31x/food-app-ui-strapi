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
        primaryGreen : "#8bcda6",
        greyText : "#A7A6A6",
        darkText : "#232229"
      },
      fontSize: {
        xxs: "0.5rem",
        xxss: "0.3rem",
      },
      screens: {
        '2xl': '1350px', // Define the 2xl breakpoint for width greater than 1350px
        '4xl': '1500px', // Define the 2xl breakpoint for width greater than 1350px
      },
    },
  },
  plugins: [],
};
export default config;
