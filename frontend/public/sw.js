// const CACHE_NAME = 'emit-app-cache-v1';

// console.log('Service Worker: Загружен');

// self.addEventListener('install', (event) => {
//   console.log('Service Worker: Установка');
//   self.skipWaiting();
// });

// self.addEventListener('activate', (event) => {
//   console.log('Service Worker: Активирован');
//   event.waitUntil(self.clients.claim());
// });

// self.addEventListener('fetch', (event) => {
//   const url = new URL(event.request.url);
  
//   if (event.request.method !== 'GET') {
//     return;
//   }
  
//   if (url.protocol !== 'http:' && url.protocol !== 'https:') {
//     return;
//   }
  
//   if (url.pathname === '/' || url.pathname === '/index.html') {
//     return;
//   }
  
//   event.respondWith(
//     caches.match(event.request)
//       .then((response) => {
//         if (response) {
//           console.log('Из кэша:', url.pathname);
//           return response;
//         }
//         console.log('Из сети:', url.pathname);
//         return fetch(event.request)
//           .then((networkResponse) => {
//             if (networkResponse.status === 200 && 
//                 (event.request.destination === 'image' || 
//                  url.pathname.match(/\.(css|js|png|jpg|jpeg|svg|gif|webp|ico|woff|woff2)$/))) {
              
//               const responseToCache = networkResponse.clone();
//               caches.open(CACHE_NAME)
//                 .then((cache) => {
//                   cache.put(event.request, responseToCache);
//                   console.log('Сохранено в кэш:', url.pathname);
//                 })
//                 .catch(err => {
//                   console.log('Не удалось сохранить в кэш:', url.pathname);
//                 });
//             }
            
//             return networkResponse;
//           })
//           .catch(error => {
//             console.log('Ошибка загрузки:', url.pathname, error);
//             if (event.request.destination === 'image') {
//               return new Response('', { 
//                 status: 404, 
//                 statusText: 'Image not available offline' 
//               });
//             }
//             throw error;
//           });
//       })
//   );
// });

// self.addEventListener('message', async (event) => {
//   if (event.data && event.data.type === 'CACHE_CURRENT_PAGE') {
//     const { url } = event.data;
//     console.log('Принудительное кэширование страницы:', url);
    
//     try {
//       const cache = await caches.open(CACHE_NAME);
//       const response = await fetch(url);
//       if (response.status === 200) {
//         await cache.put(url, response);
//         console.log('Страница закэширована:', new URL(url).pathname);
//       }
//     } catch (error) {
//       console.log('Ошибка принудительного кэширования:', error);
//     }
//   }
// });
