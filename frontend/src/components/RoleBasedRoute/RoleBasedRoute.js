// components/RoleBasedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const RoleBasedRoute = ({ children, allowedRoles }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner">Загрузка...</div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/pages/auth" replace />;
  }

  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/" replace />; // или на страницу "Доступ запрещен"
  }

  return children;
};

export default RoleBasedRoute;