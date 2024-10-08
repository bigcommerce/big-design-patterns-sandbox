import React, { FunctionComponent, ReactNode } from "react";
import { StyledScroller } from "./Scroller.styled";
import { GridProps } from "@bigcommerce/big-design";
import { Grid } from "@bigcommerce/big-design";

export interface ScrollerProps extends GridProps{
  width?: GridProps["gridColumns"];
  height?: GridProps["gridRows"];
}

export const Scroller: FunctionComponent<ScrollerProps> = (props) => {
  return (
    <Grid gridColumns={props.width} gridRows={props.height} {...props}>
        <StyledScroller>
            {props.children}
        </StyledScroller>
    </Grid>
  );
};
