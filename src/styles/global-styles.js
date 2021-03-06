import { createGlobalStyle, css } from "styled-components";
import { theme } from "./theme";

export const GlobalStyles = createGlobalStyle`
  /* @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,900;1,900&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap'); */
  * {
    margin: 0;
    padding: 0
  }

  html {
    font-size: 62.5%;
  }

  body {
    ${({ theme }) => css`
      font-size: 1.6rem;
      font-family: ${theme.font.family.default};
    `}
  }
  h1 {
    ${({ theme }) => css`
      font-family: ${theme.font.family.secondary};
    `}
  }
`;
