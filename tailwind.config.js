/** @type {import('tailwindcss').Config} */
export default {
  prefix: "",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "selector",
  theme: {
    fontFamily: {
      din: "Roboto",
    },
    extend: {
      colors: {
        light_color: "var(--light-color)",
        dark_color: "var(--dark-color)",
        dark_bg_color: "var(--dark-bg-color)",
      },
      fontSize: {
        base: "12px",
        xs: "9px",
        sm: "10px",
        lg: "14px",
      },
    },
  },
};
