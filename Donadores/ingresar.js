//Contador
var i = 1;

//Funcion
function entrada() {

    //Variables seleccionadas
    var tipo = document.getElementById("select").value
    var tipo2 = document.getElementById("select2").value
    var tipo3 = document.getElementById("select3").value
    var tipo4 = document.getElementById("select4").value
    var tipo5 = document.getElementById("select5").value

    //Declaramos variables de descripciones
    var descripcion = document.getElementById("descripcion").value
    var descripcion2 = document.getElementById("descripcion2").value
    var descripcion3 = document.getElementById("descripcion3").value
    var descripcion4 = document.getElementById("descripcion4").value
    var descripcion5 = document.getElementById("descripcion5").value
  
      //Introducimos valores a la base NO SQL
      db.ref("Donadores/node").set({
        contador : i
      })
  
      //Agregamos directorio para los nodos
      db.ref("Entregas/" + i++).set({
        material : tipo,
        descripciones : descripcion,
        materiales2 : tipo2,
        descripciones2 : descripcion2,
        materiales3 : tipo3,
        descripciones3 : descripcion3,
        materiales4 : tipo4,
        descripciones4 : descripcion4,
        materiales5 : tipo5,
        descripciones5 : descripcion5
      })

      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      })
  }