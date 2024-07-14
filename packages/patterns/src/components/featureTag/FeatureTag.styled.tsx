import { theme as defaultTheme } from "@bigcommerce/big-design-theme";
import styled from "styled-components";
import { BoxProps } from "@bigcommerce/big-design";

export const StyledFeatureTag = styled.div<BoxProps>`
  display: inline-flex;
  gap: ${({ theme }) => theme.spacing.xxSmall};
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.secondary20};
  color: ${({ theme }) => theme.colors.secondary60};
  fill: ${({ theme }) => theme.colors.secondary60};
  padding-inline: ${({ theme }) => theme.spacing.xSmall};
  padding-block: calc(${({ theme }) => theme.spacing.xSmall} / 4);
  border-radius: ${({ theme }) => theme.borderRadius.normal};
  line-height: ${({ theme }) => theme.helpers.remCalc(20)};
  font-size: ${({ theme }) => theme.helpers.remCalc(14)};
  user-select: none;
  cursor: pointer;
  outline: none;

  &.active {
    color: ${({ theme }) => theme.colors.primary50};
    fill: ${({ theme }) => theme.colors.primary40};
    background-color: ${({ theme }) => theme.colors.primary10};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary60};
    fill: ${({ theme }) => theme.colors.primary40};
    background-color: ${({ theme }) => theme.colors.primary20};
  }

  &:focus {
    outline: 4px solid ${({ theme }) => theme.colors.primary20};
  }

  &:active {
    color: ${({ theme }) => theme.colors.primary70};
    fill: ${({ theme }) => theme.colors.primary60};
    background-color: ${({ theme }) => theme.colors.primary30};
  }

  &:focused:active {
    color: ${({ theme }) => theme.colors.primary70};
    fill: ${({ theme }) => theme.colors.primary60};
    background-color: ${({ theme }) => theme.colors.primary30};
  }
`;

StyledFeatureTag.defaultProps = { theme: defaultTheme };