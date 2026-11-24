import { theme } from "./theme.ts";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @media (min-width: 120rem) {
    html {
      font-size: clamp(1rem, 0.85vw, 1.375rem);
    }
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
body {
    background-color: ${theme.colors.background};
    color: ${theme.colors.text};
    font-family: ${theme.fonts.secondary};
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }

  h1, h2, h3 {
    font-family: ${theme.fonts.primary};
    font-weight: 600;
  }

  button {
    font-family: inherit;
    cursor: pointer;
  }
`;
