const CACHE_NAME = 'kalkulator-az-v1';
const urlsToCache = [
'./',
'./index.html',
'./manifest.json',
'./icon.png'
];

self.addEventListener('install', event => {
event.waitUntil(
caches.open(CACHE_NAME)
.then(cache => {
return cache.addAll(urlsToCache);
})
);
});

self.addEventListener('fetch', event => {
event.respondWith(
caches.match(event.request)
.then(response => {
// Jika ada di memori offline, gunakan itu. Jika tidak, ambil dari internet.
return response || fetch(event.request);
})
);
});