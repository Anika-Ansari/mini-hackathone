
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-analytics.js";
import { getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDc5OA0oSEUA2GF_AXAoEtFl60rdcNxKD8",
  authDomain: "my-project-b3861.firebaseapp.com",
  projectId: "my-project-b3861",
  storageBucket: "my-project-b3861.firebasestorage.app",
  messagingSenderId: "850356268092",
  appId: "1:850356268092:web:f781b91673d24fe4416739",
  measurementId: "G-NKQ3XML1GZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

const btn = document.getElementById("btn")
if (btn)
  btn.addEventListener("click", function () {

    const email = document.getElementById("email");
    const password = document.getElementById("password")

    createUserWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        alert("sign up successfully", user)
        // ...
        email.value = "";
        password.value = "";
      })
      .catch((error) => {
        const errorCode = error.code;
        alert("errorCode", errorCode)
        const errorMessage = error.message;
        alert("errorMessage", errorMessage)
        // ..
      });
  })

const button = document.getElementById("login")
if (button)
  button.addEventListener("click", function () {
    const loginEmail = document.getElementById("loginEmail");
    const loginPassword = document.getElementById("loginPassword")

    signInWithEmailAndPassword(auth, loginEmail.value, loginPassword.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        alert("login successfully", user)
        // ...
        loginEmail.value = "";
        loginPassword.value = "";

        window.location.href ="index.html";
      })
      .catch((error) => {
        const errorCode = error.code;
        alert("errorCode", errorCode)
        const errorMessage = error.message;
        alert("errorMessage", errorMessage)
      });

  })

  