
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyBPBdK6Ft6utncb9AtgdToJ0ReYxFVuhjI",
  authDomain: "my-e-commerce-a62dc.firebaseapp.com",
  projectId: "my-e-commerce-a62dc",
  storageBucket: "my-e-commerce-a62dc.appspot.com",
  messagingSenderId: "388394332520",
  appId: "1:388394332520:web:67c5d6d0079e39f11c66dd"
};

const app = initializeApp(firebaseConfig);

const getFirestoreApp = ()=>{
    // console.log('Iniciando firestore')
    return app
}
export default getFirestoreApp