import { useState, useEffect } from "react";
import { getMe, login as apiLogin, logout as apiLogout } from '../services/authApi';

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const setAuthToken = (token) => {
    const expiryTime = new Date().getTime + 30*60*1000;
    localStorage.setItem('authToken', token);
    localStorage.setItem('tokenExpiry', expiryTime.toString());
  };

  const isTokenValid = () => {
    const expiry = localStorage.getItem('tokenExpiry');
    if (!expiry) return false;

    return new Date().getTime() < parseInt(expiry);
  };

  const fetchUser = async () => {
    try {
      if (!isTokenValid) {
        await apiLogout();
        setUser(null);
        return;
      }

      const userData = await getMe();
      setUser(userData);
      setError(null);
    } catch (error) {
      console.error('Failed to fetch user:', err);
      await apiLogout();
      setUser(null);
      setError('Не удалось загрузить информацию о пользователе');
    }
  };

  const login = async (username, password) => {
    try {
      setLoading(true);
      setError(null);

      const response = await apiLogin(username, password);

      const token = response.access_token || response.token;

      if (!token) {
        throw new Error('Token not received from server');
      }

      setAuthToken(token);
      await fetchUser();

      return { success: true };
    } catch (error) {
      const errorMessage = err.message || 'Ошибка авторизации';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  }

  const logout = async () => {
    try {
      setLoading(true);
      await apiLogout();
      setUser(null);
      setError(null);
    } catch (err) {
      console.error('Logout error:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const checkAuth = async() => {
      if (isTokenValid()) {
        await fetchUser();
      } else {
        await apiLogout();
        setUser(null);
      }
      setLoading(false);
    };

    checkAuth();
  }, []);

  useEffect(() => {
    const checkTokenExpiry = () => {
      if (!isTokenValid && user) {
        logout();
      }
    };

    const interval = setInterval(checkTokenExpiry, 60000);
    return () => clearInterval(interval);
  }, [user]);

  return {
    user,
    login,
    logout,
    loading,
    error,
    isAuthenticated: !!user && isTokenValid(),
    refreshUser: fetchUser,
  };
}