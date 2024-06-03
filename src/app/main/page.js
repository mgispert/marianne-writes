import Navbar from "@/components/Navbar";
import { Container, Heading } from "@chakra-ui/react";

export default function MainPage() {
  return (
    <Container>
      <Heading as="h1" size="xl" mb={4}>
        Main page
      </Heading>
      <Navbar />
    </Container>
  );
}
