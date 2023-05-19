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
}