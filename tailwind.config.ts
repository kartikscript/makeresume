import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily:{
        Gupter: ["var(--font-gupter)"],
        Roboto:['var(--font-roboto)']
      },
      colors:{
        background:'#38302e',
        texts:'#343a40',
        primary:{
          50:'#fefae0',
          100:'#dda15e',
          200:"#bc6c25",
        },
        secondary:{
          100:'#606c38',
          200:'#283618'
        }
      }
    },
  },
  plugins: [],
};
export default config;
