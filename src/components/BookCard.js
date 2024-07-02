import { Box, Image, Text, Stack, Heading, SimpleGrid, Tag, Button } from "@chakra-ui/react";

const BookCard = ({ book }) => {
  return (
    <Box maxW="80%" mx="auto" textAlign="center" mt="8" mb="10" px="4">
      <Box 
        bg="rgba(0, 0, 0, 0.9)"  
        borderRadius="lg"         
        p={6}                     
        color="white"            
      >
        <Stack direction={{ base: "column", md: "row" }} spacing={6} align="start">
          {/* Image on the left */}
          <Image 
            src={book.cover}
            alt={book.title}
            width="200px"  
            height="300px"
            objectFit="cover"
            borderRadius="md"
            mb={{ base: 4, md: 0 }}  // Margin only on mobile devices
          />

          {/* Text and Tropes on the right */}
          <Box textAlign="left" flex="1">
            <Heading as="h2" size="lg" mb={4}>
              {book.title}
            </Heading>
            <Text mb={4} dangerouslySetInnerHTML={{ __html: book.blurb }} />
            
            <Heading as="h3" size="md" mb={4}>
              Tropes
            </Heading>
            {/* Display tropes in a grid with 2 or 3 columns */}
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

            {/* Amazon Purchase Link */}
            <Box textAlign="center" mt={4}>
              <Button 
                as="a" 
                href={book.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                bg="rgba(30, 30, 60, 0.8)"  // Dark blue background
                color="white"  // White text color
                _hover={{ bg: "rgba(50, 50, 80, 0.9)" }}  // Lighter dark blue on hover
                size="lg"
                px={8}  // Padding for the button
                borderRadius="md"
                marginRight={6}
              >
                Order Now!
              </Button>
              <Button 
                as="a" 
                href={book.etsy} 
                target="_blank" 
                rel="noopener noreferrer" 
                bg="rgba(30, 30, 60, 0.8)"  // Dark blue background
                color="white"  // White text color
                _hover={{ bg: "rgba(50, 50, 80, 0.9)" }}  // Lighter dark blue on hover
                size="lg"
                px={8}  // Padding for the button
                borderRadius="md"
              >
                Signed Copy!
              </Button>
            </Box>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default BookCard;
