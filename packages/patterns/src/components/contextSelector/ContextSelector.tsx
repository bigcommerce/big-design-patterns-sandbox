import React, { FunctionComponent, ReactNode } from "react";
import { StyledContextSelector } from "./ContextSelector.styled";

export interface ContextSelectorProps {
  children: ReactNode;
}

export const ContextSelector: FunctionComponent<ContextSelectorProps> = ({
  children,
}) => {
  return <StyledContextSelector>{children}</StyledContextSelector>;
};
