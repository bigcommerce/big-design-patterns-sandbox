import React, { FunctionComponent } from "react";
import { StyledScroller } from "./Scroller.styled";
import { Grid, GridProps } from "@bigcommerce/big-design";

export interface ScrollerProps extends GridProps {
  width?: GridProps["gridColumns"];
  height?: GridProps["gridRows"];
}

export const Scroller: FunctionComponent<ScrollerProps> = (props) => {
  return (
    <Grid gridColumns={props.width} gridRows={props.height} {...props}>
      <StyledScroller>{props.children}</StyledScroller>
    </Grid>
  );
};
