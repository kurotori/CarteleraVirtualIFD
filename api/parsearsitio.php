<?php

    include_once "funciones.php";

    $html=file_get_contents("http://ifdmelo.cfe.edu.uy/");
    $dom = new DomDocument;

    @$dom->loadHTML($html);
    $buscador=new DOMXPath($dom);

    $clase_titulo="item_title";
    $clase_fecha="item_published";

    $titulos=$buscador->query("//*[contains(concat(' ', normalize-space(@class), ' '), ' $clase_titulo ')]");
    $fechas=$buscador->query("//*[contains(concat(' ', normalize-space(@class), ' '), ' $clase_fecha ')]");
    
    $noticias=array();

    $long = count($titulos);
    //print_r($long);

    for ($i=0; $i < $long; $i++) { 
        $noticia=new NoticiaSitio;
        $noticia->titulo = $titulos[$i]->textContent;
        $noticia->fecha = $fechas[$i]->textContent;
        array_push($noticias,$noticia);
    }

    foreach ($noticias as $noticia) {
        echo("$noticia->fecha - $noticia->titulo");
        echo("<br>");
    }
    
    
    /*echo("Algo");
    $datos = array();
    preg_match_all('/p class=\"item_title\">/',"$html",$datos);
    print_r($datos);*/
 ?>