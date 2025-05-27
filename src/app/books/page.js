"use client";

import { useState } from "react";
import { Box, Heading, Container } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import books from "../../data/books";
import BookCard from "../../components/BookCard";
import Navbar from "@/components/Navbar";

const MotionButton = motion(Box);

export default function BooksPage() {
    const [selectedBookId, setSelectedBookId] = useState(books[0].id);
    const selectedBook = books.find((book) => book.id === selectedBookId);

    return (
        <>
            <Navbar />
            <Container maxW="container.lg" mt={10}>
                <Heading
                    as="h1"
                    size={{ base: "lg", md: "2xl" }}
                    textAlign="center"
                    mb={4}
                    textShadow="0 0 8px #b0c4de, 0 0 15px #b0c4de"
                    color="silver"
                    fontFamily="'UnifrakturCook', cursive"
                >
                    My Books
                </Heading>

                <Box
                    display="flex"
                    flexWrap="wrap"
                    gap={4}
                    justifyContent="center"
                    mb={10}
                >
                    <MotionButton
                        as="a"
                        href="/assets/fantasy-map.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        px={10}
                        py={5}
                        fontSize="lg"
                        fontFamily="'UnifrakturCook', cursive"
                        background="linear-gradient(to right, #0c0c1e, #1a1a40)"
                        color="silver"
                        border="2px solid silver"
                        borderRadius="0"
                        textShadow="0 0 8px #b0c4de"
                        boxShadow="0 0 30px rgba(192,192,192,0.3), inset 0 0 10px rgba(255,255,255,0.05)"
                        _hover={{
                            background:
                                "linear-gradient(to right, #1a1a40, #0c0c1e)",
                            borderColor: "#b0c4de",
                            textShadow: "0 0 15px #b0c4de",
                            boxShadow:
                                "0 0 40px rgba(176,196,222,0.5), inset 0 0 15px rgba(255,255,255,0.1)",
                        }}
                        cursor="pointer"
                        // margin bottom to separate from book buttons
                    >
                        View Fantasy Tree - (SPOILERS)
                    </MotionButton>
                    {books.map((book) => (
                        <MotionButton
                            key={book.id}
                            onClick={() => setSelectedBookId(book.id)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            px={8}
                            py={5}
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            textAlign="center"
                            fontSize="lg"
                            fontFamily="'UnifrakturCook', cursive"
                            background="linear-gradient(to right, #0c0c1e, #1a1a40)"
                            color="silver"
                            border="2px solid silver"
                            borderRadius="0"
                            textShadow="0 0 8px #b0c4de"
                            boxShadow={
                                selectedBookId === book.id
                                    ? "0 0 20px rgba(176, 196, 222, 0.6)"
                                    : "0 0 30px rgba(192,192,192,0.3)"
                            }
                            _hover={{
                                background:
                                    "linear-gradient(to right, #1a1a40, #0c0c1e)",
                                borderColor: "#b0c4de",
                                textShadow: "0 0 15px #b0c4de",
                                boxShadow:
                                    "0 0 40px rgba(176,196,222,0.5), inset 0 0 15px rgba(255,255,255,0.1)",
                            }}
                            cursor="pointer"
                            minW="200px"
                        >
                            {book.title}
                        </MotionButton>
                    ))}
                </Box>

                <AnimatePresence mode="wait">
                    {selectedBook && (
                        <motion.div
                            key={selectedBook.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                        >
                            <BookCard book={selectedBook} />
                        </motion.div>
                    )}
                </AnimatePresence>
            </Container>
        </>
    );
}
