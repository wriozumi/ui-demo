import { createGlobalStyle } from 'styled-components';
import {InterFontWoff} from '../../assets/fonts/Inter/Inter-Medium.woff';
import {InterFontWoff2} from '../../assets/fonts/Inter/Inter-Medium.woff2';


const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Inter', sans-serif;
        src: url(${InterFontWoff2}) format('woff2'),
        url(${InterFontWoff}) format('woff');
        font-weight: 400;
        font-style: normal;
    }


  body {  
    font-family: 'Inter';
    font-size: 15px;
  }
`

export default GlobalStyle;