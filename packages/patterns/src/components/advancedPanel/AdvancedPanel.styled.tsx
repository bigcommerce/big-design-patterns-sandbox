import styled from "styled-components";
import { BoxProps } from "@bigcommerce/big-design";

export const StyledAdvancedPanelContents = styled.div<BoxProps>`
  display: block;
  box-sizing: border-box;

  @media (min-width: ${({ theme }) => theme.breakpointValues.tablet}) {
    padding: ${({ theme }) => theme.spacing.xxLarge};
  }
`;
