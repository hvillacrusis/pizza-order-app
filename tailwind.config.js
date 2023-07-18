/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: { sans: ["Inter", "sans-serif"] },
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      base: "1rem",
      lg: "1.25rem",
      xl: "1.5rem",
      "2xl": "1.75rem",
      "3xl": "2rem",
      button: "12px",
    },
    fontWeight: { normal: 400, medium: 500, semibold: 600, bold: 700 },
    letterSpacing: {
      tighter: "-0.015em",
      tight: "0.02857em",
      normal: "0em",
      wide: "0.03333em",
      wider: "0.08333em",
    },
    lineHeight: {
      none: 1,
      tight: 1.4,
      snug: 1.5,
      normal: 1.6,
      relaxed: 1.66,
      loose: 1.75,
      overline: 2.66,
    },
    colors: {
      black: "#000000",
      white: "#ffffff",
      gray: { light: "#F3F3F3", DEFAULT: "#bbbbbb", dark: "#4a4a4a" },
      red: "#dc3545",
      yellow: "#ffc107",
      teal: "#17a2b8",
      green: "#28a745",
    },
    spacing: {
      1: "8px",
      2: "12px",
      3: "16px",
      4: "24px",
      5: "32px",
      6: "48px",
      8: "64px",
    },
    extend: {
      backgroundImage: (theme) => ({
        "banner-overlay":
          "linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6))",
      }),
    },
    variants: {
      extend: {
        transform: ["responsive", "motion-safe", "motion-reduce"],
        transitionProperty: ["responsive", "motion-safe", "motion-reduce"],
      },
    },
  },
  plugins: [],
};
