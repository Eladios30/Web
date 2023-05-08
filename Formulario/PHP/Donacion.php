<?php
    
    $nombre = $_POST["nombre"];
    $correo = $_POST["correo"];
    $numero = $_POST["telefono"];
    $fecha = $_POST["fecha"];
    $plataforma = $_POST["plataforma"];
    $red = $_POST["red"];
    $nacionalidad = $_POST["nacionalidad"];
    $comentario = $_POST["comentario"];

    if (!empty($nombre) || !empty($correo) || !empty($numero) || !empty($fecha)){
        $host = "localhost";
        $usuario = "root";
        $contra = "";
        $base = "estudiante";

        $conex = new mysqli($host, $usuario, $contra, $base);

        if (mysqli_connect_error()) {
            die("Error en la conexion('mysqli_connect_errno() .') mysqli_connect_error()");
        } else {
            $select = "SELECT numero_d from usuario where numero_d = ? limit 1 ";
            #Para que no me hackeen
            $insert = "INSERT into usuario (nombre_d, correo_d, numero_d, 
                fecha_d, plataforma_d, red_d, nacionalidad_d, comentario_d) 
            values (?, ?, ?, ?, ?, ?, ?, ?)";

            $identificador = $conex -> prepare($select);
            $identificador -> bind_param("i", $numero);
            $identificador -> execute();
            $identificador -> bind_result($numero);
            $identificador -> store_result();
            #Esto es una pila pa
            $pila = $identificador -> num_rows();

            if ($pila == 0) {
                $identificador -> close();
                $identificador = $conex -> prepare($insert);
                $identificador -> bind_param("ssisssss", $nombre, $correo, $numero, $fecha, 
                $plataforma, $red, $nacionalidad, $comentario);
                $identificador -> execute();
                echo "Registro con exito";
            }
            else {
                echo "Alguien ya tiene ese numero de telefono, ESTAFADOR!";
            }
            $identificador -> close();
            #Cerramos conexion
            $conex -> close();
        }
    } else {
        echo "Mamaste pa";
        die();
    }
?>