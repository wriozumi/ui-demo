import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
  
  body {  
    font-family: 'Inter', sans-serif;
    font-size: 0.9375rem;
    background-color: #E5E5E5
  }
`;

export default GlobalStyle;
