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
        dark_bg: "var(--dark-bg)",
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        inactive: "var(--inactive-color)",
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
