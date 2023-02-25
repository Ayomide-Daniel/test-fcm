// push notifications using firebase cloud messaging
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

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

function requestPermission() {
  console.log("Requesting permission...");
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      console.log("Notification permission granted.");
      if ("serviceWorker" in navigator) {
        navigator.serviceWorker
          .register("../../firebase-messaging-sw.js")
          .then(function (registration) {
            console.log(
              "Registration successful, scope is:",
              registration.scope
            );
            // get token in the form of promise
            getToken(messaging, {
              vapidKey:
                "BMHgsxsPzk0IZNS53nnzG9TlhrZ5aH7x63aW-eNom31FPTNmfAeMGIYUAXDnoWWqK5AXwk9ZEMNnkF5iZU0aPf4",
            })
              .then((currentToken) => {
                console.log("currentToken", currentToken);
                if (currentToken) {
                  // send token to server
                }
              })
              .catch((err) => {
                console.log("An error occurred while retrieving token. ", err);
              });
          })
          .catch(function (err) {
            console.log("Service worker registration failed, error:", err);
          });
      }
    } else {
      console.log("Unable to get permission to notify.");
    }
  });
}

// Handle incoming messages. Called when:
// - a message is received while the app has focus
// - the user clicks on an app notification created by a service worker
//   `messaging.onBackgroundMessage` handler.

onMessage(messaging, (payload) => {
  console.log("Message received. ", payload);
  // ...
});

requestPermission();

// if ("serviceWorker" in navigator) {
//   navigator.serviceWorker
//     .register("./firebase-messaging-sw.js")
//     .then(function (registration) {
//       console.log("Registration successful, scope is:", registration.scope);
//     })
//     .catch(function (err) {
//       console.log("Service worker registration failed, error:", err);
//     });
// }
