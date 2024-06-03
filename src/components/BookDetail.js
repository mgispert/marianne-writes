"use client";
import { useState } from "react";
import { useBookContext } from "@/context/BookContext";
import { Box, Skeleton, Link as ChakraLink, Text } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";

const BookDetail = ({ book }) => {
  const { selectedBook, setSelectedBook } = useBookContext();
  const [isLoading, setIsLoading] = useState(true);

  const handleBookClick = () => {
    setSelectedBook(book);
  };

  const cardStyles = {
    width: "200px",
    height: "300px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  };

  return (
    <>
      <Box
        overflow="hidden"
        maxW="sm"
        m={4}
        style={cardStyles}
        onClick={handleBookClick}
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
            src={book.backCover}
            alt={`Back cover of ${book.title}`}
            onLoad={() => setIsLoading(false)}
          />
        </Skeleton>
      </Box>
      <Box overflow="hidden" maxW="sm" onClick={handleBookClick}>
        <Skeleton
          isLoaded={!isLoading}
          fadeDuration={3}
          startColor="BlackAlpha.900"
          endColor="WhiteAlpha.100"
        >
          <ChakraLink
            as={Link}
            href="/books/details/characters"
            color="white"
            mr={4}
          >
            <Text>CHARACTERS</Text>
          </ChakraLink>
        </Skeleton>
      </Box>
    </>
  );
};

export default BookDetail;
