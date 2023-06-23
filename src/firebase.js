
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyASZAW5IqRvPlWUg7GN4JAawLWwVE0JynI",
  authDomain: "creepi-n.firebaseapp.com",
  projectId: "creepi-n",
  storageBucket: "creepi-n.appspot.com",
  messagingSenderId: "976389293535",
  appId: "1:976389293535:web:860d932693f77bcd75306a"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();