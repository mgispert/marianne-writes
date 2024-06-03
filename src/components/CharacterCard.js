"use client";

import { useState } from "react";
import { Box, Image, Text, Skeleton, useDisclosure } from "@chakra-ui/react";
import ReactCardFlip from "react-card-flip";

const CharacterCard = ({ character }) => {
  const [isLoading, setIsLoading] = useState(true);
  const { isOpen, onToggle } = useDisclosure();

  const cardStyles = {
    width: "200px",
    height: "300px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    cursor: "pointer",
  };

  return (
    <ReactCardFlip isFlipped={isOpen} flipDirection="horizontal">
      <Box
        overflow="hidden"
        maxW="sm"
        m={4}
        style={cardStyles}
        onClick={onToggle}
      >
        <Skeleton
          isLoaded={!isLoading}
          fadeDuration={3}
          startColor="BlackAlpha.900"
          endColor="WhiteAlpha.100"
        >
          <Image
            src={character.image}
            alt={`Image of ${character.name}`}
            objectFit="cover"
            onLoad={() => setIsLoading(false)}
          />
        </Skeleton>
      </Box>

      <Box
        overflow="hidden"
        maxW="sm"
        m={4}
        p={4}
        style={cardStyles}
        onClick={onToggle}
      >
        <Text>Name: {character.name}</Text>
        <Text>Power: {character.power}</Text>
      </Box>
    </ReactCardFlip>
  );
};

export default CharacterCard;
