import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          DEFAULT: '#111827', // Dark Gray
        },
        secondary: {
          DEFAULT: '#2dd4bf', // Light Teal
        },
      },
      fontFamily: {
        // amaranth: ['Amaranth', 'sans-serif'],
        sourcesans: ['Source Sans Pro', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
