
function enviarFormulari(){
    var nombre = document.getElementById("nombre").value;
    var correo = document.getElementById("correo").value;
    var numero = document.getElementById("telefono").value;
    var fecha = document.getElementById("fecha").value;

    var formData = new FormData();

    formData.append("nombre", nombre);
    formData.append("correo", correo);
    formData.append("telefono", numero);    
    formData.append("fecha", fecha);

    var solicitud = new XMLHttpRequest();
    // Crear una solicitud HTTP (POST) hacia el servidor
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://credu.000webhostapp.com/", true);

    // Configurar el encabezado de la solicitud (si es necesario)
    // xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    // Manejar la respuesta del servidor (opcional)
    xhr.onload = function() {
      if (xhr.status === 200) {
        // Éxito: la solicitud fue exitosa
        console.log("Lo logramos alv");
        console.log(xhr.responseText);
      } else {
        // Error: la solicitud falló
        console.error(xhr.statusText);
      }
    };

    // Enviar la solicitud con los datos del formulario
    xhr.send(formData);
}