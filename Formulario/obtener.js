//Mensajes de exito
const mensajeExitoso = () => {
  Swal.fire(
    'Buen trabajo!',
    'Presiona el boton!',
    'Realizado'
  )
}

//Mensaje de error
const mensajeError = () => {
  Swal.fire({
    icon: 'Error!',
    title: 'Oops...',
    text: '¡Algo salió mal!',
    footer: '<a href="formulario.html">¿Por qué tengo este problema?</a>'
  })
}
var i = 0;
function guardar() {

  //Declaramos variables
  var nombre = document.getElementById("nombre").value
  var correo = document.getElementById("correo").value
  var numero = document.getElementById("telefono").value
  var fecha = document.getElementById("fecha").value
  var plataforma = document.getElementById("correo").value
  var red = document.getElementById("red").value
  var nacionalidad = document.getElementById("nacionalidad").value
  var comentarios = document.getElementById("comentarios").value

  //Agregamos directorio para los nodos
  db.ref("Information/" + i++).set({
    nombre: nombre,
    correo: correo,
    numero: numero,
    fecha: fecha,
    plataforma: plataforma,
    red: red,
    nacionalidad: nacionalidad,
    comentarios: comentarios
  })
}