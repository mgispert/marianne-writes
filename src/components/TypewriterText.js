"use client";

import { Text } from "@chakra-ui/react";
import { Typewriter } from "react-simple-typewriter";

const fullText = `English literature major by day, weaver of fantastical worlds by night. I navigate digital landscapes as a developer, but my soul belongs to the siren song of storytelling. In my stories, every word is a spell and every page holds a world of spice and allure. Wander with me through realms of magic, where every tale is an invitation to adventure.`;

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
