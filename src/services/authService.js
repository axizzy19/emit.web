// frontend/src/services/authService.js
import { apiService } from './api';

class AuthService {
  async login(credentials) {
    try {
      const user = await apiService.post('/auth/login', credentials);
      
      // Сохраняем данные пользователя в localStorage
      localStorage.setItem('user', JSON.stringify(user));
      
      return user;
    } catch (error) {
      // Очищаем на случай ошибки
      localStorage.removeItem('user');
      throw error;
    }
  }

  async logout() {
    try {
      await apiService.post('/auth/logout');
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      // Всегда очищаем локальные данные
      localStorage.removeItem('user');
    }
  }

  async getCurrentUser() {
    try {
      const user = await apiService.get('/auth/me');
      localStorage.setItem('user', JSON.stringify(user));
      return user;
    } catch (error) {
      localStorage.removeItem('user');
      return null;
    }
  }

  getStoredUser() {
    try {
      const user = localStorage.getItem('user');
      return user ? JSON.parse(user) : null;
    } catch {
      return null;
    }
  }

  isAuthenticated() {
    return !!this.getStoredUser();
  }
}

export const authService = new AuthService();