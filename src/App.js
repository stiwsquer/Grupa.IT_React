import React from 'react';
import { StyledEngineProvider } from '@mui/material/styles';
import Layout from './components/Layout';
import GlobalStyles from './GlobalStyles';

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <GlobalStyles />
      <Layout />
    </StyledEngineProvider>
  );
}

export default App;
