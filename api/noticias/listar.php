<?php 

include_once "../../api/bdd.php";
include_once "../../api/funciones.php";

$bdd = new SQLite3("../../db/bdd.db");

$respuesta = new Respuesta;

$resultado = $bdd->query(
  "SELECT 
  noticia.titulo as 'titulo', noticia.contenido as 'contenido',
  strftime('%d-%m-%Y',noticia.fecha_pub) as 'fecha_pub', strftime('%d-%m-%Y',noticia.fecha_cad) as 'fecha_cad',
  strftime('%d-%m-%Y',noticia.fecha_ed) as 'fecha_ed', noticia.id as 'ID',
  tipo.nombre as 'tipo'
  FROM
  noticia INNER JOIN tiene INNER JOIN tipo
  where noticia.ID = tiene.noticia_id AND tipo.id = tiene.tipo_id
  and date()<=date(noticia.fecha_cad);"
  );

$respuesta->datos = array();

while ($datos = $resultado->fetchArray(SQLITE3_ASSOC)) {
  $noticia = new Noticia;
  $noticia->titulo = $datos["titulo"];
  $noticia->contenido = $datos["contenido"];
  $noticia->fecha_pub = $datos["fecha_pub"];
  $noticia->fecha_cad = $datos["fecha_cad"];
  $noticia->fecha_ed = $datos["fecha_ed"];
  $noticia->tipo = $datos["tipo"];
  array_push($respuesta->datos, $noticia);
};
respuestaJSON($respuesta);

  $bdd->close();
 ?>