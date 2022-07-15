/* eslint-disable testing-library/no-node-access */
/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import Home from '.';
import {theme} from '../../styles/theme';

export const renderTheme = (children) => {
  return render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
}

test('renders learn react link', () => {
  const { debug } = renderTheme(<Home />);
  const headingContainer = screen.getByRole('heading', { name: 'Hello' }).parentElement;
  expect(headingContainer).toHaveStyle({
    background: theme.colors.secondaryColor,
  });
});
