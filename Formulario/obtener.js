
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

	//Mensaje de exito
	Swal.fire({
		title: "¡Confirmación exitosa!",
		text: "Gracias por tu donación.",
		icon: "success",
		confirmButtonText: "Aceptar"
	  }).then((result) => {
		if (result.isConfirmed) {
		  window.location.href = "https://credu.000webhostapp.com/";
		}
	  });
  } else {

	//Mensaje de error
    Swal.fire({
		icon: 'Error!',
		title: 'Oops...',
		text: '¡Algo salió mal!'
	  })
  }
}

//Funcion para validar correo
function validaciones(correo){
    var expresionRegular = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return expresionRegular.test(correo);
}