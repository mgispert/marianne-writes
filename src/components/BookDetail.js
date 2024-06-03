"use client";
import { useBookContext } from "@/context/BookContext";
import { Box, Image, Text, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";

const BookDetail = ({ book }) => {
  const { selectedBook } = useBookContext();
  const bookInfo = book || selectedBook ? book || selectedBook : "no book";
  console.log("book", book);
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image
        src={bookInfo.cover}
        alt={`Cover of ${bookInfo.title}`}
        objectFit="cover"
      />
      <Box p={4}>
        <Text fontSize="xl" fontWeight="bold">
          {bookInfo.title}
        </Text>
        <ChakraLink
          as={Link}
          href="/books/details/characters"
          color="white"
          mr={4}
        >
          <Text fontSize="xl" fontWeight="bold">
            Characters
          </Text>
        </ChakraLink>
      </Box>
    </Box>
  );
};

export default BookDetail;
