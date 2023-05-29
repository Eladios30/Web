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
//Contador para el ingreso de cada formulario
var i = 1;
function guardar() {

  //Declaramos variables
  var nombre = document.getElementById("nombre").value
  var correo = document.getElementById("correo").value

  //Validamos si el correo sea veridico
  if (validaciones(correo) == true) {
    var numero = document.getElementById("telefono").value
    var fecha = document.getElementById("fecha").value
    var plataforma = document.getElementById("plataforma").value
    var red = document.getElementById("red").value
    var nacionalidad = document.getElementById("nacionalidad").value
    var comentarios = document.getElementById("comentarios").value

    //Introducimos valores a la base NO SQL
    db.ref("Counter/node").set({
      contador : i
    })

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
  } else {
    alert("Vueva a escribir un correo valido");
  }
}

//Funcion para validar correo
function validaciones(correo){
    var expresionRegular = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return expresionRegular.test(correo);
}