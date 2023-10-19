// Import the functions you need from the SDKs you need
import {
    initializeApp
} from "firebase/app";
import {
    getAuth
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCLvzfYv6aKlUIMU3KPJ3U8AAb2C-lKXCw",
    authDomain: "brand-shop-61d84.firebaseapp.com",
    projectId: "brand-shop-61d84",
    storageBucket: "brand-shop-61d84.appspot.com",
    messagingSenderId: "826053370252",
    appId: "1:826053370252:web:79ee8635fb2d69ee0336a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);