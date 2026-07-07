self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (e) => {
  // משאיר את זרימת המידע חלקה מול ה-CRM וה-SAP בלייב
  e.respondWith(fetch(e.request));
});
