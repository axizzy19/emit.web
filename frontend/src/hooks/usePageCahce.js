import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const usePageCache = () => {
  const location = useLocation();

  useEffect(() => {
    const cacheCurrentPage = async () => {
      const currentUrl = window.location.href;
      console.log('Текущая страница:', location.pathname);
      
      if (navigator.serviceWorker && navigator.serviceWorker.controller) {
        navigator.serviceWorker.controller.postMessage({
          type: 'CACHE_CURRENT_PAGE',
          url: currentUrl
        });
      }
      try {
        const cache = await caches.open('emit-pages-cache-v1');
        const response = await fetch(currentUrl);
        if (response.status === 200) {
          await cache.put(currentUrl, response);
          console.log('Страница закэширована через хук:', location.pathname);
        }
      } catch (error) {
        console.log('Не удалось кэшировать через хук:', error);
      }
    };

    setTimeout(cacheCurrentPage, 100);
  }, [location.pathname]);
};