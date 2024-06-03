import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    body: "'Inter', sans-serif",
    heading: "'Inter', sans-serif",
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
        fontSize: "16px",
        fontWeight: "normal",
        lineHeight: "tall",
        color: "text",
        bg: "background",
        margin: "0",
        scrollBehavior: "smooth",
        backgroundImage: "url('/images/background.png')",
        backgroundSize: "contain",
        backgroundRepeat: "repeat",
      },
    },
  },
});

export default theme;
