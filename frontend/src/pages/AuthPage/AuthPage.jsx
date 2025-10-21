// components/Auth.js
import React, { useState } from 'react';
import './AuthPage.css';
import authBackground from '../../assets/images/auth-background.svg';
import authLines from '../../assets/images/authLines.svg';
import AuthButton from '../../components/AuthButton/AuthButton';

const AuthPage = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const validateForm = () => {
    if (!formData.username || !formData.password) {
      return 'Все поля обязательны для заполнения';
    }
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      setLoading(false);
      return;
    }

    try {
      const result = await onLogin(formData.username, formData.password);

      if (!result.success) {
        setError(result.error || "Ошибка авторизации")
      }
    } catch (error) {
      setError('Произошла непредвиденная ошибка');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page__container">
      <img
        className="auth-page__background"
        src={authBackground}
        alt="Декоративный угол"
      />
      <img
        className="auth-page__lines"
        src={authLines}
        alt="Декоративные линии"
      />
      <div className="auth-page__form">
        <h2 className="auth-page__title">ВХОД</h2>
        
        {error && <div className="error-message">{error}</div>}
        
        <form className="auth-page__form__section" onSubmit={handleSubmit}>
          <div className="auth-page__form-group">
            <label className="auth-page__label">ЛОГИН:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              disabled={loading}
              placeholder="Введите логин"
              className="auth-page__input"
            />
          </div>
          
          <div className="auth-page__form-group">
            <label className="auth-page__label">ПАРОЛЬ:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              disabled={loading}
              placeholder="Введите пароль"
              className="auth-page__input"
            />
          </div>
            <AuthButton 
              loading={loading}
              disabled={loading}
            />
        </form>
      </div>
    </div>
  );
};

export default AuthPage;