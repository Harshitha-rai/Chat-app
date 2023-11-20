import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC39UqIjz5Cpo1nQKLJVdDeo9HKXiibSO0",
  authDomain: "chat-fa47b.firebaseapp.com",
  projectId: "chat-fa47b",
  storageBucket: "chat-fa47b.appspot.com",
  messagingSenderId: "77211422973",
  appId: "1:77211422973:web:842d0d32e3cf73b4326e94"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();