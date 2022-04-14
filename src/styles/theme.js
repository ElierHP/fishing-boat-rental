const theme = {
  space: [0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: "Poppins, sans-serif",
  },
  fontSizes: {
    small: 1.4,
    medium: 1.6,
    large: 2.1,
    mobileHeading: 4,
    heading: 3.6,
    largeHeading: 6,
  },
  fontWeights: {
    thin: 300,
    body: 400,
    bold: 600,
    bolder: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1,
  },
  letterSpacing: {
    body: 0.5,
    heading: 2,
  },
  colors: {
    primary: "#48ACE3",
    dark: "black",
    light: "white",
    hover: "#FFD685",
    btnHover: "#E7AD56",
  },
  transition: {
    primary: "all 0.3s ease-in-out",
    secondary: "all 0.5s ease-in-out",
  },
  breakpoints: [576, 768, 992, 1200],
  mq() {
    return this.breakpoints.map((bp) => `@media (min-width: ${bp}px)`);
  },
};

export default theme;
