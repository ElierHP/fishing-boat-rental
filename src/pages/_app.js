import { css, Global } from "@emotion/react";
import "normalize.css";
import theme from "../theme";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Global
        styles={css`
          html {
            font-size: 62.5%;
          }
          ,
          h1,
          h2,
          h3,
          p,
          a,
          div {
            font-family: ${theme.fonts.body};
            font-size: ${theme.fontSizes.medium}rem;
            letter-spacing: ${theme.letterSpacing.body}px;
            line-height: ${theme.lineHeights.body};
            color: ${theme.colors.dark};
            text-decoration: none;
          }
        `}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
