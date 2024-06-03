import { Box, Heading, Text, Button } from "@chakra-ui/react";
import Link from "next/link";

function Home() {
  return (
    <Box p={8}>
      <Box maxW="xl" mx="auto" textAlign="center">
        <Heading as="h1" size="2xl" mb={4}>
          Welcome to Marianne Writes
        </Heading>
        <Text fontSize="xl" mb={8}>
          Discover captivating stories written by Marianne G.
        </Text>
        <Link href="/main" passHref>
          <Button colorScheme="teal" size="lg">
            Go to Main page
          </Button>
        </Link>
      </Box>
    </Box>
  );
}

export default Home;
