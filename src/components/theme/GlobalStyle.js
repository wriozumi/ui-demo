import { createGlobalStyle } from 'styled-components';
import InterFontWoff from '../../assets/fonts/Inter/Inter-Medium.woff';
import InterFontWoff2 from '../../assets/fonts/Inter/Inter-Medium.woff2';


const GlobalStyle = createGlobalStyle`

@font-face {
        font-family: 'Inter';
        src: local('Inter'), local('Inter'),
        url(${InterFontWoff2}) format('woff2'),
        url(${InterFontWoff}) format('woff');
        font-weight: 400;
        font-style: normal;
    }

  @font-face {
    font-family: 'Inter';
    src: url('../../assets/fonts/Inter/Inter-Black.woff') format('truetype');
  }

  @font-face {
    font-family: 'Inter Regular';
    src: url('../../assets/fonts/Inter/Inter-Medium.woff') format('truetype');
  }

  body {  
    font-family: 'Inter', Inter, sans-serif;
    font-size: 15px;
  }
`

export default GlobalStyle;