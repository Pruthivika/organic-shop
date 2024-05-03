import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCl9wWDmpL_dWF-SsOmiTvFldV8y6bN62w",
  authDomain: "organic-shop-d72e1.firebaseapp.com",
  projectId: "organic-shop-d72e1",
  storageBucket: "organic-shop-d72e1.appspot.com",
  messagingSenderId: "403269999271",
  appId: "1:403269999271:web:8409606162883313725982",
  measurementId: "G-4VQEE812Y5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);