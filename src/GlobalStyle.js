import { createGlobalStyle } from 'styled-components';
import bg from './assets/bg.jpg';

const GlobalStyle = createGlobalStyle`
  body {
    width: 100vw;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: block;
    background-image: url(${bg}); 
    background-color: black;
    background-size: cover;
    background-repeat: no-repeat;
    color: white;
   
  
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;

export default GlobalStyle;
