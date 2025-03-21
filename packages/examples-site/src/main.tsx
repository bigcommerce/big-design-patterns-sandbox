import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { theme } from "@bigcommerce/big-design-theme";
import { ThemeProvider } from "styled-components";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
