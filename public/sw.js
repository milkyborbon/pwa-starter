importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/6.5.4/workbox-sw.js'
);

// This is your Service Worker, you can put any of your custom Service Worker
// code in this file, above the `precacheAndRoute` line.

self.addEventListener('push',, function(e) {
    var options = {
        body: 'This notification was generated from a push!',
        icon: 'assets/icons/512x512.png',
        vibrate: [100, 50, 100],
        data: {
          dateOfArrival: Date.now(),
          primaryKey: '2'
        },
        actions: [
          {action: 'explore', title: 'Explore this new world',
            icon: 'assets/images/checkmark.png'},
          {action: 'close', title: 'Close',
            icon: 'assets/images/xmark.png'},
        ]
      };
      e.waitUntil(
        self.registration.showNotification('Hello world!', options)
      );
});

workbox.precaching.precacheAndRoute(self.__WB_MANIFEST || []);