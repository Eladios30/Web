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
        $base = "credu";

        $conex = new mysqli($host, $usuario, $contra, $base);

        if (mysqli_connect_error()) {
            die("Error en la conexion('mysqli_connect_errno() .') mysqli_connect_error()");
        } else {
            $select = "SELECT numero_w from donaciones_web where numero_w = ? limit 1";
            #Para que no me hackeen
            $insert = "INSERT into donaciones_web (nombre_w, correo_w, numero_w, 
                fecha_w, plataforma_w, red_w, nacionalidad_w, comentario_w) 
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