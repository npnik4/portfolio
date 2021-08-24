import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    box-sizing: border-box;
    height: 100vh;
    overflow-x: hidden;
    transition: all 0s;
  }

  html {
    scroll-behavior: smooth;
  }
`;
