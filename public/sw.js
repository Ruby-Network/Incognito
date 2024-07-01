importScripts('/epoxy/index.js');
importScripts('/transports/bareTransport.js');
importScripts('/uv/uv.bundle.js');
importScripts('/uv/uv.config.js');
importScripts(__uv$config.sw || '/uv/uv.sw.js');
const uv = new UVServiceWorker();
self.addEventListener('fetch', function (event) {
    if (event.request.url.startsWith(location.origin + __uv$config.prefix)) {
        event.respondWith(
            (async function () {
                return await uv.fetch(event);
            })()
        );
    } else {
        event.respondWith(
            (async function () {
                return await fetch(event.request);
            })()
        );
    }
});

assets = [
    '/',
    '/favicon.ico',
    '/manifest.json',
    '/transports/bareTransport.js',
    'sw.js',
    'uv.config.js',
    'logo.svg'
];
