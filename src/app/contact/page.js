"use client";
import { Box, Heading, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

const MotionButton = motion(Box);

export default function ContactPage() {
  const styles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",  // Add this to center vertically
  minHeight: "100vh",
  textAlign: "center",
  borderRadius: "lg",
  p: "6px",
  color: "silver",
};


  return (
    <>
      <Navbar />
      <Box maxW="60%" mx="auto" textAlign="center" mt="4" mb="10" px="4" borderRadius="lg">
        <Box style={styles}>
          {/* Page Title */}
          <Heading as="h1" size="xl" mb={6} mt={2} fontFamily="'UnifrakturCook', cursive" color="silver" textShadow="0 0 8px #b0c4de">
            Stay in Touch!
          </Heading>

          {/* Linktree Link using MotionButton */}
          <MotionButton
            as="a"
            href="https://linktr.ee/mariannegrey"
            target="_blank"
            rel="noopener noreferrer"
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
              background: "linear-gradient(to right, #1a1a40, #0c0c1e)",
              borderColor: "#b0c4de",
              textShadow: "0 0 15px #b0c4de",
              boxShadow:
                "0 0 40px rgba(176,196,222,0.5), inset 0 0 15px rgba(255,255,255,0.1)",
            }}
            cursor="pointer"
            mr={4}
          >
            Visit My Linktree
          </MotionButton>
        </Box>
      </Box>
    </>
  );
}
