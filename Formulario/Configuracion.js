//Obteniendo datos de la configuracion de Firebase
// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
firebase.initializeApp({
  apiKey: "AIzaSyCqNvZMTLyG4U2UmpVfvP3OChtJVgxM0mU",
  authDomain: "educarte-3bc4b.firebaseapp.com",
  databaseURL: "https://educarte-3bc4b-default-rtdb.firebaseio.com",
  projectId: "educarte-3bc4b",
  storageBucket: "educarte-3bc4b.appspot.com",
  messagingSenderId: "175450238774",
  appId: "1:175450238774:web:a5a261932cf3d07ade8d97"
});

// Initialize Firebase
var db = firebase.database();


/*
  var messagesRef = firebase.database().ref("Messages");
//Funcion para guardar los datos y enviarlo al servidor de Firebase
function guardar() {
    var nombre = document.getElementById("nombre").value
    var correo = document.getElementById("correo").value
    var numero = document.getElementById("telefono").value
    var fecha = document.getElementById("fecha").value
    var plataforma = document.getElementById("correo").value
    var red = document.getElementById("red_social").value
    var nacionalidad = document.getElementById("nacional").value
    var comentarios = document.getElementById("comentarios").value

    database.ref("Information/" + nombre).set({
      nombre : nombre,
      correo : correo,
      numero : numero,
      fecha : fecha,
      plataforma : plataforma,
      red : red,
      nacionalidad : nacionalidad,
      comentarios : comentarios
    })
    alert("guardado");
}*/