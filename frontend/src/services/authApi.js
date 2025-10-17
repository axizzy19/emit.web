const API_BASE_URL = 'http://localhost:8000'; 

const fetchApi = async (endpoint, option = {}) => {
  const url = `${API_BASE_URL}${endpoint}`;

   const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      ...options.headers,
    },
    ...options,
  };

  try {
    const response = await fetch(url, config);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('API request failed:', error);
    throw error;
  }
};

export const getMe = async () => {
  const token = localStorage.getItem('authToken');

  if (!token) {
    throw new Error('No authentication token found')
  }

  return await fetchApi('/auth/me', {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  })
}

export const login = async (username, password) => {
  const formData = new URLSearchParams();
  formData.append('grant_type', 'password');
  formData.append('username', username);
  formData.append('password', password);
  formData.append('scope', '');
  formData.append('client_id', '');
  formData.append('client_secret', '');

  const response = await fetchApi('/auth/login', {
    method: 'POST',
    body: formData,
  });

  return response;
}

export const logout = async () => {
  const token = localStorage.getItem('authToken');

  localStorage.removeItem('authToken');
  localStorage.removeItem('tokenExpiry');
}