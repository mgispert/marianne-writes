import Navbar from "@/components/Navbar";
import TypewriterText from "@/components/TypewriterText";
import { Box, Heading, Text, Image } from "@chakra-ui/react";

export default function AboutMePage() {
  return (
    <>
      <Navbar />
      <Box maxW="80%" mx="auto" textAlign="center" mt="8" mb="10" px="4">
        {/* Wrapper for the heading and text with background and border-radius */}
        <Box 
         
          borderRadius="lg"       // Rounded edges
          p={6}                   // Padding inside the box
          color="white"           // Ensure the text remains white
        >
          <Heading as="h1"  size={{ base: "lg", md: "2xl" }}  textAlign="center" mb={4} textShadow="0 0 8px #b0c4de, 0 0 15px #b0c4de" color="silver" fontFamily="'UnifrakturCook', cursive" >
            About Me
          </Heading>
          <Box display="flex" alignItems="center" justifyContent="center" mt={4}>
            <Image
              src="/images/author.jpg" // Corrected the image path
              alt="Author portrait"
              borderRadius="full"
              boxSize="150px"
              objectFit="cover"
              mr={4}
            />
          </Box>
         <TypewriterText />
        </Box>
      </Box>
    </>
  );
}
