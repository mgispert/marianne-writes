"use client";

import { useState } from "react";
import { Box, Link as ChakraLink, Skeleton } from "@chakra-ui/react";
import { useBookContext } from "@/context/BookContext";
import Link from "next/link";
import Image from "next/image";

const BookCard = ({ book }) => {
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
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  };

  return (
    <ChakraLink as={Link} href="/books/details" color="white" mr={4}>
      <Box
        overflow="hidden"
        maxW="sm"
        m={4}
        style={cardStyles}
        onClick={handleBookClick}
        cursor="pointer"
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
            src={book.cover}
            alt={`Cover of ${book.title}`}
            objectFit="cover"
            onLoad={() => setIsLoading(false)}
          />
        </Skeleton>
      </Box>
    </ChakraLink>
  );
};

export default BookCard;
