<?php 
    include_once "../funciones.php";
    $datos = new Respuesta;
    //$datos->datos = array();
    $noticiasSitio = parsearSitio("http://ifdmelo.cfe.edu.uy/");
    //print_r($noticiasSitio);
    //echo("<br><br><br><br><br>");
    usort($noticiasSitio,"ordenarNoticias");
    ///print_r($noticiasSitio);
    $datos->datos = $noticiasSitio;
    respuestaJSON($datos);
?>