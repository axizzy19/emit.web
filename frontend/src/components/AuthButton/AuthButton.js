import React from 'react';
import './AuthButton.css';

const AuthButton = ({ 
  loading = false, 
  disabled = false,
  children = "ВОЙТИ",
  onClick,
  type = "submit"
}) => {
  return (
    <div className="auth-page__button-save__section">
      <button 
        type={type}
        className="auth-page__submit-button"
        disabled={disabled || loading}
        onClick={onClick}
      >
        {loading ? 'ЗАГРУЗКА...' : children}
      </button>
    </div>
  );
}

export default AuthButton;