import React, { FunctionComponent, useState, useEffect } from "react";
import {
  Flex,
  FlexItem,
  Box,
  Button,
  Panel,
  Search,
  Table,
  TableItem,
  Text,
  Dropdown,
  ProgressCircle,
} from "@bigcommerce/big-design";
import { InfoIllustration } from "bigcommerce-design-patterns";
import { MoreHorizIcon } from "@bigcommerce/big-design-icons";
import { Header, Page } from "@bigcommerce/big-design-patterns";
import { useNavigate } from "react-router";
import { useLocation } from "react-router-dom";
import { theme } from "@bigcommerce/big-design-theme";
import {
  StyledPanelContents,
  StyledProductImage,
} from "./FiltersSearchPage.styled";

import { DummyItem } from "../../data/dummyProducts";
import { getCategories, getProducts } from "../../data/services";
import { Category } from "../../data/dummyCategories";
import { findCategoryById } from "../../helpers/categories";
import { formatPrice } from "../../helpers/price";

/**
 * Mock data for the items to be displayed in the table.
 */
interface Item extends DummyItem, TableItem {}

/**
 * Column definitions for the table.
 */

/**
 * Function to sort the items based on a column and direction.
 * @param {Item[]} items - The items to sort.
 * @param {string} columnHash - The column to sort by.
 * @param {string} direction - The direction to sort (ASC or DESC).
 * @returns {Item[]} - The sorted items.
 */
const sort = (items: Item[], columnHash: string, direction: string) => {
  return items
    .concat()
    .sort((a, b) =>
      direction === "ASC"
        ? a[columnHash] >= b[columnHash]
          ? 1
          : -1
        : a[columnHash] <= b[columnHash]
        ? 1
        : -1
    );
};

/**
 * PageList component - Displays a page with a list of items in a table.
 */
const PageFiltersSearch: FunctionComponent = () => {
  // NAVIGATION
  const location = useLocation();

  const navigate = useNavigate();

  // TABLE HEADERS
  const columns = [
    {
      header: "Name",
      hash: "name",
      render: ({ name, image }: { name: string; image: string }) => {
        const imgSrc = `./assets/images/product-images/${image}`;
        return (
          <Flex flexGap={theme.spacing.small} alignItems="center">
            <StyledProductImage>
              <img src={imgSrc} alt={name} />
            </StyledProductImage>
            <Text>{name}</Text>
          </Flex>
        );
      },
      isSortable: true,
    },
    {
      header: "Sku",
      hash: "sku",
      render: ({ sku }: { sku: string }) => sku,
      isSortable: true,
    },
    {
      header: "Categories",
      hash: "categories",
      render: ({ categories }: { categories: number[] }) => {
        // get category labels from a deep object and join them
        return categories
          .map((categoryId) => {
            const category = findCategoryById(productCats, categoryId);
            return category ? category.label : "";
          })
          .join(", ");
      },
    },
    {
      header: "Stock",
      hash: "stock",
      render: ({ stock }: { stock: number }) => stock,
      isSortable: true,
    },
    {
      header: "Price",
      hash: "price",
      render: ({ price }: { price: number }) => formatPrice(price),
      isSortable: true,
    },
    {
      header: null,
      hash: "actions",
      render: ({ productId, url }: { productId: number; url: string }) => {
        return (
          <Dropdown
            items={[
              {
                content: "Some action",
                onItemClick: () => {
                  return null;
                },
                hash: "edsome-action",
              },
              {
                content: "Some other action",
                onItemClick: () => {
                  return null;
                },
                hash: "some-other-action",
              },
            ]}
            maxHeight={250}
            placement="bottom-end"
            toggle={
              <Button variant="utility" iconOnly={<MoreHorizIcon />}></Button>
            }
          />
        );
      },
      isSortable: true,
    },
  ];

  // DATA HANDLING
  const [currentItems, setCurrentItems] = useState<Item[]>([]);
  const [itemsLoaded, setItemsLoaded] = useState(false);

  const setTableItems = (
    themItems: any,
    thePage = currentPage,
    itemCount = itemsPerPage
  ) => {
    const maxItems = thePage * itemCount;
    const lastItem = Math.min(maxItems, themItems.length);
    const firstItem = Math.max(0, maxItems - itemsPerPage);

    setCurrentItems(themItems.slice(firstItem, lastItem));
  };

  // PAGINATION
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPageOptions] = useState([10, 20, 30]);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const onItemsPerPageChange = (newRange: number) => {
    setCurrentPage(1);
    setItemsPerPage(newRange);
  };

  const onPageChange = (newPage: number) => {
    setCurrentPage(newPage);
    setTableItems(items, newPage);
  };

  // SORTING
  const [columnHash, setColumnHash] = useState("");
  const [direction, setDirection] = useState<"ASC" | "DESC">("ASC");
  const onSort = (newColumnHash: string, newDirection: "ASC" | "DESC") => {
    setColumnHash(newColumnHash);
    setDirection(newDirection);
    const orderedItems = sort(items, newColumnHash, newDirection);
    setTableItems(orderedItems);
  };

  // SEARCH
  const [searchValue, setSearchValue] = useState("");
  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
    // let's reset the items to the original data if the search value is empty
    if (!event.target.value) {
      setItems(allItems);
      setTableItems(allItems);
    }
  };
  // search submission handler
  const onSearchSubmit = () => {
    if (searchValue) {
      // let's find the items
      const foundItems = items.filter((item) =>
        item.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      // set the items
      setItems(foundItems);
      setTableItems(foundItems);
    }
  };

  // EFFECTS

  // fetch categories and product all at once

  const [productCats, setProductCats] = useState<Category[]>([]);
  const [items, setItems] = useState<Item[]>([]);
  const [allItems, setAllItems] = useState<Item[]>([]);
  useEffect(() => {
    Promise.all([getCategories(), getProducts()]).then(
      ([categories, products]) => {
        setProductCats(categories as Category[]);
        setAllItems(products as Item[]);
        setItems(products as Item[]);
        setTableItems(products as Item[]);
        setItemsLoaded(true);
      }
    );
  }, []);

  // PAGE ELEMENTS

  // Empty state
  const EmptyState = (
    <Flex
      justifyContent="center"
      paddingVertical="xxxLarge"
      marginBottom="xxxLarge"
    >
      {items.length < 1 && !itemsLoaded ? (
        // if products havent been loaded, let's show a loader
        <ProgressCircle size="large" />
      ) : (
        // if products have been loaded, let's show the empty
        <InfoIllustration icon="empty">
          <Text color="secondary60">
            {
              // differentiate from empty search or empty products and show a loader element if the data is being fetched
              searchValue
                ? `No products were found for query “${searchValue}”`
                : "You have no products yet."
            }
          </Text>
        </InfoIllustration>
      )}
    </Flex>
  );

  return (
    <>
      <Page
        header={
          <Header
            description="Filtering data using simple search"
            title="Simple search"
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
              {
                //search
              }
              <Box marginBottom="medium">
                <Search
                  onChange={onSearchChange}
                  onSubmit={onSearchSubmit}
                  value={searchValue}
                />
              </Box>
              <StyledPanelContents>
                {
                  //The Table component is used to display tabular data.
                  //It allows you to display a list of items in a table format.
                  //The table can be customized with different columns and actions.
                  //The table also allows you to select items and perform actions on them.
                  //In this case, the table is displaying a list of products.
                }
                <Table
                  columns={columns as any}
                  itemName="Products"
                  items={currentItems}
                  keyField="sku"
                  pagination={{
                    currentPage,
                    totalItems: items.length,
                    onPageChange,
                    itemsPerPageOptions,
                    onItemsPerPageChange,
                    itemsPerPage,
                  }}
                  sortable={{
                    columnHash,
                    direction,
                    onSort,
                  }}
                  emptyComponent={EmptyState}
                />
              </StyledPanelContents>
            </Panel>
          </FlexItem>
        </Flex>
      </Page>
    </>
  );
};

export default PageFiltersSearch;
