import React, { FunctionComponent, useEffect, useState } from "react";
import { Box, Flex, FlexItem, H3, Panel } from "@bigcommerce/big-design";
import { Header, Page } from "@bigcommerce/big-design-patterns";
import { useNavigate } from "react-router";
import { theme } from "@bigcommerce/big-design-theme";
import { PanelContents } from "../../../../patterns/src/components/PanelContents/PanelContents";
import {
  StatelessTable,
  Tbody,
  Thead,
  Td,
  Th,
  Tr,
  SidePanel,
} from "bigcommerce-design-patterns";

import { getProducts } from "../../data/services";
import { DummyItem as Item } from "../../data/dummyProducts";

import { ListSidePanel } from "./ListSidePanel.styled";

const PageListSidePanel: FunctionComponent = () => {
  const navigate = useNavigate();
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [items, setItems] = useState<Item[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    Promise.all([getProducts()]).then(([products]) => {
      setItems(products as Item[]);
    });
  }, []);

  return (
    <ListSidePanel>
      <Page
        header={
          <Header
            title="List - Side Panel quick interaction"
            description="This pattern is especially handy when you have to quickly swich back and forth between two or more items."
            backLink={{
              text: "Back to patterns",
              onClick: () => navigate("/"),
              href: "#",
            }}
          ></Header>
        }
      >
        <Flex flexDirection="column" flexGap={theme.spacing.xLarge}>
          <FlexItem>
            <Panel header="Products" marginBottom={"xxLarge"}>
              <PanelContents padded={false}>
                <StatelessTable>
                  <Thead>
                    <Tr>
                      <Th scope="col">SKU</Th>
                      <Th scope="col">Name</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {items
                      .slice((page - 1) * rowsPerPage, page * rowsPerPage)
                      .map((item, rowIndex) => (
                        <Tr key={rowIndex} onClick={() => {}}>
                          <Td data-label="SKU">{item.sku}</Td>
                          <Td data-label="Name">{item.name}</Td>
                        </Tr>
                      ))}
                  </Tbody>
                </StatelessTable>
              </PanelContents>
            </Panel>
          </FlexItem>
        </Flex>
      </Page>
      <SidePanel header="Product details" />
    </ListSidePanel>
  );
};

export default PageListSidePanel;
