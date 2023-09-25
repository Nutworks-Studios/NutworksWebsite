import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";

const firebaseConfig = {

  apiKey: "AIzaSyD6uxNDbuKQWMzfmQbPbydqp7e4C2PlqOE",

  authDomain: "nutworksapi.firebaseapp.com",

  projectId: "nutworksapi",

  storageBucket: "nutworksapi.appspot.com",

  messagingSenderId: "431398626619",

  appId: "1:431398626619:web:4ffac896d810362a66431e"

};

const app = initializeApp(firebaseConfig);

module.exports = { app };