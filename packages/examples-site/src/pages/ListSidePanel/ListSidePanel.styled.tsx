import styled from "styled-components";
import { theme as defaultTheme } from "@bigcommerce/big-design-theme";

export const ListSidePanel = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;

  & > div:first-child {
    min-height: 100%;
    flex-grow: 1;
    flex-shrink: 1;
  }

  & > aside:last-child {
    flex-grow: 0;
    flex-shrink: 0;
    position: sticky;
    top: 0;
    height: calc(100vh - 56px);
  }
`;
