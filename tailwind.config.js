/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./**/**.{html,js}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      primary: "rgb(var(--color-primary) / <alpha-value>)",
      secondary: "rgb(var(--color-secondary) / <alpha-value>)",
      textColor: "rgb(var(--color-text) / <alpha-value>)",
      background: "rgb(var(--color-bg) / <alpha-value>)",
      error: "rgb(var(--color-error) / <alpha-value>)",
    },
    extend: {},
  },
  plugins: [],
};
