/** @type {import('tailwindcss').Config} */
export default {
  prefix: "",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "selector",
  theme: {
    fontFamily: {
      SFProDisplay: ["SF Pro Display", "sans-serif"],
    },
    extend: {
      colors: {
        dark_bg: "var(--dark-bg)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        inactive: "var(--inactive)",
        border_inactive: "var(--border-inactive)",
      },
      fontSize: {
        base: "12px",
        xs: "9px",
        sm: "10px",
        lg: "14px",
      },
      boxShadow: {
        sm: "0 1px 2px 0 var(--primary)",
      },
    },
  },
};
