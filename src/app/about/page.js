/* eslint-disable react/no-unescaped-entities */
import Navbar from "@/components/Navbar";
import { Box, Heading, Text } from "@chakra-ui/react";

export default function AboutMePage() {
  return (
    <>
      <Navbar />
      <Box maxW="800px" mx="auto" textAlign="center" mt="8" px="4">
        <Heading as="h1" size="xl" mb="6">
          About Me
        </Heading>
        <Text fontSize="xl" mb="8" fontStyle="italic">
          English literature major by day, dreamer of fantastical worlds by
          night, I am a weaver of tales and a seeker of wonders. In the realm of
          imagination, I've found solace and belonging, traversing realms of
          magic and mystery.
        </Text>
        <Text fontSize="xl" mb="8" fontStyle="italic">
          By day, I navigate the digital landscapes of our modern world as a
          software developer, but by night, I am drawn to the siren song of
          storytelling. My ultimate dream is to become an author full-time, to
          dance among the stars and spin tales that linger in the hearts of
          readers long after the final page is turned.
        </Text>
        <Text fontSize="xl" fontStyle="italic">
          In my stories, I love to add a touch of spice and allure, where every
          word is a spell and every page holds a world waiting to be discovered.
          So come, wander with me through realms of magic and mystery, where
          every tale is an invitation to adventure.
        </Text>
      </Box>
    </>
  );
}
