import React, { FunctionComponent } from "react";
import {
  Flex,
  Button,
  Text,
  Panel,
  Box,
  H3,
  Grid,
} from "@bigcommerce/big-design";
import { Hero } from "bigcommerce-design-patterns";
import { Page } from "@bigcommerce/big-design-patterns";
import { useNavigate } from "react-router";

import { theme } from "@bigcommerce/big-design-theme";
import { Link } from "react-router-dom";

const PageFeaturedContent: FunctionComponent = () => {
  const navigate = useNavigate();

  return (
    <Page
      background={{
        src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwMCIgaGVpZ2h0PSI4OTciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgY2xpcC1wYXRoPSJ1cmwoI2EpIj48cGF0aCBmaWxsPSIjRjZGN0ZDIiBkPSJNMCAwaDEwMDB2ODk3SDB6Ii8+PGcgZmlsdGVyPSJ1cmwoI2IpIj48ZWxsaXBzZSBjeD0iNTQxLjc1IiBjeT0iLTI4LjE1OSIgcng9IjM0NS44MDYiIHJ5PSI0ODYuMjAzIiBmaWxsPSJ1cmwoI2MpIi8+PC9nPjxnIGZpbHRlcj0idXJsKCNkKSI+PGVsbGlwc2UgY3g9Ijg2NS40MzEiIGN5PSIyMTAuMzM0IiByeD0iMjIwLjQzMSIgcnk9IjMwOS45MjUiIGZpbGw9InVybCgjZSkiLz48L2c+PHBhdGggZD0iTTkxNSA3NjQuNTg0IDU3MC4wMTQgNDIuMzUxIDIyNS4wMjggNzY0LjU4MyIgc3Ryb2tlPSJ1cmwoI2YpIi8+PHBhdGggZD0ibTIyNS4wMjgtMTc0LjMxMiAzNDQuOTg2IDcxOS45NDhMOTE1LTE3NC4zMTIiIHN0cm9rZT0idXJsKCNnKSIvPjwvZz48ZGVmcz48cmFkaWFsR3JhZGllbnQgaWQ9ImMiIGN4PSIwIiBjeT0iMCIgcj0iMSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMCA5NzIuNDA1IC02MjkuNzk2IDAgNTQxLjc1IC01MTQuMzYyKSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjQURDMEYyIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRTlFQkZGIi8+PC9yYWRpYWxHcmFkaWVudD48cmFkaWFsR3JhZGllbnQgaWQ9ImUiIGN4PSIwIiBjeT0iMCIgcj0iMSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMCA2MTkuODUxIC00MDEuNDU4IDAgODY1LjQzMSAtOTkuNTkyKSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjNzJEN0RCIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRDlGOUZBIi8+PC9yYWRpYWxHcmFkaWVudD48cmFkaWFsR3JhZGllbnQgaWQ9ImYiIGN4PSIwIiBjeT0iMCIgcj0iMSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMCAxMzMzLjY1IC03ODQuMjgzIDAgNTcwLjAxNCAtNDkuMzYyKSI+PHN0b3Agc3RvcC1jb2xvcj0iI2ZmZiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmZiIgc3RvcC1vcGFjaXR5PSIwIi8+PC9yYWRpYWxHcmFkaWVudD48cmFkaWFsR3JhZGllbnQgaWQ9ImciIGN4PSIwIiBjeT0iMCIgcj0iMSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMCAtMTMyOS40MyA3ODQuMjgzIDAgNTcwLjAxNCA2MzcuMDU4KSI+PHN0b3Agc3RvcC1jb2xvcj0iI2ZmZiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmZiIgc3RvcC1vcGFjaXR5PSIwIi8+PC9yYWRpYWxHcmFkaWVudD48ZmlsdGVyIGlkPSJiIiB4PSItOTkuMDU2IiB5PSItODA5LjM2MiIgd2lkdGg9IjEyODEuNjEiIGhlaWdodD0iMTU2Mi40MSIgZmlsdGVyVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiPjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+PGZlQmxlbmQgaW49IlNvdXJjZUdyYXBoaWMiIGluMj0iQmFja2dyb3VuZEltYWdlRml4IiByZXN1bHQ9InNoYXBlIi8+PGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMTQ3LjUiIHJlc3VsdD0iZWZmZWN0MV9mb3JlZ3JvdW5kQmx1cl8zNjE0XzY5NTciLz48L2ZpbHRlcj48ZmlsdGVyIGlkPSJkIiB4PSI0MzYuOTI3IiB5PSItMzA3LjY2NSIgd2lkdGg9Ijg1Ny4wMDgiIGhlaWdodD0iMTAzNiIgZmlsdGVyVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiPjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+PGZlQmxlbmQgaW49IlNvdXJjZUdyYXBoaWMiIGluMj0iQmFja2dyb3VuZEltYWdlRml4IiByZXN1bHQ9InNoYXBlIi8+PGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMTA0LjAzNyIgcmVzdWx0PSJlZmZlY3QxX2ZvcmVncm91bmRCbHVyXzM2MTRfNjk1NyIvPjwvZmlsdGVyPjxjbGlwUGF0aCBpZD0iYSI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgxMDAwdjg5N0gweiIvPjwvY2xpcFBhdGg+PC9kZWZzPjwvc3ZnPg==",
        backgroundSize: "contain",
        backgroundPosition: "top right",
      }}
    >
      <Hero
        heading="Hero heading"
        mediaContent={
          <img
            src="./assets/images/page-hero-image.png"
            alt="smiling woman with glasses holding coffee mug while working on laptop"
            height="100%"
          />
        }
      >
        <Flex flexDirection={"column"}>
          <Text color="secondary70">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque a sapien elit. Nullam vel leo enim. Fusce molestie vel
            ex quis aliquam. Quisque bibendum lorem id neque tempus pretium in
            quis metus.
            <ul>
              <li>Proin in tempor nulla. </li>
              <li>Nam commodo at lorem sed vestibulum.</li>
              <li>
                Morbi purus ex, scelerisque nec malesuada in, faucibus et metus.
              </li>
              <li>Pellentesque felis erat, scelerisque a dapibus sed.</li>
            </ul>
          </Text>
          <Flex>
            <Button>Main CTA</Button>
            <Button variant="subtle" onClick={() => navigate("/")}>
              Back to patterns
            </Button>
          </Flex>
        </Flex>
      </Hero>
      <Grid
        marginTop="xxxLarge"
        gridColumns={{
          mobile: "1fr",
          tablet: "75% 25%",
        }}
      >
        <Panel header="Panel for your contents">
          <Flex
            flexGap={theme.spacing.large}
            flexDirection={{ mobile: "column", tablet: "row" }}
          >
            <Box border="box" padding="medium" borderRadius="normal">
              <H3>Item heading</H3>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Text>
              <Link to="#">View More</Link>
            </Box>
            <Box border="box" padding="medium" borderRadius="normal">
              <H3>Item heading</H3>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Text>
              <Link to="#">View More</Link>
            </Box>
            <Box border="box" padding="medium" borderRadius="normal">
              <H3>Item heading</H3>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Text>
              <Link to="#">View More</Link>
            </Box>
            <Box border="box" padding="medium" borderRadius="normal">
              <H3>Item heading</H3>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Text>
              <Link to="#">View More</Link>
            </Box>
          </Flex>
        </Panel>

        <Panel>
          <Box
            borderBottom="box"
            paddingBottom="large"
            role="section"
            marginBottom="large"
          >
            <H3>Aside one</H3>
            <Text color="secondary70">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
          </Box>
          <Box role="section">
            <H3>Aside two</H3>
            <ul>
              <li>
                <Link to={"#"}>One</Link>
              </li>
              <li>
                <Link to={"#"}>Two</Link>
              </li>
              <li>
                <Link to={"#"}>Three</Link>
              </li>
            </ul>
          </Box>
        </Panel>
      </Grid>
    </Page>
  );
};

export default PageFeaturedContent;
