import React from 'react';

export const useNavigate = () => jest.fn();

export const BrowserRouter = ({ children }: { children: React.ReactNode }) => (
  <div>{children}</div>
);

export const Link = ({ children }: { children: React.ReactNode }) => (
  <a href="/">{children}</a>
);

const reactRouterDomMock = {
  useNavigate,
  BrowserRouter,
  Link
};

export default reactRouterDomMock;
