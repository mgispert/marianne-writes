import Navbar from "@/components/Navbar";
import { Container, Heading, Text } from "@chakra-ui/react";

export default function AboutPage() {
  return (
    <Container>
      <Heading as="h1" size="xl" mb={4}>
        About Me
      </Heading>
      <Navbar />
      <Text>This is the about page.</Text>
    </Container>
  );
}
