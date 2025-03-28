// client/src/App.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Home link in the header', () => {
  // Do not wrap <App /> in BrowserRouter because App already includes Router.
  render(<App />);
  const homeLink = screen.getByText(/Home/i);
  expect(homeLink).toBeInTheDocument();
});
