"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
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
    <>
      <Box
        backgroundImage="url('/images/background.png')"
        backgroundSize="contain"
        backgroundRepeat="repeat"
      >
        <Navbar />
        <Heading as="h1" size="xl" mb={8} textAlign="center">
          {selectedBook.title}
        </Heading>
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3 }}
          spacing={10}
          display={"flex"}
          flexWrap={"wrap"}
          justifyContent={"center"}
        >
          {selectedBook.characters.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
}
