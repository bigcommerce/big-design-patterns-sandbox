import { theme as defaultTheme } from "@bigcommerce/big-design-theme";
import styled from "styled-components";
import { Box, BoxProps } from "@bigcommerce/big-design";

import { GridItem, Link } from "@bigcommerce/big-design";

export const IconEmpty = styled(Box)`
  width: 20px;
  height: 20px;
  border: ${({ theme }) => theme.border.box};
  border-radius: 50%;
  border-style: dashed;
  border-width: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;

