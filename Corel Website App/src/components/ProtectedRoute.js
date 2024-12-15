// src/components/ProtectedRoute.js
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const user = localStorage.getItem('user');
  const location = useLocation();

  if (!user) {
    return <Navigate to="/" state={{ from: location.pathname }} replace />;
  }

  return children;
};

export default ProtectedRoute;