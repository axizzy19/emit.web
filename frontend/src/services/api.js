class ApiService {
  constructor() {
    this.baseURL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api';
  }

  async request (endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    const config = {
      ...options,
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    }

    try {
      const response = await fetch(url, config);
      
      // Если access token истек, пробуем обновить
      if (response.status === 401 && endpoint !== '/auth/refresh') {
        const refreshed = await this.refreshTokens();
        if (refreshed) {
          // Повторяем оригинальный запрос с новым токеном
          return this.request(endpoint, options);
        }
      }
      
      return response;
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  };

  async refreshTokens() {
    try {
      const response = await fetch(`${this.baseURL}/auth/refresh`, {
        method: 'POST',
        credentials: 'include',
      });
      
      if (response.ok) {
        return true;
      } else {
        // Если refresh не удался, делаем логаут
        this.handleLogout();
        return false;
      }
    } catch (error) {
      this.handleLogout();
      return false;
    }
  }

  handleLogout() {
    // Очищаем локальное состояние
    localStorage.removeItem('user');
    // Перенаправляем на страницу логина
    if (window.location.pathname !== '/login') {
      window.location.href = '/login';
    }
  }

  async get(url) {
    const response = await this.request(url, { method: 'GET' });
    return this.handleResponse(response);
  }

  async post(url, data) {
    const response = await this.request(url, {
      method: 'POST',
      body: JSON.stringify(data),
    });
    return this.handleResponse(response);
  }

  async handleResponse(response) {
    if (!response.ok) {
      const error = await response.text();
      throw new Error(error || 'Request failed');
    }
    
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      return response.json();
    }
    
    return response.text();
  }

}

export const apiService = new ApiService();