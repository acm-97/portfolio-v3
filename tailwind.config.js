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
          main: "#5eead4 !important",
          light: "#99f6e4 !important",
          dark: "#14b8a6 !important",
          darker: "#134e4a !important",
        },
        gray: {
          main: "#ccd6f6 !important",
          dark: "#3f485a !important",
        },
      },
      textColor: {
        primary: {
          main: "#ccd6f6 !important",
          dark: "#94a3b8 !important",
          darker: "#242933 !important",
        },
        secondary: {
          main: "#5eead4 !important",
          dark: "#14b8a6 !important",
          light: "#99f6e4 !important",
        },
      },
      backgroundColor: {
        primary: {
          main: "#2a303c !important",
          light: "#3f485a !important",
          dark: "#242933 !important",
          darker: "#242933 !important",
        },
        // accent: (this) => this.theme.extend.textColor.secondary ,
        hover: "#2e3542 !important",
      },
    },
    animation: {
      "fade-in-down": "fade-in-down 0.3s ease-in both",
      "fade-in": 'fade-in 0.1s ease-in both'
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
    plugin(function ({ addVariant, addComponents, matchUtilities, theme }) {
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
        ),
        addComponents({
          ".link-underline": {
            position: "relative",
            textDecoration: "none",
            color: "#5eead4",
            "&:before": {
              content: "''",
              position: "absolute",
              width: "100%",
              height: "0.01rem",
              bottom: 0,
              left: 0,
              background: "#5eead4 !important",
              visibility: "hidden",
              borderRadius: "1rem",
              transform: "scaleX(0)",
              transition: "0.25s linear",
            },
            "&:hover": {
              "&:before": {
                visibility: "visible !important",
                transform: "scaleX(1) !important",
              },
            },
          },
        });
    }),
  ],
};
