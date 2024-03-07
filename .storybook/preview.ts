import type { Preview } from "@storybook/react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";
import { customTheme } from "../src/assets/theme";
import "../src/index.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      customTheme,
    },
    defaultTheme: "light",
    Provider: ThemeProvider,
    GlobalStyles: CssBaseline,
  }),
];

export default preview;
