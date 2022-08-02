// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVCTf8D-2N3zK8qCt2daM0AGe69v-REbQ",
  authDomain: "daeac-560d5.firebaseapp.com",
  projectId: "daeac-560d5",
  storageBucket: "daeac-560d5.appspot.com",
  messagingSenderId: "542870779802",
  appId: "1:542870779802:web:7608e22b7a8dee7efe2c23",
  measurementId: "G-0CVJM7LR99"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);