// client/src/components/Login.tsx
import React, { useState, FormEvent } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import styles from './Login.module.css';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [token, setToken] = useState('');
  const navigate = useNavigate(); // Initialize navigation

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/auth/login', { email, password });
      const receivedToken = response.data.token;
      setToken(receivedToken);
      setMessage('Login successful!');
      
      // Store token in localStorage
      localStorage.setItem('token', receivedToken);
      
      // Redirect to a protected route (Dashboard)
      navigate('/dashboard');
      
      setEmail('');
      setPassword('');
    } catch (error: any) {
      console.error('Login error:', error);
      setMessage('Login failed.');
    }
  };

  return (
    <div className={styles.authContainer}>
      <h2>Login</h2>
      {message && <p>{message}</p>}
      {token && <p>Token: {token}</p>}
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className={styles.submitButton}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
