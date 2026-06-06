import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAsu5ECf3EnXxGNCOV-0mSJcrdBtR37oO8",
  authDomain: "shift-chilicode.firebaseapp.com",
  projectId: "shift-chilicode",
  storageBucket: "shift-chilicode.firebasestorage.app",
  messagingSenderId: "926596068930",
  appId: "1:926596068930:web:d21d5d74a9449ab6995fdb",
  measurementId: "G-LV4S3FGFEY"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
