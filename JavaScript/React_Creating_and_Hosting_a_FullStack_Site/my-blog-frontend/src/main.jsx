import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

/* --- Firebase block of code --- */
// We import the functions we need from the SDKs we need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBo2MBzEAtMVNt5OEaafUzTdnMEIjbOXuQ",
    authDomain: "full-stack-react-tutorial-blog.firebaseapp.com",
    projectId: "full-stack-react-tutorial-blog",
    storageBucket: "full-stack-react-tutorial-blog.firebasestorage.app",
    messagingSenderId: "740464169308",
    appId: "1:740464169308:web:c7991afd268f343653b199",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
/* --- END of Firebase block of code --- */

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <App />
    </StrictMode>
);
