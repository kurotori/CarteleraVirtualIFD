<?php 
    //phpinfo();

    include_once "bdd.php";
    include_once "funciones.php";

    $bdd = new BaseDeDatos;
    $bdd->conectar("../db/bdd.db");

    $respuesta = new Respuesta;
    $respuesta->datos = $bdd->mensaje;
    $respuesta->estado = $bdd->estado;
    //print_r($bdd->mensaje);
    respuestaJSON($respuesta);

/* 
    $algo="asdfasdf";
    $bdd = new SQLite3("db/bdd.db");
    $bdd->exec("insert into pruebas(nombre) values ('cosa')");
    
    
    $bdd->close();


    print_r($bdd) */;





 ?>