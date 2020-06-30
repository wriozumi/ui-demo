import React from 'react';
import Card from './components/organisms/Card';
import GlobalStyle from './components/theme/GlobalStyle';
import { ResetStyles } from './helpers/ResetStyles';
import { ThemeProvider } from 'styled-components';
import theme from './components/theme';

function App() {
  return (
    <>
      <ResetStyles />
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Card />
      </ThemeProvider>
    </>
  );
}

export default App;
