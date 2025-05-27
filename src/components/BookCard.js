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
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";

const MotionButton = motion(Button);

const BookCard = ({ book }) => {
  const {
  isOpen: isMapOpen,
  onOpen: onMapOpen,
  onClose: onMapClose
} = useDisclosure();

const {
  isOpen: isGalleryOpen,
  onOpen: onGalleryOpen,
  onClose: onGalleryClose
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
        <Stack direction={{ base: "column", md: "row" }} spacing={6} align="start">
          {/* Left side: Cover + Map */}
          <Box>
            <Image 
              src={book.cover}
              alt={book.title}
              width="200px"  
              height="300px"
              objectFit="cover"
              borderRadius="md"
              mb={4}
            />

            {/* Map image clickable */}
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

            {/* Modal for enlarged map */}
            <Modal isOpen={isMapOpen} onClose={onMapClose} size="xl" isCentered>
              <ModalOverlay />
              <ModalContent bg="gray.900" borderRadius="md">
                <ModalCloseButton color="white" />
                <ModalBody p={4}>
                  <Image
                    src={book.map}
                    alt={`${book.title} map enlarged`}
                    objectFit="contain"
                    width="100%"
                    maxH="80vh"
                    mx="auto"
                    borderRadius="md"
                  />
                </ModalBody>
              </ModalContent>
            </Modal>
          </Box>

          {/* Right side: Text and Tropes */}
          <Box textAlign="left" flex="1">
            <Heading 
              as="h2" 
              size={{ base: "lg", md: "2xl" }} 
              mb={4}
              textShadow="0 0 8px #b0c4de, 0 0 15px #b0c4de"
              color="silver"
              fontFamily="'UnifrakturCook', cursive"
            >
              {book.title}
            </Heading>
            <Text mb={4} dangerouslySetInnerHTML={{ __html: book.blurb }} />
            
            <Heading as="h3" size={{ base: "md", md: "lg" }} 
              mb={4}
              textShadow="0 0 8px #b0c4de, 0 0 15px #b0c4de"
              color="silver"
              fontFamily="'UnifrakturCook', cursive">
              Tropes
            </Heading>
            <SimpleGrid columns={{ base: 2, md: 3 }} spacing={3} mb={4}>
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

             <Box textAlign="center" mt={4}>
              <MotionButton
                as="a"
                href={book.link}
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
                  background: "linear-gradient(to right, #1a1a40, #0c0c1e)",
                  borderColor: "#b0c4de",
                  textShadow: "0 0 15px #b0c4de",
                  boxShadow:
                    "0 0 40px rgba(176,196,222,0.5), inset 0 0 15px rgba(255,255,255,0.1)",
                }}
                cursor="pointer"
                mr={4}
              >
                Order Now!
              </MotionButton>

              <MotionButton
                as="a"
                href={book.etsy}
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
                  background: "linear-gradient(to right, #1a1a40, #0c0c1e)",
                  borderColor: "#b0c4de",
                  textShadow: "0 0 15px #b0c4de",
                  boxShadow:
                    "0 0 40px rgba(176,196,222,0.5), inset 0 0 15px rgba(255,255,255,0.1)",
                }}
                cursor="pointer"
              >
                Signed Copy!
              </MotionButton>

             
            </Box>
            
            <Box  textAlign="center" mt={4}>
               <MotionButton
                mt={4}
                onClick={onGalleryOpen}
                as="a"
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
                  background: "linear-gradient(to right, #1a1a40, #0c0c1e)",
                  borderColor: "#b0c4de",
                  textShadow: "0 0 15px #b0c4de",
                  boxShadow:
                    "0 0 40px rgba(176,196,222,0.5), inset 0 0 15px rgba(255,255,255,0.1)",
                }}
                cursor="pointer"
              >
                View Art Gallery
              </MotionButton>

             <Modal isOpen={isGalleryOpen} onClose={onGalleryClose} size="4xl" isCentered>
              <ModalOverlay />
              <ModalContent bg="#0c0c1e" color="silver">
                <ModalHeader fontFamily="'UnifrakturCook', cursive" fontSize="2xl" textAlign="center">
                  Art Gallery — {book.title}
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody p={4}>
                  <Carousel
                    showArrows
                    showThumbs={false}
                    infiniteLoop
                    interval={5000}
                    dynamicHeight={false}
                    showStatus={false}
                  >
                    {book.art?.map((artImg, index) => (
                      <Image
                        key={index}
                        src={artImg}
                        alt={`Artwork ${index + 1} for ${book.title}`}
                        maxH="500px"
                        objectFit="contain"
                        borderRadius="md"
                        boxShadow="dark-lg"
                        width="100%"
                      />
                    ))}
                  </Carousel>
                </ModalBody>
              </ModalContent>
            </Modal>

            </Box>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default BookCard;
