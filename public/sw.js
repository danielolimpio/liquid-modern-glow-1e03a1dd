// Service Worker mínimo — apenas para satisfazer o critério de
// installability do Chrome (precisa de um SW com handler de `fetch`).
// Não faz cache offline; passa todas as requisições para a rede.

self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", (event) => {
  // Network passthrough — sem cache, sem interceptação.
  event.respondWith(fetch(event.request));
});
