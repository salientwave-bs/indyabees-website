import { initializeApp } from "firebase/app";
import {
  initializeFirestore,
  persistentLocalCache,
  persistentMultipleTabManager,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD6ugV2vjKrwU8clZQqDtEYWHmrRabQe7U",
  authDomain: "indyabees-f81e7.firebaseapp.com",
  projectId: "indyabees-f81e7",
  storageBucket: "indyabees-f81e7.appspot.com",   // <-- fix this
  messagingSenderId: "73782971705",
  appId: "1:73782971705:web:3f8c7b26702f9c8e4f2ce8",
  measurementId: "G-CW0E6DWQL4",
};

const app = initializeApp(firebaseConfig);

export const db = initializeFirestore(app, {
  experimentalAutoDetectLongPolling: true,  // handles corporate networks/proxies
  ignoreUndefinedProperties: true,          // avoids rejects on undefined keys
  localCache: persistentLocalCache({ tabManager: persistentMultipleTabManager() }),
});
