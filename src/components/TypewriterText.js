"use client";

import { Text } from "@chakra-ui/react";
import { Typewriter } from "react-simple-typewriter";

const fullText = `English literature major by day, dreamer of fantastical worlds by night, I am a weaver of tales and a seeker of wonders. In the realm of imagination, I've found solace and belonging, traversing realms of magic and mystery.\n\nBy day, I navigate the digital landscapes of our modern world as a software developer, but by night, I am drawn to the siren song of storytelling. My ultimate dream is to become an author full-time, to dance among the stars and spin tales that linger in the hearts of readers long after the final page is turned.\n\nIn my stories, I love to add a touch of spice and allure, where every word is a spell and every page holds a world waiting to be discovered. So come, wander with me through realms of magic and mystery, where every tale is an invitation to adventure.`;

export default function TypewriterText() {
  return (
    <Text
      fontSize="xl"
      mt={4}
      color="silver"
      maxW="700px"
      mx="auto"
      textAlign="center"
      whiteSpace="pre-line" // This allows \n to render as line breaks
    >
      <Typewriter
        words={[fullText]}
        loop={1}
        cursor
        cursorStyle="|"
        typeSpeed={50}
        deleteSpeed={20}
        delaySpeed={1000}
      />
    </Text>
  );
}
