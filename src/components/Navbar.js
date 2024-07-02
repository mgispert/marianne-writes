import { Flex, Box, Link as ChakraLink, Divider } from "@chakra-ui/react";
import Link from "next/link";
import { FaInstagram, FaGoodreads, FaEtsy } from "react-icons/fa";

export default function Navbar() {
  return (
    <Flex as="nav" bg="#0000008f" p={4} mb={10}>
      <Box
        maxW="container.lg"
        mx="auto"
        w="100%"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box
        maxW="container.lg"
        mx="auto"
        w="50%"
        display="flex"
        justifyContent="space-evenly"
        alignItems="center"
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
      <Divider orientation="vertical" />
      <Box
        maxW="container.lg"
        mx="auto"
        w="50%"
        display="flex"
        gap={2}
        alignItems="center"
        justifyContent="center"
      >
        <ChakraLink as={Link} href="https://www.instagram.com/authormariannegrey" color="white" target="_blank">
        <FaInstagram />
        </ChakraLink>
        <ChakraLink as={Link} href="https://www.goodreads.com/book/show/221537510-of-shadow-and-argent" color="white" target="_blank">
        <FaGoodreads />
        </ChakraLink>
        <ChakraLink as={Link} href="https://www.etsy.com/shop/TheShadowedScroll" color="white" target="_blank">
        <FaEtsy />
        </ChakraLink>
        </Box>
       
      </Box>
    </Flex>
  );
}
