import Navbar from "@/components/Navbar";
import { Container, Heading, Text } from "@chakra-ui/react";

export default function ContactPage() {
  return (
    <Container>
      <Heading as="h1" size="xl" mb={4}>
        Contact
      </Heading>
      <Navbar />
      <Text>This is the contact page.</Text>
    </Container>
  );
}
