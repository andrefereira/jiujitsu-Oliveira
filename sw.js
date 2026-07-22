// Service worker do app shell. Só cuida de arquivos estáticos (HTML/CSS/JS/
// ícones) para permitir instalar como PWA e abrir offline; dados do Firestore
// continuam sempre buscados direto da rede (nunca são cacheados aqui).
const CACHE_VERSION = 'v1';
const CACHE_NAME = `academia-shell-${CACHE_VERSION}`;

const APP_SHELL = [
  './',
  'index.html',
  'aluno.html',
  'professor.html',
  'seed-skills.html',
  'assets/style.css',
  'assets/config.js',
  'assets/manifest.webmanifest',
  'assets/icons/icon-192.png',
  'assets/icons/icon-512.png',
  'assets/icons/icon-512-maskable.png',
  'favicon.ico'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((names) => Promise.all(
        names.filter((name) => name !== CACHE_NAME).map((name) => caches.delete(name))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;

  // Só cuida de GET no mesmo domínio (o app shell). Chamadas ao Firebase
  // (auth, Firestore) são de outra origem e vão direto pra rede, sem passar
  // por aqui, senão o app ficaria mostrando dados desatualizados/em cache.
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;

  event.respondWith(
    caches.match(req).then((cached) => {
      const network = fetch(req)
        .then((res) => {
          if (res && res.ok) {
            const clone = res.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(req, clone));
          }
          return res;
        })
        .catch(() => cached);
      return cached || network;
    })
  );
});
