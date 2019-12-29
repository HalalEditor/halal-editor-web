/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */

importScripts("https://www.gstatic.com/firebasejs/5.9.4/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/5.9.4/firebase-messaging.js");

firebase.initializeApp({
  messagingSenderId: "736089143857"
});

console.log("firebase messaging initializing...");

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(payload => {
  console.log("[firebase-messaging-sw.js] Received background message ", payload);

  const data = message["firebase-messaging-msg-data"].data;
  const title = message["firebase-messaging-msg-data"].notification.title;
  console.log("serviceWorker message:", data["options"]);
  const options = JSON.parse(data["options"]);
  console.log("serviceWorker message:", options);

  self.registration.showNotification(title, options);
});
