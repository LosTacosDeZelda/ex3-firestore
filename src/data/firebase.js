import fbAppli from 'firebase/app';
import 'firebase/firestore';

/******* Ex#3 - Étape B ********************************/ 
// Ajouter votre objet de configuration Firebase
const firebaseConfig = {
  apiKey: "AIzaSyD1_Jeb59b56l4qZWVLrDmtIWFHLGB0vkU",
  authDomain: "panier-achats-raph.firebaseapp.com",
  databaseURL: "https://panier-achats-raph-default-rtdb.firebaseio.com",
  projectId: "panier-achats-raph",
  storageBucket: "panier-achats-raph.appspot.com",
  messagingSenderId: "523171178315",
  appId: "1:523171178315:web:f94cfa7669db120264eace",
  measurementId: "G-5MMX4LRSLN"

};

// Initialiser Firebase
if(!fbAppli.apps.length) {
  fbAppli.initializeApp(firebaseConfig);
}

// Initialiser Firestore
const bd = fbAppli.firestore();
/******* Ex#3 - Étape C ********************************/ 
// Exporter (par défaut) la référence à "bd" pour pouvoir l'utiliser dans le composant ListeProduits

export default bd;
