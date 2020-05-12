self.addEventListener('install',
  event => (
    console.log('pwa install', event),
    event.waitUntil(
      caches.open('sw-cache')
      .then(cache => cache.add('index.html'))
)))
 
self.addEventListener('fetch',
  event => (
    console.log('pwa fetch', event),
    event.respondWith(
      caches.match(event.request)
      .then(resp => resp || fetch(event.request))
)))

