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
        bg: "linear-gradient(ellipse at bottom, #0d0d1a 0%, #000 100%)",
        margin: 0,
        minHeight: "100vh",
        position: "relative",
        overflowX: "hidden"
      },
    },
  },
});

export default theme;
