import { Flex, Box, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";

export default function Footer() {
    return (
        <Flex as="nav" bg="#0000008f">
            <Box
                maxW="container.lg"
                mx="auto"
                w="100%"
                display="flex"
                justifyContent="flex-start"
                alignItems="center"
            >
                <Box
                    maxW="container.lg"
                    mx="auto"
                    w="100%"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                >
                    <ChakraLink as={Link} href="/retailers" color="white">
                        For retailers
                    </ChakraLink>
                </Box>
            </Box>
        </Flex>
    );
}
