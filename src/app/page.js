"use client";

import {
  Box,
  Heading,
  Text,
  Button,
  Link as ChakraLink,
  Skeleton,
} from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const cardStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };
  return (
    <Box p={8}>
      <Box maxW="xl" mx="auto" textAlign="center" style={cardStyles}>
        <Image
          width={400}
          height={200}
          src={"/images/banner.png"}
          alt={"banner"}
          objectFit="banner"
        />
        <Text fontSize="xl" mb={8}>
          Discover captivating stories written by Marianne G.
        </Text>
        <ChakraLink as={Link} href="/about" mr={4}>
          <Skeleton
            isLoaded={!isLoading}
            fadeDuration={3}
            startColor="BlackAlpha.900"
            endColor="WhiteAlpha.100"
          >
            <Image
              width={200}
              height={200}
              src={"/images/logo.png"}
              alt={"main button"}
              objectFit="main"
              onLoad={() => setIsLoading(false)}
            />
          </Skeleton>
        </ChakraLink>
      </Box>
    </Box>
  );
}

export default Home;
