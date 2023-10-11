<?php 
echo("algo");
include_once "../../bdd.php";
include_once "../../funciones.php";

$bdd = new SQLite3("bdd.db");
echo ($bdd->lastErrorCode());
//$bdd->conectar("../../db/bdd.db");

$respuesta = new Respuesta;
print_r($respuesta);
$resultado = $bdd->query("select * from noticia");


while ($datos = $resultado->fetchArray()) {
    var_dump($datos);
}


  $bdd->close();
 ?>