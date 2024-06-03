import { Flex, Box, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";

export default function Navbar() {
  return (
    <Flex as="nav" bg="teal.500" p={4}>
      <Box
        maxW="container.lg"
        mx="auto"
        w="100%"
        display="flex"
        justifyContent="space-between"
      >
        <ChakraLink as={Link} href="/about" color="white" mr={4}>
          About
        </ChakraLink>
        <ChakraLink as={Link} href="/books" color="white" mr={4}>
          Books
        </ChakraLink>
        <ChakraLink as={Link} href="/contact" color="white">
          Contact
        </ChakraLink>
      </Box>
    </Flex>
  );
}
