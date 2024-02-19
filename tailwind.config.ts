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
        'custom-blue': '#48488c',
      },
      height: {
        '1/2screen': '50vh',
        '3/4screen': '75vh'
      },
      width: {
        '1/2screen': '50vw'
      },
      minHeight: {
        '1/2screen': '50vh',
      },
      minWidth: {
        '1/2screen': '50vw',
      },
      maxWidth: {
        '1/2screen': '50vw'
      },
      fontFamily: {
        spartan: ['League Spartan', 'sans-serif'],
        quicksand: ['Quicksand', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
