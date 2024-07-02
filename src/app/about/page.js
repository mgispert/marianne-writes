/* eslint-disable react/no-unescaped-entities */
import Navbar from "@/components/Navbar";
import { Box, Heading, Text } from "@chakra-ui/react";

export default function AboutMePage() {
  return (
    <>
      <Navbar />
      <Box maxW="80%" mx="auto" textAlign="center" mt="8" mb="10" px="4">
        {/* Wrapper for the heading and text with background and border-radius */}
        <Box 
          bg="rgba(0, 0, 0, 0.8)"  // Transparent black background
          borderRadius="lg"         // Rounded edges
          p={6}                     // Padding inside the box
          color="white"             // Ensure the text remains white
        >
          <Heading as="h1" size="xl" mb="6">
            About Me
          </Heading>
          <Text fontSize="xl">
            English literature major by day, dreamer of fantastical worlds by
            night, I am a weaver of tales and a seeker of wonders. In the realm of
            imagination, I've found solace and belonging, traversing realms of
            magic and mystery.
          </Text>
          <Text fontSize="xl">
            By day, I navigate the digital landscapes of our modern world as a
            software developer, but by night, I am drawn to the siren song of
            storytelling. My ultimate dream is to become an author full-time, to
            dance among the stars and spin tales that linger in the hearts of
            readers long after the final page is turned.
          </Text>
          <Text fontSize="xl">
            In my stories, I love to add a touch of spice and allure, where every
            word is a spell and every page holds a world waiting to be discovered.
            So come, wander with me through realms of magic and mystery, where
            every tale is an invitation to adventure.
          </Text>
        </Box>
      </Box>
    </>
  );
}
