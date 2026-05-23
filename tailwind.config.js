/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        tertiary: "var(--tertiary)",
        "black-100": "var(--black-100)",
        "black-200": "var(--black-200)",
        "white-100": "var(--white-100)",
      },
      boxShadow: {
        card: "var(--card-shadow)",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "var(--hero-pattern)",
      },
    },
  },
  plugins: [],
}

