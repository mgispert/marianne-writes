import { Box, Heading, Link, Text } from "@chakra-ui/react";
import { FaInstagram } from "react-icons/fa";
import { RiTeamLine } from "react-icons/ri";
import { MdOutlineMailOutline } from "react-icons/md";
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
        <Box>
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
          <Box display="flex" alignItems="center">
            <RiTeamLine size="24" />
            <Link href="https://forms.gle/QQQATFqaFiqNX4z4A" ml={2} isExternal>
              Become a part of my street team!
            </Link>
          </Box>
          <Box display="flex" alignItems="center">
            <MdOutlineMailOutline size="24" />{" "}
            <Text ml={2}>mariannegwrites@gmail.com</Text>
          </Box>
        </Box>
      </Box>
    </>
  );
}
