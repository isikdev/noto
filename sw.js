// sw.js
self.addEventListener('install', e => {
    e.waitUntil(
        // после установки service worker
        // открыть новый кэш
        caches.open('my-pwa-cache').then(cache => {
            // добавляем все URL ресурсов, которые хотим закэшировать
            return cache.addAll([
                '/',
                './index.html',
                './img/add.png',
                './css/main.css',
                './js/jquery-3.6.1.min.js',
                './js/scripts.js',
            ]);
        })
    );
});
window.addEventListener('beforeinstallprompt', (event) => {
    // Запрет показа информационной мини-панели на мобильных устройствах.
    event.preventDefault();
    console.log('👍', 'beforeinstallprompt', event);
    // Убираем событие, чтобы его можно было активировать позже.
    window.deferredPrompt = event;
    // Убираем класс «hidden» из контейнера кнопки установки.
    divInstall.classList.toggle('hidden', false);
});