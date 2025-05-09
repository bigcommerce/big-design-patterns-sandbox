import { theme as defaultTheme } from "@bigcommerce/big-design-theme";
import styled, { css } from "styled-components";
import { MarginProps, withMargins } from "@bigcommerce/big-design";

import { BoxProps } from "@bigcommerce/big-design";

export const StyledSidePanel = styled.aside<BoxProps>`
  width: 500px;
  overflow: hidden;
  transition: width 0.3s ease-in-out;
  padding-block: ${({ theme }) => theme.spacing.medium};
  padding-inline-start: ${({ theme }) => theme.spacing.xxSmall};
  box-sizing: border-box;
  height: 100%;

  & > .panel {
    height: 100%;
    border-radius: ${({ theme }) => theme.borderRadius.normal} 0 0
      ${({ theme }) => theme.borderRadius.normal};
  }

  &.closed {
    width: 0;
  }

  &.full-screen {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 1000;
  }
`;

StyledSidePanel.defaultProps = { theme: defaultTheme };
