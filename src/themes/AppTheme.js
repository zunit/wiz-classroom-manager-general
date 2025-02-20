import { createTheme } from "@mui/material";

export const AppTheme = createTheme({
  cssVariables: true,
  defaultColorScheme: "light",
  colorSchemeSelector: "data",
  colorSchemes: {
    light: {
      palette: {
        background: {
          default: "#ffffff",
          inverse: "#242424",
        },
        text: {
          primary: "rgba(0, 0, 0, 0.87)",
          inverse: "rgba(255, 255, 255, 0.87)",
        },
        action: {
          hover: "#00000010",
        },
        border: {
          default: "#00000040",
        },
        primary: {
          main: "#6f4ff9",
        },
        secondary: {
          main: "#00b6a6",
        },
        "activity-card": {
          "pulse-1": "#00000010",
          "pulse-2": "#00000020",
        },
      },
    },
    dark: {
      palette: {
        background: {
          default: "#242424",
          inverse: "#ffffff",
        },
        text: {
          primary: "rgba(255, 255, 255, 0.87)",
          inverse: "rgba(0, 0, 0, 0.87)",
        },
        action: {
          hover: "#ffffff20",
        },
        border: {
          default: "#ffffff40",
        },
        primary: {
          main: "#8e70fa",
        },
        secondary: {
          main: "#67aba3",
        },
        "activity-card": {
          "pulse-1": "#ffffff18",
          "pulse-2": "#ffffff30",
        },
      },
    },
  },
});
