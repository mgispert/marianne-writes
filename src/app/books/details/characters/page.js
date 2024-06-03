"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Container, Heading, SimpleGrid, Skeleton } from "@chakra-ui/react";
import Navbar from "@/components/Navbar";
import CharacterCard from "@/components/CharacterCard";
import { useBookContext } from "@/context/BookContext";

export default function CharactersPage() {
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
        {selectedBook ? selectedBook.title : "No book selected"}
      </Heading>
      <Navbar />
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={10}>
        {selectedBook.characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </SimpleGrid>
    </Container>
  );
}
