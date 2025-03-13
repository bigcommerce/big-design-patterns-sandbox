import React from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { theme as defaultTheme } from "@bigcommerce/big-design-theme";

interface ThemeProviderProps {
  children: React.ReactNode;
  theme?: typeof defaultTheme;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  theme = defaultTheme,
}) => {
  return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>;
};

export default ThemeProvider;
