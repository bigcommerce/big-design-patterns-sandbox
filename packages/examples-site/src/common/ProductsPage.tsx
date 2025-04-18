import React, { FunctionComponent } from "react";
import { Flex, FlexItem, Panel } from "@bigcommerce/big-design";
import { Header, Page } from "@bigcommerce/big-design-patterns";
import { useNavigate } from "react-router";
import { theme } from "@bigcommerce/big-design-theme";

/**
 * PageList component - Displays a page with a list of items in a table.
 */

export interface ProductPageProps {
  headerTitle: string;
  headerDescription: React.ReactNode;
  filters: React.ReactNode;
  products: React.ReactNode;
}

const ProductsPage: FunctionComponent<ProductPageProps> = ({
  headerTitle,
  headerDescription,
  filters,
  products,
}) => {
  // NAVIGATION
  const navigate = useNavigate();

  return (
    <>
      <Page
        header={
          <Header
            description={headerDescription}
            title={headerTitle}
            backLink={{
              text: "Back to patterns",
              onClick: () => navigate("/"),
              href: "#",
            }}
          />
        }
      >
        <Flex flexDirection="column" flexGap={theme.spacing.xLarge}>
          <FlexItem>
            {
              //The most common way of organizing information within the BigDesign patterns is with the use of panels.
              //In this case we only have one panel, but you can have multiple panels within a page.
            }
            <Panel header="Items list">
              {filters}
              {products}
            </Panel>
          </FlexItem>
        </Flex>
      </Page>
    </>
  );
};

export default ProductsPage;
