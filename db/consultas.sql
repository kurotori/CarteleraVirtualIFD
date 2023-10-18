/*Búsqueda de noticias*/
SELECT 
noticia.titulo as 'titulo', noticia.contenido as 'contenido',
date(noticia.fecha_pub) as 'fecha_pub', date(noticia.fecha_cad) as 'fecha_cad',
date(noticia.fecha_ed) as 'fecha_ed', noticia.id as 'ID',
tipo.nombre as 'tipo'
FROM
noticia INNER JOIN tiene INNER JOIN tipo
where noticia.ID = tiene.noticia_id AND tipo.id = tiene.tipo_id
and date()<=date(noticia.fecha_cad);