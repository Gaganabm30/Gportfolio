import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB96Zcb9OJ2bBT5nftK1gGFS2gC6W2Y7CU",
    authDomain: "gportfolio-9c000.firebaseapp.com",
    projectId: "gportfolio-9c000",
    storageBucket: "gportfolio-9c000.firebasestorage.app",
    messagingSenderId: "1028077351704",
    appId: "1:1028077351704:web:0cd3582b7aca3ea059246d",
    measurementId: "G-Y5L6DQVJ52"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
