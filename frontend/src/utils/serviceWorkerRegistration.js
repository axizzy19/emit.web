export function register() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      const swUrl = '/sw.js';
      
      console.log('Регистрация Service Worker...');
      
      navigator.serviceWorker.register(swUrl)
        .then((registration) => {
          console.log('Service Worker зарегистрирован');
          
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing;
            console.log('Обновление Service Worker:', newWorker.state);
            
            newWorker.addEventListener('statechange', () => {
              console.log('Состояние SW:', newWorker.state);
              if (newWorker.state === 'activated') {
                console.log('Новый Service Worker активирован!');
              }
            });
          });
          
          setInterval(() => {
            if (registration.active) {
              registration.active.postMessage({ type: 'CLEANUP_CACHE' });
            }
          }, 10 * 60 * 1000); //10min
        })
        .catch((error) => {
          console.log('Ошибка регистрации Service Worker:', error);
        });
    });
  }
}

export function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then((registration) => {
      registration.unregister();
      console.log('Service Worker удален');
    });
  }
}