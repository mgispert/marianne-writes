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
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
      </Box>
    </>
  );
}
