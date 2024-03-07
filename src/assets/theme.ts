import { createTheme } from "@mui/material/styles";
import InterRegular from "@/assets/fonts/Inter-Regular.ttf";

export const customTheme = createTheme({
  palette: {
    primary: {
      main: "#2a85ff",
      light: "#2a85ff80",
    },
    success: {
      main: "#b5e4ca",
    },
    warning: {
      main: "#ffbc99",
    },
    background: {
      default: "#fcfcfc",
      paper: "#111315",
    },
    grey: {
      "100": "#f4f4f4",
      "200": "#6f767e",
    },
    text: {
      primary: "#6f767e",
      secondary: "#1a1d1f",
    },
    secondary: {
      main: "#fff",
    },
  },
  typography: {
    fontFamily: "InterRegular, Arial",
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'InterRegular';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('InterRegular'), local('InterRegular-Regular'), url(${InterRegular});
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },
  },
});
