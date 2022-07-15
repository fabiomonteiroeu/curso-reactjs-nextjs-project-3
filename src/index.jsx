import React from 'react';
import ReactDOM from 'react-dom';
import styled, { ThemeProvider, css } from 'styled-components';
import { Heading } from './components/Heading';

import { GlobalStyles } from './styles/global-styles';
import { theme } from './styles/theme';
import Home from './templates/App';

export const Container = styled.div`
${({ theme }) => css`
  background: ${theme.colors.primaryColor};
  color: white;
`}

`;

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Container>
       <Heading>Olá mundo</Heading>
      </Container>
      <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
