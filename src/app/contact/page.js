"use client";
import { Box, Heading, Link, Button } from "@chakra-ui/react";
import Navbar from "@/components/Navbar";
import { useEffect } from "react";

export default function ContactPage() {
  const styles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    minHeight: "100vh",  
    textAlign: "center", 
    backgroundColor:"rgba(0, 0, 0, 0.7)",
    borderRadius:"lg",         
    p:"6px",                    
    color:"white"            

  };

  useEffect(() => {
    // Load the MailerLite script dynamically
    (function(w, d, e, u, f, l, n) {
      w[f] = w[f] || function() {
        (w[f].q = w[f].q || []).push(arguments);
      };
      l = d.createElement(e);
      l.async = 1;
      l.src = u;
      n = d.getElementsByTagName(e)[0];
      n.parentNode.insertBefore(l, n);
    })(window, document, 'script', 'https://assets.mailerlite.com/js/universal.js', 'ml');

    // Initialize the MailerLite form
    window.ml('account', '1080121');
  }, []); // Empty dependency array ensures this runs only once after the component mounts


  return (
    <>
      <Navbar />
      <Box maxW="60%" mx="auto" textAlign="center" mt="8" mb="10" px="4"  borderRadius="lg"  >
      <Box style={styles}>
        {/* Page Title */}
        <Heading as="h1" size="xl" mb={8} mt={4}>
          Stay in Touch!
        </Heading>

        {/* Linktree Link */}
        <Link
          href="https://linktr.ee/mariannegrey"
          isExternal
          _hover={{ textDecoration: "none" }}
          mb={8}
        >
          <Button
            size="lg"
            bg="rgba(30, 30, 60, 0.8)"
            color="white"
            _hover={{ bg: "rgba(50, 50, 80, 0.9)" }}
            borderRadius="md"
          >
            Visit My Linktree
          </Button>
        </Link>

        {/* Newsletter Form */}
        <Box width="100%" maxWidth="600px" mb={4}>
          <div className="ml-embedded" data-form="pSbxeX"></div>
        </Box>
      </Box>
      </Box>
    </>
  );
}
