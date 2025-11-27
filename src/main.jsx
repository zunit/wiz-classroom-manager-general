import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AppProvider } from "@/context/AppContext";
import { ThemeProvider } from "@mui/material";
import { AppTheme } from "@/themes/AppTheme";
import App from "@/App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppProvider>
      <ThemeProvider theme={AppTheme} defaultMode="light">
        <App />
      </ThemeProvider>
    </AppProvider>
  </StrictMode>
);
