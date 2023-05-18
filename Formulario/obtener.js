
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
    solicitud.open("POST", )
}