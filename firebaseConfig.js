//import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCPvDWvvQyFB7RlNKv9yL7cnS_XMWsX_CM",
  authDomain: "projeto-mobile-thiago.firebaseapp.com",
  projectId: "projeto-mobile-thiago",
  storageBucket: "projeto-mobile-thiago.firebasestorage.app",
  messagingSenderId: "171681476416",
  appId: "1:171681476416:web:597940fe9a526f1a92d4a5",
  measurementId: "G-GX1MRCWT1T"
};

const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

const auth = getAuth(app);

export { auth };

