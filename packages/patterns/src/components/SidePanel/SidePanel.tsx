import React, { ReactNode, FunctionComponent } from "react";

import { StyledSidePanel } from "./SidePanel.styled";

import { BoxProps, Flex, FlexItem, Button, Box } from "@bigcommerce/big-design";
import {
  WindowExpandIcon,
  WindowMinimizeIcon,
  CloseIcon,
} from "@bigcommerce/big-design-icons";

export interface SidePanelProps extends BoxProps {
  children?: ReactNode;
  header?: string;
  icon?: ReactNode;
  expanded?: boolean;
  isClosable?: boolean;
}

export const SidePanel: FunctionComponent<SidePanelProps> = ({
  children,
  header,
  icon,
  expanded,
}) => {
  return (
    <StyledSidePanel>
      <Box className="panel" backgroundColor="white" shadow="raised">
        <Flex
          as="header"
          alignItems="center"
          borderBottom="box"
          paddingLeft="small"
          paddingRight="xxSmall"
          paddingVertical="xxSmall"
        >
          {icon && (
            <FlexItem flexGrow={0} flexShrink={0}>
              {icon}
            </FlexItem>
          )}
          <FlexItem flexGrow={1} flexShrink={1}>
            {header}
          </FlexItem>
          <FlexItem flexGrow={0} flexShrink={0}>
            {expanded ? (
              <Button
                variant="utility"
                onClick={() => {}}
                iconOnly={<WindowMinimizeIcon />}
              />
            ) : (
              <Button
                variant="utility"
                onClick={() => {}}
                iconOnly={<WindowExpandIcon />}
              />
            )}
          </FlexItem>
          <FlexItem flexGrow={0} flexShrink={0}>
            <Button
              variant="utility"
              onClick={() => {}}
              iconOnly={<CloseIcon />}
            />
          </FlexItem>
        </Flex>
        <Box as="main">{children}</Box>
      </Box>
    </StyledSidePanel>
  );
};
SidePanel.displayName = "SidePanel";
