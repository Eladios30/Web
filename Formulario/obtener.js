//Mensajes de exito
const mensajeExitoso = () => {
  Swal.fire(
    'Buen trabajo!',
    'You clicked the button!',
    'Realizado'
  )
}

//Mensaje de error
const mensajeError = () => {
  Swal.fire({
    icon: 'Error!',
    title: 'Oops...',
    text: 'Something went wrong!',
    footer: '<a href="">Why do I have this issue?</a>'
  })
}
/*
//Funcion para guardar los datos y enviarlo al servidor de Firebase
function guardar() {
  db.collection("usuarios").add({
    nombre: document.getElementById("nombre").value,
    correo: document.getElementById("correo").value,
    numero: document.getElementById("telefono").value,
    fecha: document.getElementById("fecha").value,
    plataforma: document.getElementById("correo").value,
    red: document.getElementById("red_social").value,
    nacionalidad: document.getElementById("nacional").value,
    comentarios: document.getElementById("comentarios").value,
  })
    .then((docRef) => {
      mensajeExitoso();
    })
    .catch((error) => {
      mensajeError();
    });
}*/
//Metiendo los datos a una tabla NO SQL
var firebaseRef = firebase.database().ref("donadores/1");
const db = getDatabase();

function insertando(){
  set(ref(db, "Donadores/"+ ))
}


//Seleccionando el id y agregando evento
document.querySelector("#send").addEventListener("click", () => {
  //Declarando variables
  const nombre = document.getElementById("nombre").value;
  const correo = document.getElementById("correo").value;
  const numero = document.getElementById("telefono").value;
  const fecha = document.getElementById("fecha").value;
  const plataforma = document.getElementById("correo").value;
  const red = document.getElementById("red_social").value;
  const nacionalidad = document.getElementById("nacional").value;
  const comentarios = document.getElementById("comentarios").value;

  //Pusheando las variables
  firebaseRef.push(nombre);
  firebaseRef.push(correo);
  firebaseRef.push(numero);
  firebaseRef.push(fecha);
  firebaseRef.push(plataforma);
  firebaseRef.push(red);
  firebaseRef.push(nacionalidad);
  firebaseRef.push(comentarios);
});