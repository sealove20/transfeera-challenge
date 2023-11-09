import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import base from '../src/styles/themes/base';

const AllTheProviders = ({ children }) => {
  return <ThemeProvider theme={base}>{children}</ThemeProvider>;
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';

export { customRender as render };
