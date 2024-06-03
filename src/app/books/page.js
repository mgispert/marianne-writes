"use client";
import { Container, Heading, Box } from "@chakra-ui/react";
import books from "../../data/books";
import BookCard from "../../components/BookCard";
import Navbar from "@/components/Navbar";

export default function BooksPage() {
  return (
    <>
      <Navbar />
      <Box>
        <Heading as="h1" size="xl" mb={8} textAlign="center">
          Books
        </Heading>
        <Container display={"flex"} justifyContent={"center"}>
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </Container>
      </Box>
    </>
  );
}
