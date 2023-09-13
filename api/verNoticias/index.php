<?php 
    include_once "../funciones.php";
    $datos = new Respuesta;
    $datos->datos = parsearSitio("http://ifdmelo.cfe.edu.uy/");
    respuestaJSON($datos);
?>