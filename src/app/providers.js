"use client";

import { BookProvider } from "@/context/BookContext";
import theme from "@/theme";
import { ChakraProvider } from "@chakra-ui/react";

export function Providers({ children }) {
  return (
    <ChakraProvider theme={theme}>
      <BookProvider>{children}</BookProvider>
    </ChakraProvider>
  );
}
