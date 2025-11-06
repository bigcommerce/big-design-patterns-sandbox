import { theme as defaultTheme, remCalc } from "@bigcommerce/big-design-theme";
import { Box, Badge, Small, Link } from "@bigcommerce/big-design";
import styled from "styled-components";

export const ThemeCardContainer = styled(Box)`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 284px;
  height: 282px;
  border: ${({ theme }) => theme.border.box};
  border-radius: ${remCalc(8)};
  padding: ${({ theme }) => theme.spacing.none};
  overflow: hidden;
  cursor: pointer;

  &.selected {
    border-color: ${({ theme }) => theme.colors.primary40};
  }
`;

ThemeCardContainer.defaultProps = { theme: defaultTheme };

export const ThemeCardThumbnail = styled.img`
  height: 200px;
  width: 286px;
  object-fit: cover;
  object-position: top;
`;

export const ThemeCardDetails = styled(Box)`
  padding: ${({ theme }) => theme.spacing.xSmall};
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &.selected {
    background-color: ${({ theme }) => theme.colors.primary10};
  }
`;

export const ThemeCardLink = styled(Link)`
color: inherit;
  font-size: ${({ theme }) => theme.typography.fontSize.small};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};

  &.selected {
    color: ${({ theme }) => theme.colors.primary40};
  }
`;

ThemeCardLink.defaultProps = { theme: defaultTheme };

export const FeatureList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  font-size: ${remCalc(12)};

  li {
    display: inline-block;
    margin-right: ${({ theme }) => theme.spacing.xSmall};

    &:last-child {
      margin-right: 0;
    }
  }
`;

FeatureList.defaultProps = { theme: defaultTheme };

export const SrOnly = styled(Box)`
  position: absolute !important;
  clip: rect(0 0 0 0) !important;
  height: 1px !important;
  margin: -1px !important;
  overflow: hidden !important;
  padding: 0 !important;
  width: 1px !important;
  white-space: nowrap !important;
`;

export const SelectedBadge = styled(Box)`
  display: block;
  position: absolute;
  inset-block-start: ${({ theme }) => theme.spacing.xxSmall};
  inset-inline-start: ${({ theme }) => theme.spacing.xSmall};
  z-index: 1;
`;

SelectedBadge.defaultProps = { theme: defaultTheme };
