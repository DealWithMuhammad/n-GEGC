"use client";

import { NextUIProvider } from "@nextui-org/react";
// import { MantineProvider } from "@mantine/core";
import { ChakraProvider } from "@chakra-ui/react";
// import "@mantine/core/styles.css";
import { ThemeUIProvider } from "theme-ui";
import theme from "../theme/index";

export function Providers({ children }) {
  return (
    // <MantineProvider>
    <ChakraProvider>
      <NextUIProvider>
        <ThemeUIProvider theme={theme}>{children}</ThemeUIProvider>
      </NextUIProvider>
    </ChakraProvider>
    // </MantineProvider>
  );
}
