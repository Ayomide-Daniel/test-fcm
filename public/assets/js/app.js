import { app } from "../../firebase-messaging-sw.js";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

// request permission to send notifications
const messaging = getMessaging(app);

function requestPermission() {
  console.log("Requesting permission...");
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      console.log("Notification permission granted.");
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
    }
    else {
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
