//Obteniendo datos de la configuracion de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCqNvZMTLyG4U2UmpVfvP3OChtJVgxM0mU",
    authDomain: "educarte-3bc4b.firebaseapp.com",
    projectId: "educarte-3bc4b",
    storageBucket: "educarte-3bc4b.appspot.com",
    messagingSenderId: "175450238774",
    appId: "1:175450238774:web:a5a261932cf3d07ade8d97"
};

//Inicializando Firebase
firebase.initializeApp(firebaseConfig);

//Inicializando Cloud Firestore y obteniendo una referencia del servicio
//var db = firebase.firestore();
