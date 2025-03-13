import { theme as defaultTheme } from "@bigcommerce/big-design-theme";
import styled from "styled-components";
import { BoxProps } from "@bigcommerce/big-design";
import {
  pageMaxWidth,
  pageWideMaxWidth,
} from "../../big-design-theme-extras/StyleDefinitions";

// add the wide breakpoint definition to the theme
const moddedTheme = {
  ...defaultTheme,
  breakpoints: {
    ...defaultTheme.breakpoints,
    wide: "1500px",
  },
};

/**
 * Styled component for the action bar.
 * Positioned fixed at the bottom of the viewport covering the full horizontal width.
 *
 * Uses `BoxProps` for styling props allowing it to accept all box-model props specified in `BoxProps`.
 *
 * @type {StyledComponent<"div", any, BoxProps, never>}
 */
export const StyledActionBar = styled.div<BoxProps>`
  position: fixed;
  inset-inline-start: 0;
  inset-inline-end: 0;
  inset-block-end: 0;
  background-color: ${({ theme }) => theme.colors.white};
  border-block-start: ${({ theme }) => theme.border.box};
  z-index: ${({ theme }) => theme.zIndex.fixed};
`;

/**
 * Styled component for the contents within the action bar.
 * Centers the content horizontally and aligns them to the end of the container.
 * Configured to adapt padding based on device size using theme breakpoints.
 *
 * Accepts all box-model properties defined in `BoxProps`.
 *
 * @type {StyledComponent<"div", any, BoxProps, never>}
 */
export const StyledActionBarContents = styled.div<BoxProps>`
  margin-inline: auto;
  margin-block: ${({ theme }) => theme.spacing.none};
  display: flex;
  justify-content: end;
  width: 100%;
  padding-inline: ${({ theme }) => theme.spacing.xLarge};
  padding-block: ${({ theme }) => theme.spacing.small};
  max-width: ${pageMaxWidth};
  box-sizing: border-box;

  @media (min-width: ${({ theme }) => theme.breakpointValues.tablet}) {
    padding-inline: ${({ theme }) => theme.spacing.xxLarge};
  }

  @media (min-width: ${moddedTheme.breakpoints.wide}) {
    max-width: ${pageWideMaxWidth};
  }
`;
