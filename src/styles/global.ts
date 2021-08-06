import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #D0D0D0;
    -webkit-font-font-smoothing: antialiased;
  }

  body, input, button {
    font: 16px Poppins, Roboto, sans-serif;
  }

  #root {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 64px 0;
  }

  button {
    cursor: pointer;
  }
`;