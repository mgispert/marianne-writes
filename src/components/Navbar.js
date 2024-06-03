import { Flex, Box, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";

export default function Navbar() {
  return (
    <Flex as="nav" bg="#0000004f" p={4} mb={10}>
      <Box
        maxW="container.lg"
        mx="auto"
        w="100%"
        display="flex"
        justifyContent="space-evenly"
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
