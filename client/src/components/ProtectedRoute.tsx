// client/src/components/ProtectedRoute.tsx
import React from 'react';
import { Navigate } from 'react-router-dom';

// Change React.ReactElement to React.ReactNode
interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const token = localStorage.getItem('token');
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>; // Wrap children in a fragment (optional)
};

export default ProtectedRoute;
