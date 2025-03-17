import { theme as defaultTheme } from "@bigcommerce/big-design-theme";
import styled, { css } from "styled-components";
import { MarginProps, withMargins } from "@bigcommerce/big-design";

import { TrProps } from "./StatelessTable";

export const StyledStatelessTable = styled.table`
  border-color: transparent;
  border-spacing: 0;
  color: ${({ theme }) => theme.colors.secondary70};
  text-align: start;
  width: 100%;

  figure {
    margin: 0;
    max-width: 100%;
    overflow-x: auto;
    white-space: nowrap;

    ${({ theme }) => theme.breakpoints.tablet} {
      white-space: normal;
    }

    ${withMargins()};
  }
`;

export const StyledThead = styled.thead`
  display: none;
  ${({ theme }) => theme.breakpoints.tablet} {
    display: table-header-group;
  }
  & > tr {
    background-color: transparent;
    @media (hover: hover) {
      &:hover {
        background-color: transparent;
      }
    }
  }
`;

export const StyledTh = styled.th`
  display: block;
  border-block-end: none;
  box-sizing: border-box;
  color: ${({ theme }) => theme.colors.secondary70};
  font-size: 1rem;
  padding: ${({ theme }) => theme.spacing.small};
  white-space: nowrap;

  padding: 0.75rem;

  ${({ theme }) => theme.breakpoints.tablet} {
    display: table-cell;
    border-block-end: 1px solid ${({ theme }) => theme.colors.secondary30};

    &:first-child {
      padding-inline-start: ${({ theme }) => theme.spacing.xLarge};
    }

    &:last-child {
      padding-inline-end: ${({ theme }) => theme.spacing.xLarge};
    }
  }
`;

export const StyledTr = styled.tr<Omit<TrProps, "children">>`
  display: block;
  transition: background-color 150ms ease-out;
  background-color: transparent;
  border-block-end: 1px solid ${({ theme }) => theme.colors.secondary30};
  position: relative;

  ${({ theme }) => theme.breakpoints.tablet} {
    display: table-row;
    border-block-end: none;
  }

  ${({ onClick }) =>
    onClick &&
    css`
      & > td,
      & > th {
        cursor: pointer;
        user-select: none;
      }
    `}

  ${({ onClick }) =>
    onClick &&
    css`
      @media (hover: hover) {
        &:hover {
          background-color: ${({ theme }) => theme.colors.primary10};
        }
      }
    `}
    

  &:focus {
    ${({ theme }) => css`
      background-color: ${theme.colors.primary10};
    `}
  }
`;

export const StyledTd = styled.td`
  border-block-end: none;
  box-sizing: border-box;
  color: ${({ theme }) => theme.colors.secondary70};
  font-size: 1rem;
  padding: 0.75rem;
  display: block;

  &.actions {
    position: absolute;
    top: 0;
    right: 0;
    width: min-content;
  }

  ${({ theme }) => theme.breakpoints.tablet} {
    display: table-cell;
    border-block-end: 1px solid ${({ theme }) => theme.colors.secondary30};

    &.actions {
      position: static;
    }

    &:first-child {
      padding-inline-start: ${({ theme }) => theme.spacing.xLarge};
    }

    &:last-child {
      padding-inline-end: ${({ theme }) => theme.spacing.xLarge};
    }
  }
`;

StyledStatelessTable.defaultProps = { theme: defaultTheme };
StyledThead.defaultProps = { theme: defaultTheme };
StyledTh.defaultProps = { theme: defaultTheme };
StyledTr.defaultProps = { theme: defaultTheme };
StyledTd.defaultProps = { theme: defaultTheme };
