import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 

const firebaseConfig = {
  apiKey: "AIzaSyCgToOiyOHJ5ttEZZewDnnNup_-DXgsolw",
  authDomain: "hydrophonicsfinal.firebaseapp.com",
  projectId: "hydrophonicsfinal",
  storageBucket: "hydrophonicsfinal.appspot.com",
  messagingSenderId: "203656176696",
  appId: "1:203656176696:web:e0e4a893b38851937332cd"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export { auth };
