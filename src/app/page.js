"use client";

import { Box, Text, Button, Image } from "@chakra-ui/react";
import Link from "next/link";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";

const MotionText = motion(Text);
const MotionButton = motion(Button);

function Home() {
    return (
        <>
            <Box
                maxW="xl"
                mx="auto"
                textAlign="center"
                height="100vh"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                px={4}
            >
                <Image
                    src="/images/home-logo.png"
                    alt="Home Logo"
                    mb={6}
                    maxW="200px"
                />
                <Text
                    fontSize={{ base: "2xl", md: "3xl" }}
                    fontFamily="'UnifrakturCook', cursive"
                    color="silver"
                    mb={8}
                    textShadow="0 0 8px #999"
                >
                    Where Shadows Whisper and Stars Remember
                </Text>

                <MotionButton
                    as={Link}
                    href="/about"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    px={10}
                    py={5}
                    fontSize="lg"
                    fontFamily="'UnifrakturCook', cursive"
                    background="linear-gradient(to right, #0c0c1e, #1a1a40)"
                    color="silver"
                    border="2px solid silver"
                    borderRadius="0"
                    textShadow="0 0 8px #b0c4de"
                    boxShadow="0 0 30px rgba(192,192,192,0.3), inset 0 0 10px rgba(255,255,255,0.05)"
                    _hover={{
                        background:
                            "linear-gradient(to right, #1a1a40, #0c0c1e)",
                        borderColor: "#b0c4de",
                        textShadow: "0 0 15px #b0c4de",
                        boxShadow:
                            "0 0 40px rgba(176,196,222,0.5), inset 0 0 15px rgba(255,255,255,0.1)",
                    }}
                    transition="all 0.3s ease-in-out"
                >
                    Enter the Realm
                </MotionButton>
            </Box>
            <Footer />
        </>
    );
}

export default Home;
