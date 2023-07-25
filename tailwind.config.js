/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Calibre"',
          '"Inter"',
          '"San Francisco"',
          '"SF Pro Text"',
          "-apple-system",
          "system-ui",
          "sans-serif",
        ],
        mono: [
          '"SF Mono"',
          '"Fira Code"',
          '"Fira Mono"',
          '"Roboto Mono"',
          "monospace",
        ],
      },
      screens: {
        sm: "600px",
        lg: "1080px",
      },
      colors: {
        teal: {
          main: `#5eead4 !important`,
          dark: `#14b8a6 !important`,
          light: `#99f6e4 !important`,
        },
      },
      textColor: {
        primary: {
          main: "#ccd6f6 !important",
          dark: "#94a3b8 !important",
          darker: "#242933 !important",
        },
        secondary: {
          main: `#5eead4 !important`,
          dark: `#14b8a6 !important`,
          light: `#99f6e4 !important`,
        },
      },
      backgroundColor: {
        primary: {
          main: `#2a303c !important`,
          dark: "#242933 !important",
          light: "#3f485a !important",
        },
        // accent: (this) => this.theme.extend.textColor.secondary ,
        hover: "#2e3542 !important",
      },
    },
    animation: {
      "fade-in-down": "fade-in-down 0.3s ease-in both",
    },
    keyframes: {
      "fade-in-down": {
        from: {
          opacity: 0,
          transform: "translate3d(0, -20%, 0)",
        },
        to: {
          opacity: 1,
          transform: "translate3d(0, 0, 0)",
        },
      },
    },
  },
  plugins: [
    require("daisyui"),
    plugin(function ({ addVariant, matchUtilities, theme }) {
      addVariant("hocus", ["&:hover", "&:focus"]),
        addVariant("not-last", "&:not(:last-child)"),
        matchUtilities(
          {
            "animation-delay": (value) => {
              return {
                "animation-delay": value,
              };
            },
          },
          {
            values: theme("transitionDelay"),
          }
        );
    }),
  ],
};
