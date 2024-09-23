import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  h1, h2 {
    color: #333;
  }

  section {
    padding: 20px;
    text-align: center;
  }
`;
