"use client";

import { useState } from "react";
import { Box, Skeleton, useDisclosure } from "@chakra-ui/react";
import ReactCardFlip from "react-card-flip";
import Image from "next/image";

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
            width={200}
            height={300}
            src={character.front}
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
            width={200}
            height={300}
            src={character.back}
            alt={`Image of ${character.name}`}
            objectFit="cover"
            onLoad={() => setIsLoading(false)}
          />
        </Skeleton>
      </Box>
    </ReactCardFlip>
  );
};

export default CharacterCard;
