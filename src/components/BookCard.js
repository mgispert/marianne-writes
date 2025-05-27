"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
    Box,
    Image,
    Text,
    Stack,
    Heading,
    SimpleGrid,
    Tag,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    ModalHeader,
    Flex,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";

const MotionButton = motion(Button);

// Reusable button style to keep the code clean
const silverButtonStyle = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
    px: 10,
    py: 5,
    fontSize: "lg",
    fontFamily: "'UnifrakturCook', cursive",
    background: "linear-gradient(to right, #0c0c1e, #1a1a40)",
    color: "silver",
    border: "2px solid silver",
    borderRadius: "0",
    textShadow: "0 0 8px #b0c4de",
    boxShadow:
        "0 0 30px rgba(192,192,192,0.3), inset 0 0 10px rgba(255,255,255,0.05)",
    _hover: {
        background: "linear-gradient(to right, #1a1a40, #0c0c1e)",
        borderColor: "#b0c4de",
        textShadow: "0 0 15px #b0c4de",
        boxShadow:
            "0 0 40px rgba(176,196,222,0.5), inset 0 0 15px rgba(255,255,255,0.1)",
    },
    cursor: "pointer",
};

const BookCard = ({ book }) => {
    const {
        isOpen: isMapOpen,
        onOpen: onMapOpen,
        onClose: onMapClose,
    } = useDisclosure();
    const {
        isOpen: isGalleryOpen,
        onOpen: onGalleryOpen,
        onClose: onGalleryClose,
    } = useDisclosure();

    return (
        <Box
            maxW="100%"
            mx="auto"
            textAlign="center"
            mt="8"
            mb="10"
            px={{ base: 4, md: 8 }}
        >
            <Box borderRadius="lg" p={6} color="white">
                <Stack
                    direction={{ base: "column", md: "row" }}
                    spacing={10}
                    align="start"
                >
                    {/* Left side: Cover + Map */}
                    <Box minW="200px">
                        <Image
                            src={book.cover}
                            alt={book.title}
                            width="200px"
                            height="300px"
                            objectFit="cover"
                            borderRadius="md"
                            mb={4}
                            filter={
                                book.isComingSoon ? "grayscale(80%)" : "none"
                            }
                        />

                        {book.map && (
                            <Box
                                cursor="pointer"
                                onClick={onMapOpen}
                                maxW="200px"
                                mx="auto"
                                borderRadius="md"
                                overflow="hidden"
                                boxShadow="0 0 15px #b0c4de"
                                mb={4}
                            >
                                <Image
                                    src={book.map}
                                    alt={`${book.title} map`}
                                    objectFit="contain"
                                    width="100%"
                                />
                            </Box>
                        )}
                    </Box>

                    {/* Right side: Info */}
                    <Box textAlign="left" flex="1">
                        <Heading
                            as="h2"
                            size={{ base: "lg", md: "2xl" }}
                            mb={1}
                            textShadow="0 0 8px #b0c4de, 0 0 15px #b0c4de"
                            color="silver"
                            fontFamily="'UnifrakturCook', cursive"
                        >
                            {book.title}
                        </Heading>

                        <Text
                            fontSize="xs"
                            color="gray.500"
                            letterSpacing="wider"
                            mt={3}
                        >
                            ISBN: {book.isbn || "TBA"}
                        </Text>

                        <Text
                            mb={6}
                            dangerouslySetInnerHTML={{ __html: book.blurb }}
                        />

                        <Heading
                            as="h3"
                            size="md"
                            mb={4}
                            color="silver"
                            fontFamily="'UnifrakturCook', cursive"
                        >
                            Tropes
                        </Heading>
                        <SimpleGrid
                            columns={{ base: 2, md: 3 }}
                            spacing={3}
                            mb={8}
                        >
                            {book.tropes.map((trope, index) => (
                                <Tag
                                    key={index}
                                    size="lg"
                                    variant="outline"
                                    color="white"
                                    bg="rgba(255, 255, 255, 0.1)"
                                >
                                    {trope}
                                </Tag>
                            ))}
                        </SimpleGrid>

                        {/* CTA Section: Order Buttons vs Coming Soon Message */}
                        {!book.isComingSoon ? (
                            <Flex direction="column" gap={4}>
                                <Flex wrap="wrap" gap={4}>
                                    <MotionButton
                                        as="a"
                                        href={book.link}
                                        target="_blank"
                                        {...silverButtonStyle}
                                    >
                                        Order Now
                                    </MotionButton>
                                    {book.bookshop && (
                                        <MotionButton
                                            as="a"
                                            href={book.bookshop}
                                            target="_blank"
                                            {...silverButtonStyle}
                                        >
                                            Bookshop.org
                                        </MotionButton>
                                    )}

                                    <MotionButton
                                        as="a"
                                        href={book.etsy}
                                        target="_blank"
                                        {...silverButtonStyle}
                                    >
                                        Signed Copy
                                    </MotionButton>
                                </Flex>

                                <Box>
                                    <MotionButton
                                        onClick={onGalleryOpen}
                                        {...silverButtonStyle}
                                        mt={2}
                                    >
                                        View Art Gallery
                                    </MotionButton>
                                </Box>
                            </Flex>
                        ) : (
                            <Box
                                p={6}
                                border="1px dashed silver"
                                textAlign="center"
                                bg="rgba(255,255,255,0.05)"
                            >
                                <Text
                                    color="silver"
                                    fontFamily="'UnifrakturCook', cursive"
                                    fontSize="xl"
                                >
                                    The shadows are weaving... Release date TBA.
                                </Text>
                            </Box>
                        )}
                    </Box>
                </Stack>
            </Box>

            {/* Modals for Map and Gallery (Omitted for brevity, keep your existing ones) */}
            <Modal isOpen={isMapOpen} onClose={onMapClose} size="xl" isCentered>
                <ModalOverlay />
                <ModalContent bg="gray.900" borderRadius="md">
                    <ModalCloseButton color="white" />
                    <ModalBody p={4}>
                        <Image
                            src={book.map}
                            alt="Map enlarged"
                            objectFit="contain"
                            width="100%"
                            maxH="80vh"
                            mx="auto"
                        />
                    </ModalBody>
                </ModalContent>
            </Modal>

            <Modal
                isOpen={isGalleryOpen}
                onClose={onGalleryClose}
                size="4xl"
                isCentered
            >
                <ModalOverlay />
                <ModalContent bg="#0c0c1e" color="silver">
                    <ModalHeader
                        fontFamily="'UnifrakturCook', cursive"
                        fontSize="2xl"
                        textAlign="center"
                    >
                        Art Gallery — {book.title}
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody p={4}>
                        <Carousel
                            showArrows
                            showThumbs={false}
                            infiniteLoop
                            showStatus={false}
                        >
                            {book.art?.map((artImg, index) => (
                                <Image
                                    key={index}
                                    src={artImg}
                                    alt="Gallery art"
                                    maxH="500px"
                                    objectFit="contain"
                                    width="100%"
                                />
                            ))}
                        </Carousel>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </Box>
    );
};

export default BookCard;
