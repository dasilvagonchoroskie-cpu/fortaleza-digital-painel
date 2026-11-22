// Service worker do Painel Fortaleza Digital: só torna o app instalável.
// Não guarda nada (painel sempre da rede) para nunca ficar preso em versão antiga.
self.addEventListener("install", function () { self.skipWaiting(); });
self.addEventListener("activate", function (e) {
  e.waitUntil(caches.keys().then(function (n) { return Promise.all(n.map(function (k) { return caches.delete(k); })); }).then(function () { return self.clients.claim(); }));
});
self.addEventListener("fetch", function () {});
