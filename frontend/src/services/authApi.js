// services/authApi.js

const API_BASE_URL = 'http://localhost:8000/api'; // ваш базовый URL

// Вход в систему
export const login = async (username, password) => {
  const formData = new URLSearchParams();
  formData.append('username', username);
  formData.append('password', password);

  try {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Login request failed:', error);
    throw error;
  }
};

// Получение информации о текущем пользователе
export const getMe = async () => {
  const token = localStorage.getItem('access_token');
  
  if (!token) {
    throw new Error('No authentication token found');
  }

  try {
    const response = await fetch(`${API_BASE_URL}/auth/me`, {
      method: 'GET',
      headers: {
        'Bearer': token, // Используем Bearer вместо Authorization
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('GetMe request failed:', error);
    throw error;
  }
};

// Выход из системы
export const logout = () => {
  localStorage.removeItem('access_token');
  localStorage.removeItem('token_expiry');
};