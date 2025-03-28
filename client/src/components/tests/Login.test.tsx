/* eslint import/first: "off" */
jest.mock('react-router-dom');
jest.mock('axios');

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Login from '../Login';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';

const mockedAxios = axios as jest.Mocked<typeof axios>;

const renderWithRouter = (component: React.ReactElement) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('Login Component', () => {
  test('renders login form', () => {
    renderWithRouter(<Login />);
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
  });

  test('shows success message and token on successful login', async () => {
    mockedAxios.post.mockResolvedValueOnce({ data: { token: 'dummy-token' } });
    
    renderWithRouter(<Login />);
    
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: 'testuser@example.com' }
    });
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: 'TestPass123' }
    });
    
    fireEvent.click(screen.getByRole('button', { name: /login/i }));
    
    await waitFor(() => {
      expect(screen.getByText(/login successful/i)).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(screen.getByText(/dummy-token/i)).toBeInTheDocument();
    });
  });
});
