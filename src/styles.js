import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
  }
  body {
    margin: 0;
    height: 100%;
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
    background-color: #F2F3F7;
  }
  #container {
    height: 100%;
  }
  p {
      margin: 0;
      padding: 0;
  }
`;
