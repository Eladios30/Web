//Obteniendo datos de la configuracion de Firebase
firebase.initializeApp({
  apiKey: "AIzaSyCqNvZMTLyG4U2UmpVfvP3OChtJVgxM0mU",
  authDomain: "educarte-3bc4b.firebaseapp.com",
  databaseURL: "https://educarte-3bc4b-default-rtdb.firebaseio.com",
  projectId: "educarte-3bc4b",
  storageBucket: "educarte-3bc4b.appspot.com",
  messagingSenderId: "175450238774",
  appId: "1:175450238774:web:a5a261932cf3d07ade8d97"
});

// Inicializo Firebase de la base en tiempo real
var db = firebase.database();