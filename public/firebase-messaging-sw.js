/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/firebase-messaging-sw.js":
/*!**************************************!*\
  !*** ./src/firebase-messaging-sw.js ***!
  \**************************************/
/***/ (() => {

eval("// push notifications using firebase cloud messaging\nimportScripts(\n  \"https://www.gstatic.com/firebasejs/9.9.1/firebase-app-compat.js\"\n);\nimportScripts(\n  \"https://www.gstatic.com/firebasejs/9.9.1/firebase-messaging-compat.js\"\n);\nconst firebaseConfig = {\n  apiKey: \"AIzaSyDac77e7RyXxZ4hFYqsoH9N41krF1U7fTE\",\n  authDomain: \"obtainly-local.firebaseapp.com\",\n  projectId: \"obtainly-local\",\n  storageBucket: \"obtainly-local.appspot.com\",\n  messagingSenderId: \"385414976213\",\n  appId: \"1:385414976213:web:909bdbe899c84cbc55885c\",\n};\n\nconst app = firebase.initializeApp(firebaseConfig);\n\n// request permission to send notifications\nconst messaging = firebase.getMessaging(app);\n\nmessaging.onBackgroundMessage(function (payload) {\n  console.log(\"Received background message \", payload);\n\n  const notificationTitle = payload.notification.title;\n  const notificationOptions = {\n    body: payload.notification.body,\n  };\n\n  self.registration.showNotification(notificationTitle, notificationOptions);\n});\n\n// if (\"serviceWorker\" in navigator) {\n//   navigator.serviceWorker\n//     .register(\"../firebase-messaging-sw.js\")\n//     .then(function (registration) {\n//       console.log(\"Registration successful, scope is:\", registration.scope);\n//     })\n//     .catch(function (err) {\n//       console.log(\"Service worker registration failed, error:\", err);\n//     });\n// }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZmlyZWJhc2UtbWVzc2FnaW5nLXN3LmpzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLFFBQVE7QUFDUiIsInNvdXJjZXMiOlsid2VicGFjazovL3B1c2gtbm90aWZpY2F0aW9ucy8uL3NyYy9maXJlYmFzZS1tZXNzYWdpbmctc3cuanM/ZTU5OSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBwdXNoIG5vdGlmaWNhdGlvbnMgdXNpbmcgZmlyZWJhc2UgY2xvdWQgbWVzc2FnaW5nXG5pbXBvcnRTY3JpcHRzKFxuICBcImh0dHBzOi8vd3d3LmdzdGF0aWMuY29tL2ZpcmViYXNlanMvOS45LjEvZmlyZWJhc2UtYXBwLWNvbXBhdC5qc1wiXG4pO1xuaW1wb3J0U2NyaXB0cyhcbiAgXCJodHRwczovL3d3dy5nc3RhdGljLmNvbS9maXJlYmFzZWpzLzkuOS4xL2ZpcmViYXNlLW1lc3NhZ2luZy1jb21wYXQuanNcIlxuKTtcbmNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xuICBhcGlLZXk6IFwiQUl6YVN5RGFjNzdlN1J5WHhaNGhGWXFzb0g5TjQxa3JGMVU3ZlRFXCIsXG4gIGF1dGhEb21haW46IFwib2J0YWlubHktbG9jYWwuZmlyZWJhc2VhcHAuY29tXCIsXG4gIHByb2plY3RJZDogXCJvYnRhaW5seS1sb2NhbFwiLFxuICBzdG9yYWdlQnVja2V0OiBcIm9idGFpbmx5LWxvY2FsLmFwcHNwb3QuY29tXCIsXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjM4NTQxNDk3NjIxM1wiLFxuICBhcHBJZDogXCIxOjM4NTQxNDk3NjIxMzp3ZWI6OTA5YmRiZTg5OWM4NGNiYzU1ODg1Y1wiLFxufTtcblxuY29uc3QgYXBwID0gZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XG5cbi8vIHJlcXVlc3QgcGVybWlzc2lvbiB0byBzZW5kIG5vdGlmaWNhdGlvbnNcbmNvbnN0IG1lc3NhZ2luZyA9IGZpcmViYXNlLmdldE1lc3NhZ2luZyhhcHApO1xuXG5tZXNzYWdpbmcub25CYWNrZ3JvdW5kTWVzc2FnZShmdW5jdGlvbiAocGF5bG9hZCkge1xuICBjb25zb2xlLmxvZyhcIlJlY2VpdmVkIGJhY2tncm91bmQgbWVzc2FnZSBcIiwgcGF5bG9hZCk7XG5cbiAgY29uc3Qgbm90aWZpY2F0aW9uVGl0bGUgPSBwYXlsb2FkLm5vdGlmaWNhdGlvbi50aXRsZTtcbiAgY29uc3Qgbm90aWZpY2F0aW9uT3B0aW9ucyA9IHtcbiAgICBib2R5OiBwYXlsb2FkLm5vdGlmaWNhdGlvbi5ib2R5LFxuICB9O1xuXG4gIHNlbGYucmVnaXN0cmF0aW9uLnNob3dOb3RpZmljYXRpb24obm90aWZpY2F0aW9uVGl0bGUsIG5vdGlmaWNhdGlvbk9wdGlvbnMpO1xufSk7XG5cbi8vIGlmIChcInNlcnZpY2VXb3JrZXJcIiBpbiBuYXZpZ2F0b3IpIHtcbi8vICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXJcbi8vICAgICAucmVnaXN0ZXIoXCIuLi9maXJlYmFzZS1tZXNzYWdpbmctc3cuanNcIilcbi8vICAgICAudGhlbihmdW5jdGlvbiAocmVnaXN0cmF0aW9uKSB7XG4vLyAgICAgICBjb25zb2xlLmxvZyhcIlJlZ2lzdHJhdGlvbiBzdWNjZXNzZnVsLCBzY29wZSBpczpcIiwgcmVnaXN0cmF0aW9uLnNjb3BlKTtcbi8vICAgICB9KVxuLy8gICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4vLyAgICAgICBjb25zb2xlLmxvZyhcIlNlcnZpY2Ugd29ya2VyIHJlZ2lzdHJhdGlvbiBmYWlsZWQsIGVycm9yOlwiLCBlcnIpO1xuLy8gICAgIH0pO1xuLy8gfVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/firebase-messaging-sw.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/firebase-messaging-sw.js"]();
/******/ 	
/******/ })()
;