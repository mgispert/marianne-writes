"use client";
import { Box, Image, Text, Link as ChakraLink } from "@chakra-ui/react";
import { useBookContext } from "@/context/BookContext";
import Link from "next/link";

const BookCard = ({ book }) => {
  const { selectedBook, setSelectedBook } = useBookContext();

  const handleBookClick = () => {
    setSelectedBook(book);
  };

  return (
    <ChakraLink as={Link} href="/books/details" color="white" mr={4}>
      <Box
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        maxW="sm"
        m={4}
        onClick={handleBookClick}
        cursor="pointer"
      >
        <Image
          src={book.cover}
          alt={`Cover of ${book.title}`}
          objectFit="cover"
        />
        <Box p={4}>
          <Text fontSize="xl" fontWeight="bold">
            {book.title}
          </Text>
        </Box>
      </Box>
    </ChakraLink>
  );
};

export default BookCard;
