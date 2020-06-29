import React from 'react';
import Card from './components/organisms/Card';
import GlobalStyle from './components/theme/GlobalStyle';
import {ResetStyles} from './helpers/ResetStyles';

function App() {
  return (
    <>
      <GlobalStyle />
      <ResetStyles />
      <Card />
    </>
  );
}

export default App;
