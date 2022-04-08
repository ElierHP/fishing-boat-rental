import { css, Global } from "@emotion/react";
import theme from "./theme";

export default function GlobalStyles() {
  return (
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
        div,
        li {
          font-family: ${theme.fonts.body};
          font-size: ${theme.fontSizes.medium}rem;
          letter-spacing: ${theme.letterSpacing.body}px;
          line-height: ${theme.lineHeights.body};
          color: ${theme.colors.dark};
          text-decoration: none;
          list-style: none;
        }
        ,
        h1 {
          font-size: ${theme.fontSizes.heading}rem;
          margin-top: 0;
        }
      `}
    />
  );
}
