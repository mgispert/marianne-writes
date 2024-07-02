import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    body: "'Goudy Bookletter 1911', serif",
    heading: "'Cinzel Decorative', serif",
  },
  fontWeights: {
    normal: 500,
  },
  lineHeights: {
    normal: 1,
    tall: 2.5,
  },
  colors: {
    primary: "#000000",
    secondary: "#6a737d",
    background: "#000000",
    text: "#cdcdcd",
    border: "#282828",
    tableHeaderBg: "#ededed",
  },
  styles: {
    global: {
      "html, body": {
        fontFamily: "body",
        fontSize: "18px",
        fontWeight: "normal",
        lineHeight: "tall",
        color: "text",
        bg: "background",
        margin: "0",
        scrollBehavior: "smooth",
        backgroundImage: "url('/images/background.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center top", // Ensures better positioning
        minHeight: "100vh", // Ensures the background spans at least the viewport height
        height: "auto", // Allows body to grow with content
      },
    },
  },
});

export default theme;
