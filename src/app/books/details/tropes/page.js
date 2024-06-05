"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import Navbar from "@/components/Navbar";
import { useBookContext } from "@/context/BookContext";

export default function TropesPage() {
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
      <Box>
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
          {selectedBook.tropes.map((trope, i) => (
            <Text key={i}>{trope}</Text>
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
}
