import React, { FunctionComponent, useState } from "react";
import {
  Button,
  Box,
  H4,
  H1,
  AccordionPanel,
  useAccordionPanel,
  Text,
  Grid,
  GridItem,
  Flex,
  FlexItem,
} from "@bigcommerce/big-design";
import { ThemeCard } from "./components/ThemeCard";
import { Page, Header } from "@bigcommerce/big-design-patterns";
import { IconEmpty } from "./Onboarding.styled";
import { CheckCircleIcon } from "@bigcommerce/big-design-icons";

const PageOnboarding: FunctionComponent = () => {
  const [controllerData, setControllerData] = useState({
    screens: [
      {
        title: "Create your storefront",
        steps: [
          {
            title: "Select a theme",
            contents: (
              <>
                <Flex flexGap="1rem">
                  <FlexItem>
                    <ThemeCard
                      themeName="Cornerstone Light"
                      features={[
                        "Includes 3 styles"
                      ]}
                      price={0}
                      thumbnail="https://bc-stencil-production.s3.amazonaws.com/m/0dbcef90-84cc-013e-5480-3e4666af9723/small_thumb_screenshot.png"
                      detailsLink="https://example.com/theme-details"
                      isSelected={true}
                      onSelect={() => console.log("Theme selected")}
                    />
                  </FlexItem>
                  <FlexItem>
                    <ThemeCard
                      themeName="Cornerstone Warm"
                      features={[
                        "Includes 3 styles"
                      ]}
                      price={0}
                      thumbnail="https://bc-stencil-production.s3.amazonaws.com/m/0dd061c0-84cc-013e-5480-3e4666af9723/small_thumb_screenshot.png"
                      detailsLink="https://example.com/theme-details"
                      isSelected={false}
                      onSelect={() => console.log("Theme selected")}
                    />
                  </FlexItem>
                  <FlexItem>
                    <ThemeCard
                      themeName="Manifest Home"
                      features={[
                        "Includes 4 styles"
                      ]}
                      price={149.99}
                      thumbnail="https://bc-stencil-production.s3.amazonaws.com/m/790cc370-7260-013e-3c83-1adfdde075f2/small_thumb_screenshot.png"
                      detailsLink="https://example.com/theme-details"
                      isSelected={false}
                      onSelect={() => console.log("Theme selected")}
                    />
                  </FlexItem>
                </Flex>
              </>
            ),
            done: false,
          },
          {
            title: "Apply your branding",
            contents: <Text>Apply branding contents</Text>,
            done: false,
          },
        ],
      },
      {
        title: "Create your product catalog",
        steps: [
          {
            title: "Add your products",
            contents: <Text>Add products contents</Text>,
            done: false,
          },
        ],
      },
    ],
  });

  // Find the first screen with incomplete steps
  const firstIncompleteScreen = controllerData.screens.find((screen) =>
    screen.steps.some((step) => !step.done)
  );

  // Find the first incomplete step within that screen
  const firstIncompleteStepIndex =
    firstIncompleteScreen?.steps.findIndex((step) => !step.done) ?? -1;

  const { panels } = useAccordionPanel(
    firstIncompleteScreen?.steps.map((step, stepIndex) => ({
      defaultExpanded: stepIndex === firstIncompleteStepIndex,
      header: step.title,
      iconLeft: step.done ? <CheckCircleIcon color="success" /> : <IconEmpty />,
      children: step.contents,
    })) ?? []
  );

  return (
    <Page header={<Header title="Welcome to BigCommerce" />}>
      {firstIncompleteScreen && (
        <AccordionPanel header={firstIncompleteScreen.title} panels={panels} />
      )}
    </Page>
  );
};

export default PageOnboarding;
