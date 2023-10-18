<?php 

include_once "../../api/bdd.php";
include_once "../../api/funciones.php";

$bdd = new SQLite3("../../db/bdd.db");

$respuesta = new Respuesta;

$resultado = $bdd->query("select * from noticia");

$respuesta->datos = array();

while ($datos = $resultado->fetchArray(SQLITE3_ASSOC)) {
  $noticia = new Noticia;
  $noticia->titulo = $datos["titulo"];
  $noticia->fecha_pub = $datos["fecha_pub"];
  $noticia->fecha_cad = $datos["fecha_cad"];
  $noticia->fecha_ed = $datos["fecha_ed"];
  array_push($respuesta->datos, $noticia);
};
respuestaJSON($respuesta);

  $bdd->close();
 ?>