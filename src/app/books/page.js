"use client";
import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import books from "../../data/books";
import BookCard from "../../components/BookCard";
import Navbar from "@/components/Navbar";

export default function BooksPage() {
  return (
    <Container>
      <Heading as="h1" size="xl" mb={8} textAlign="center">
        Books
      </Heading>
      <Navbar />
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={10}>
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </SimpleGrid>
    </Container>
  );
}
