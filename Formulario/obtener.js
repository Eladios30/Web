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

function guardar(){

    var nombre = document.getElementById("nombre").value
    var correo = document.getElementById("correo").value
    var numero = document.getElementById("telefono").value
    var fecha = document.getElementById("fecha").value
    var plataforma = document.getElementById("correo").value
    var red = document.getElementById("red").value
    var nacionalidad = document.getElementById("nacionalidad").value
    var comentarios = document.getElementById("comentarios").value

    db.ref("Information/" + nombre).set({
      nombre : nombre,
      correo : correo,
      numero : numero,
      fecha : fecha,
      plataforma : plataforma,
      red : red,
      nacionalidad : nacionalidad,
      comentarios : comentarios
    })
/*
  db.collection("usuarios").add({
    nombre : document.getElementById("nombre").value,
    correo : document.getElementById("correo").value,
    numero : document.getElementById("telefono").value,
    fecha : document.getElementById("fecha").value,
    plataforma : document.getElementById("plataforma").value,
    red : document.getElementById("red").value,
    nacionalidad : document.getElementById("nacionalidad").value,
    comentarios : document.getElementById("comentarios").value
})*/
.then((docRef) => {
    mensajeExitoso();
})
.catch((error) => {
    mensajeError();
});
}