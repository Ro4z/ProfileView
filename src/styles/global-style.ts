import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    text-align: center;
    padding: 0.5rem;
  }
`;
