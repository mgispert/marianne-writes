"use client";

import { Box, Text, Link as ChakraLink, Skeleton } from "@chakra-ui/react";
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


  const imageStyles = {
    borderRadius: "50%",
    marginTop: "250px"
  };
  return (
      <Box maxW="xl" mx="auto" textAlign="center" style={cardStyles}>
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
              style={imageStyles}
              src={"/images/logo.png"}
              alt={"main button"}
              onLoad={() => setIsLoading(false)}
            />
          </Skeleton>
        </ChakraLink>
      </Box>
  );
}

export default Home;
