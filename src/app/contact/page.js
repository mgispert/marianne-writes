import { Box, Heading, Link } from "@chakra-ui/react";
import { FaInstagram } from "react-icons/fa";
import Navbar from "@/components/Navbar";

export default function ContactPage() {
  const styles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  };

  return (
    <>
      <Navbar />
      <Box style={styles}>
        <Heading as="h1" size="xl" mb={4}>
          Contact Me!
        </Heading>
        <Box display="flex" alignItems="center">
          <FaInstagram size="24" />
          <Link
            href="https://www.instagram.com/marianne.the.author"
            ml={2}
            isExternal
          >
            @marianne.the.author
          </Link>
        </Box>
      </Box>
    </>
  );
}
