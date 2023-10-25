<?php 
    include_once "../../api/bdd.php";
    include_once "../../api/funciones.php";

    $bdd = new SQLite3("../../db/bdd.db");

    $respuesta = new Respuesta;

    $bdd->exec(
        "insert into noticia
        (titulo,contenido,fecha_cad)
        VALUES
        ('cosa','asdasdfasdfasdf','2023-10-30');"
    );
    
    $resultado = $bdd->query(
        "select last_insert_rowid() as 'id';"
    );

   

while ($datos = $resultado->fetchArray(SQLITE3_ASSOC)) {
  $respuesta->datos = $datos["id"];
  //array_push($respuesta->datos, $noticia);
};
    $sentencia = $bdd->prepare("insert into tiene(noticia_id,tipo_id) 
    values(:noticia_id,:tipo_id);");
    $sentencia->bindValue(":noticia_id",$respuesta->datos);
    $sentencia->bindValue(":tipo_id","2");
    $sentencia->execute();

respuestaJSON($respuesta);

  $bdd->close();
 ?>