export function register() {
  if ('serviceWorker' in navigator) {
    setTimeout(() => {
      const swUrl = '/sw.js';
      
      console.log('Регистрация Service Worker...');
      
      navigator.serviceWorker.register(swUrl)
        .then((registration) => {
          console.log('Service Worker зарегистрирован');
          if (registration.installing) {
            console.log('Service Worker installing');
          } else if (registration.waiting) {
            console.log('Service Worker installed');
          } else if (registration.active) {
            console.log('Service Worker active');
          }
        })
        .catch((error) => {
          console.log('Ошибка регистрации Service Worker:', error);
        });
    }, 1000);
  }
}

export function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then((registration) => {
      registration.unregister();
    });
  }
}