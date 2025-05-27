"use client";

import Navbar from "@/components/Navbar";
import TypewriterText from "@/components/TypewriterText";
import {
    Box,
    Heading,
    Text,
    Image,
    VStack,
    Divider,
    Badge,
} from "@chakra-ui/react";

export default function AboutMePage() {
    return (
        <>
            <Navbar />
            <Box
                maxW="container.md"
                mx="auto"
                textAlign="center"
                mt="8"
                mb="20"
                px="4"
            >
                <VStack spacing={8}>
                    {/* Header & Portrait */}
                    <Box>
                        <Heading
                            as="h1"
                            size={{ base: "lg", md: "2xl" }}
                            textAlign="center"
                            mb={6}
                            textShadow="0 0 8px #b0c4de, 0 0 15px #b0c4de"
                            color="silver"
                            fontFamily="'UnifrakturCook', cursive"
                        >
                            About Me
                        </Heading>
                        <Box display="flex" justifyContent="center">
                            <Image
                                src="/images/author.jpg"
                                alt="Marianne Grey - Author Portrait"
                                borderRadius="full"
                                boxSize="180px"
                                objectFit="cover"
                                border="2px solid silver"
                                boxShadow="0 0 15px rgba(176, 196, 222, 0.4)"
                            />
                        </Box>
                    </Box>

                    {/* The Poetic Intro (Animated) */}
                    <Box minH="300px">
                        {" "}
                        {/* Added minHeight to prevent layout shift during typing */}
                        <TypewriterText />
                    </Box>

                    <Divider borderColor="rgba(192, 192, 192, 0.3)" />

                    {/* The Professional Bio (Static for quick reading) */}
                    <Box textAlign="center" color="silver">
                        <Badge
                            colorScheme="silver"
                            variant="outline"
                            mb={4}
                            px={3}
                            py={1}
                        >
                            Professional Profile
                        </Badge>
                        <Text fontSize="lg" lineHeight="tall">
                            Based in the vibrant literary landscape of{" "}
                            <strong>Barcelona, Spain</strong>, Marianne Grey is
                            a rising voice in the{" "}
                            <strong>Dark Romantasy</strong> genre. Since the
                            debut of the <em>Echoes of Darkness</em> series, she
                            has reached over{" "}
                            <strong>
                                1,700 readers globally in a single month
                            </strong>
                            , establishing a dedicated following for her
                            atmospheric world-building and high-stakes
                            storytelling.
                        </Text>
                        <Text
                            mt={4}
                            fontSize="md"
                            fontStyle="italic"
                            color="gray.400"
                        >
                            Available for local bookstore events, signings, and
                            literary collaborations across the Barcelona
                            metropolitan area.
                        </Text>
                    </Box>
                </VStack>
            </Box>
        </>
    );
}
