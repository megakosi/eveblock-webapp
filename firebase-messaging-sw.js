importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing in the messagingSenderId
firebase.initializeApp({
                         apiKey: "AIzaSyAxUXPKJwF9n8LLZT_1kWbYfIDOOVthOoA",
                         authDomain: "eveblock-8c0f3.firebaseapp.com",
                         projectId: "eveblock-8c0f3",
                         storageBucket: "eveblock-8c0f3.appspot.com",
                         messagingSenderId: "1059842316232",
                         appId: "1:1059842316232:web:22bb0248d29616567212fd",
                         measurementId: "G-TZEHK20EBT"
                       });

// Retrieve an instance of Firebase Messaging
const messaging = firebase.messaging();