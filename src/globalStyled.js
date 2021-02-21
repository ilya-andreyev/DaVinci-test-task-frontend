import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  html {
    box-sizing: border-box;
  }

  *,
  *:after,
  *:before {
    box-sizing: inherit;
  }

  body {
    font-family: Verdana, sans-serif;
    margin: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }

  p {
    margin: 0;
  }

  input {
    margin: 0;
    padding: 0;
  }

  button {
    padding: 0;
  }
`;
