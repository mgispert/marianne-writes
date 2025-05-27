"use client";

import {
    Box,
    Heading,
    Container,
    Text,
    VStack,
    SimpleGrid,
    Link,
    Button,
    Table,
    Tbody,
    Tr,
    Td,
    Badge,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";

const MotionBox = motion(Box);

export default function RetailersPage() {
    return (
        <>
            <Navbar />
            <Container maxW="container.lg" mt={10} pb={20}>
                <VStack spacing={8} align="stretch">
                    {/* Header Section */}
                    <Box textAlign="center">
                        <Heading
                            as="h1"
                            size="2xl"
                            color="silver"
                            fontFamily="'UnifrakturCook', cursive"
                            textShadow="0 0 15px #b0c4de"
                            mb={4}
                        >
                            Retailer & Wholesale Portal
                        </Heading>
                        <Text
                            color="gray.300"
                            fontSize="lg"
                            maxW="2xl"
                            mx="auto"
                        >
                            Marianne Grey is a Barcelona-based author
                            specializing in Dark Romantasy. Her series reached
                            over{" "}
                            <strong>1,700 units sold in December 2025</strong>.
                            All titles are available for global distribution
                            with industry-standard terms.
                        </Text>
                    </Box>

                    <SimpleGrid
                        columns={{ base: 1, md: 2 }}
                        spacing={10}
                        mt={5}
                    >
                        {/* Download Assets Section */}
                        <MotionBox
                            whileHover={{ y: -5 }}
                            p={6}
                            border="1px solid silver"
                            bg="rgba(12, 12, 30, 0.8)"
                            boxShadow="0 0 20px rgba(192,192,192,0.1)"
                        >
                            <Heading
                                size="md"
                                color="silver"
                                mb={4}
                                fontFamily="'UnifrakturCook', cursive"
                            >
                                Marketing Assets
                            </Heading>
                            <VStack align="stretch" spacing={4}>
                                <Button
                                    as="a"
                                    href="/assets/Marianne-Grey-Sell-Sheet.pdf"
                                    download
                                    variant="outline"
                                    colorScheme="silver"
                                    borderColor="silver"
                                    color="white"
                                    _hover={{ bg: "silver", color: "black" }}
                                >
                                    Download Sell Sheet (PDF)
                                </Button>
                                <Button
                                    as="a"
                                    href="https://drive.google.com/drive/folders/1Rgd_hWRcWZ5iu5HzC9vnr7AJ9klB2sL9?usp=sharing"
                                    target="_blank"
                                    variant="ghost"
                                    color="silver"
                                    textDecoration="underline"
                                >
                                    Access High-Res Covers & Author Photos
                                </Button>
                            </VStack>
                        </MotionBox>

                        {/* Ordering & Terms Section */}
                        <MotionBox
                            p={6}
                            border="1px solid silver"
                            bg="rgba(26, 26, 64, 0.6)"
                        >
                            <Heading
                                size="md"
                                color="silver"
                                mb={4}
                                fontFamily="'UnifrakturCook', cursive"
                            >
                                Wholesale Terms
                            </Heading>
                            <VStack
                                align="stretch"
                                spacing={2}
                                color="gray.200"
                            >
                                <Text>
                                    <strong>Wholesale Discount:</strong> 55%
                                </Text>
                                <Text>
                                    <strong>Returnable:</strong> Yes (Standard
                                    Terms)
                                </Text>
                                <Text>
                                    <strong>Distribution:</strong> Ingram,
                                    Gardners, Podiprint
                                </Text>
                                <Badge
                                    colorScheme="purple"
                                    p={1}
                                    textAlign="center"
                                >
                                    Registered in DILVE & Nielsen
                                </Badge>
                            </VStack>
                        </MotionBox>
                    </SimpleGrid>

                    {/* Catalog Table */}
                    <Box mt={10} overflowX="auto">
                        <Heading
                            size="lg"
                            color="silver"
                            mb={6}
                            fontFamily="'UnifrakturCook', cursive"
                        >
                            Series Catalog
                        </Heading>
                        <Table
                            variant="simple"
                            color="gray.100"
                            border="1px solid #333"
                        >
                            <Tbody>
                                <Tr bg="rgba(255,255,255,0.05)">
                                    <Td fontWeight="bold">Title</Td>
                                    <Td fontWeight="bold">ISBN</Td>
                                    <Td fontWeight="bold">Format</Td>
                                    <Td fontWeight="bold">List Price</Td>
                                </Tr>
                                <Tr>
                                    <Td>Of Shadow and Argent</Td>
                                    <Td>978-84-09-81591-3</Td>
                                    <Td>Trade Paperback</Td>
                                    <Td>€14.99 / $15.99</Td>
                                </Tr>
                                <Tr>
                                    <Td>Of Fate and Nightmares</Td>
                                    <Td>978-84-09-81592-0</Td>
                                    <Td>Trade Paperback</Td>
                                    <Td>€14.99 / $15.99</Td>
                                </Tr>
                            </Tbody>
                        </Table>
                    </Box>

                    {/* Contact Section */}

                    <Box mt={20} pt={10} borderTop="1px solid #333">
                        <VStack spacing={4} textAlign="center" mb={8}>
                            <Heading
                                size="lg"
                                color="silver"
                                fontFamily="'UnifrakturCook', cursive"
                            >
                                Get In Touch
                            </Heading>
                            <Text fontSize="lg" color="gray.400" maxW="2xl">
                                Local Barcelona stores: I am available for
                                in-store signings and local stock drops. Please
                                use the form below for wholesale inquiries or
                                signed copy arrangements.
                            </Text>
                        </VStack>

                        <ContactForm />

                        <Box textAlign="center" mt={8}>
                            <Text color="gray.500" fontSize="md">
                                Prefer email? Reach me at:
                            </Text>
                            <Link
                                href="mailto:mariannegwrites@gmail.com"
                                color="silver"
                                fontWeight="bold"
                                _hover={{ color: "#b0c4de" }}
                            >
                                mariannegwrites@gmail.com
                            </Link>
                        </Box>
                    </Box>
                </VStack>
            </Container>
        </>
    );
}
