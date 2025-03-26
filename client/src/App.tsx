// client/src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import DataForm from './components/DataForm';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';

const App: React.FC = () => {
  return (
    <Router>
      <header style={{ padding: '10px', background: 'var(--background-color)' }}>
        <nav>
          <ul style={{ listStyle: 'none', display: 'flex', gap: '20px', margin: 0, padding: 0 }}>
            <li>
              <Link to="/" style={{ color: 'var(--primary-color)', textDecoration: 'none' }}>Home</Link>
            </li>
            <li>
              <Link to="/data" style={{ color: 'var(--primary-color)', textDecoration: 'none' }}>Data Form</Link>
            </li>
            <li>
              <Link to="/register" style={{ color: 'var(--primary-color)', textDecoration: 'none' }}>Register</Link>
            </li>
            <li>
              <Link to="/login" style={{ color: 'var(--primary-color)', textDecoration: 'none' }}>Login</Link>
            </li>
            <li>
              <Link to="/dashboard" style={{ color: 'var(--primary-color)', textDecoration: 'none' }}>Dashboard</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/data" element={<DataForm />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
