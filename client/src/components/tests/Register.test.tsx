// client/src/components/tests/Register.test.tsx

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Register from '../Register';
import axios from 'axios';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Register Component', () => {
  test('renders registration form', () => {
    render(<Register />);
    expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /register/i })).toBeInTheDocument();
  });

  test('shows success message on successful registration', async () => {
    mockedAxios.post.mockResolvedValueOnce({ data: { message: 'User registered successfully' } });
    
    render(<Register />);
    
    fireEvent.change(screen.getByLabelText(/username/i), {
      target: { value: 'testuser' }
    });
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: 'testuser@example.com' }
    });
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: 'TestPass123' }
    });
    
    fireEvent.click(screen.getByRole('button', { name: /register/i }));
    
    await waitFor(() => {
      expect(screen.getByText(/user registered successfully/i)).toBeInTheDocument();
    });
  });
});
