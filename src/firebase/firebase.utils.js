import { initializeApp } from 'firebase/app';
import { getFirestore} from 'firebase/firestore/lite';
import { getAuth } from 'firebase/auth';
// import { getAuth } from 'https://www.gstatic.com/firebasejs/9.11.0/firebase-SERVICE.js'

// https://firebase.google.com/docs/web/setup#available-libraries



const  firebaseConfig = {
    apiKey: "AIzaSyDzHljpUKWk9ab8I6dndT-JRmAH8gXXRT4",
  authDomain: "ecommerce-clothestore.firebaseapp.com",
  projectId: "ecommerce-clothestore",
  storageBucket: "ecommerce-clothestore.appspot.com",
  messagingSenderId: "946673063082",
  appId: "1:946673063082:web:fc26f31151215b00b9ecd3",
  measurementId: "G-FWDXS18BS6"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app);



