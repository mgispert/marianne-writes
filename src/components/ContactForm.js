"use client";

import { useForm, ValidationError } from "@formspree/react";
import {
    VStack,
    FormControl,
    FormLabel,
    Input,
    Select,
    Textarea,
    Button,
    Box,
    Heading,
    Text,
    HStack,
    Divider,
} from "@chakra-ui/react";

export default function ContactForm() {
    const [state, handleSubmit] = useForm("mvzgedjy");

    if (state.succeeded) {
        return (
            <Box
                p={10}
                textAlign="center"
                border="1px solid silver"
                bg="rgba(26, 26, 64, 0.8)"
                boxShadow="0 0 20px rgba(176, 196, 222, 0.2)"
            >
                <VStack spacing={4}>
                    <Heading
                        size="md"
                        color="silver"
                        fontFamily="'UnifrakturCook', cursive"
                    >
                        Message Sent Successfully
                    </Heading>
                    <Text color="gray.300">
                        Thank you for your inquiry. I will get back to you
                        shortly!
                    </Text>
                    <Divider borderColor="whiteAlpha.300" />
                    <Text fontSize="sm" color="silver">
                        In the meantime, feel free to download the assets below:
                    </Text>
                    <HStack spacing={4}>
                        <Button
                            as="a"
                            href="/assets/Marianne_Grey_Sell_Sheet.pdf"
                            download
                            size="sm"
                            variant="outline"
                            color="silver"
                        >
                            Download Sell Sheet
                        </Button>
                        <Button
                            as="a"
                            href="https://drive.google.com/drive/folders/1Rgd_hWRcWZ5iu5HzC9vnr7AJ9klB2sL9?usp=sharing"
                            target="_blank"
                            size="sm"
                            variant="ghost"
                            color="silver"
                            textDecoration="underline"
                        >
                            Access Media Kit
                        </Button>
                    </HStack>
                </VStack>
            </Box>
        );
    }

    return (
        <Box
            as="form"
            id="contact-form"
            onSubmit={handleSubmit}
            action="https://formspree.io/f/mvzgedjy"
            method="POST"
            p={8}
            border="1px solid silver"
            bg="rgba(12, 12, 30, 0.5)"
            maxW="600px"
            mx="auto"
        >
            <VStack spacing={5}>
                <FormControl isRequired>
                    <FormLabel color="silver">Name</FormLabel>
                    <Input
                        name="name"
                        focusBorderColor="silver"
                        color="white"
                        bg="blackAlpha.300"
                    />
                </FormControl>

                <FormControl isRequired>
                    <FormLabel color="silver">Email</FormLabel>
                    <Input
                        type="email"
                        name="email"
                        focusBorderColor="silver"
                        color="white"
                        bg="blackAlpha.300"
                    />
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />
                </FormControl>

                <FormControl isRequired>
                    <FormLabel color="silver">Subject</FormLabel>
                    <Select
                        name="subject"
                        focusBorderColor="silver"
                        color="gray.400"
                        bg="blackAlpha.300"
                    >
                        <option value="Wholesale">
                            Bookstore / Wholesale Inquiry
                        </option>
                        <option value="Media">Interview / Media Request</option>
                        <option value="Event">Event / Signing Request</option>
                        <option value="General">General Inquiry</option>
                    </Select>
                </FormControl>

                <FormControl isRequired>
                    <FormLabel color="silver">Message</FormLabel>
                    <Textarea
                        name="message"
                        focusBorderColor="silver"
                        color="white"
                        bg="blackAlpha.300"
                        rows={5}
                    />
                    <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                    />
                </FormControl>

                <Button
                    type="submit"
                    disabled={state.submitting}
                    width="full"
                    background="linear-gradient(to right, #0c0c1e, #1a1a40)"
                    color="silver"
                    border="1px solid silver"
                    _hover={{ bg: "silver", color: "black" }}
                >
                    {state.submitting ? "Sending..." : "Send Message"}
                </Button>
            </VStack>
        </Box>
    );
}
