import React from "react";
import './ButtonSave.css';

const ButtonSave = ({ 
  onClick, 
  disabled = false, 
  loading = false, 
  text = "Сохранить",
}) => {
  const handleClick = () => {
    if (!disabled && !loading && onClick) {
      onClick();
    }
  };

  return (
    <section className="button-save-container">
      <button
        className={`button-save ${loading ? 'loading' : ''} ${disabled ? 'disabled' : ''}`}
        onClick={handleClick}
        disabled={disabled || loading}
      >
        {loading ? (
          <>
            <span className="loading"></span>
            Сохранение...
          </>
        ) : (
          text
        )}
      </button>
    </section>
  );
};

export default ButtonSave;