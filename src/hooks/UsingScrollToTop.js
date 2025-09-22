// hooks/useScrollToTop.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useScrollToTop() {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // или 'smooth' для плавной прокрутки
    });
  }, [location.pathname]);
}

