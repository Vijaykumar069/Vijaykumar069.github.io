    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
    import {
      getAuth,
      signInWithPopup,
      GoogleAuthProvider,
      signInWithPhoneNumber,
      GithubAuthProvider,
      FacebookAuthProvider,
    } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";

    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: "AIzaSyB_g-wZH4s-xhUN0mISwai-6MQ7o5UWT40",
      authDomain: "login-page-b3d45.firebaseapp.com",
      projectId: "login-page-b3d45",
      storageBucket: "login-page-b3d45.appspot.com",
      messagingSenderId: "710345775437",
      appId: "1:710345775437:web:d619e195e334d68e91ff04",
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider(app);
    const phoneNumber = getPhoneNumberFromUserInput();
    const appVerifier = window.recaptchaVerifier;