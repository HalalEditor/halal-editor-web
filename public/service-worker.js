/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */

self.addEventListener("install", event => {
  console.log("[Service Worker] Installing Service Worker ...", event);
});

self.addEventListener("activate", event => {
  console.log("[Service Worker] Activating Service Worker ....", event);
  return self.clients.claim();
});

self.addEventListener("notificationclick", event => {
  console.log("[notification clicked! ]" + event);
});

self.addEventListener("notificationclose", event => {
  console.log("Notification was closed", event);
});
