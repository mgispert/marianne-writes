"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import Navbar from "@/components/Navbar";
import BookDetail from "@/components/BookDetail";
import { useBookContext } from "@/context/BookContext";

export default function BooksPage() {
  const { selectedBook } = useBookContext();
  const router = useRouter();

  useEffect(() => {
    if (!selectedBook) {
      router.push("/books");
    }
  }, [selectedBook, router]);

  if (!selectedBook) {
    return null;
  }

  return (
    <Container>
      <Heading as="h1" size="xl" mb={8} textAlign="center">
        {selectedBook.title}
      </Heading>
      <Navbar />
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={10}>
        <BookDetail book={selectedBook} />
      </SimpleGrid>
    </Container>
  );
}
