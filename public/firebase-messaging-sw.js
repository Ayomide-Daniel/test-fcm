// Scripts for firebase and firebase messaging
importScripts(
  "https://www.gstatic.com/firebasejs/9.17.1/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.17.1/firebase-messaging-compat.js"
);
const firebaseConfig = {
  apiKey: "AIzaSyDac77e7RyXxZ4hFYqsoH9N41krF1U7fTE",
  authDomain: "obtainly-local.firebaseapp.com",
  projectId: "obtainly-local",
  storageBucket: "obtainly-local.appspot.com",
  messagingSenderId: "385414976213",
  appId: "1:385414976213:web:909bdbe899c84cbc55885c",
};

const app = initializeApp(firebaseConfig);

// request permission to send notifications
const messaging = getMessaging(app);

messaging.onBackgroundMessage(function (payload) {
  console.log("Received background message ", payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("./firebase-messaging-sw.js")
    .then(function (registration) {
      console.log("Registration successful, scope is:", registration.scope);
    })
    .catch(function (err) {
      console.log("Service worker registration failed, error:", err);
    });
}
