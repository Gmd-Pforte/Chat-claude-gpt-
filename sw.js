/* Räumt den Offline-Speicher der früheren App (PS AI CONNECT) auf,
 * damit Handys, die die alte Seite gespeichert haben, sofort das PS Cartoon Studio sehen. */
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => {
  e.waitUntil((async () => {
    for (const k of await caches.keys()) await caches.delete(k);
    await self.registration.unregister();
    for (const c of await self.clients.matchAll({ type: 'window' })) c.navigate(c.url);
  })());
});
