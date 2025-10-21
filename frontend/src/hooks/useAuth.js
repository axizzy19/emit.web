// hooks/useAuth.js
import { useState, useEffect } from 'react';
import { getMe, login as apiLogin, logout as apiLogout } from '../services/authApi';

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const setAuthToken = (token) => {
    const expiryTime = new Date().getTime() + 30 * 24 * 60 * 60 * 1000; // 30 дней
    localStorage.setItem('access_token', token);
    localStorage.setItem('token_expiry', expiryTime.toString());
  };

  const isTokenValid = () => {
    const expiry = localStorage.getItem('token_expiry');
    const token = localStorage.getItem('access_token');
    
    if (!token || !expiry) return false;
    
    return new Date().getTime() < parseInt(expiry);
  };

  const fetchUser = async () => {
    try {
      if (!isTokenValid()) {
        apiLogout();
        setUser(null);
        return;
      }

      const userData = await getMe();
      setUser(userData);
      setError(null);
    } catch (err) {
      console.error('Failed to fetch user:', err);
      apiLogout();
      setUser(null);
      setError('Не удалось загрузить информацию о пользователе');
    }
  };

  const login = async (username, password) => {
    try {
      setLoading(true);
      setError(null);

      const response = await apiLogin(username, password);
      
      const token = response.access_token;
      
      if (!token) {
        throw new Error('Token not received from server');
      }

      setAuthToken(token);
      await fetchUser(); // Загружаем информацию о пользователе
      
      return { success: true };
    } catch (err) {
      const errorMessage = err.message || 'Ошибка авторизации. Проверьте логин и пароль';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    apiLogout();
    setUser(null);
    setError(null);
  };

  useEffect(() => {
    const checkAuth = async () => {
      if (isTokenValid()) {
        await fetchUser();
      } else {
        apiLogout();
        setUser(null);
      }
      setLoading(false);
    };

    checkAuth();
  }, []);

  return {
    user,
    login,
    logout,
    loading,
    error,
    isAuthenticated: !!user && isTokenValid(),
    userRole: user?.role, // Добавляем роль пользователя
    refreshUser: fetchUser,
  };
};