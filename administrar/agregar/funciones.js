const ulListaInasistencias = document.getElementById("lista_inasistencias")
const urlListaNoticias = "http://localhost:3000/api/noticias/listar.php"

const noticias = {}
noticias.lista = []
//vaciarLista(ulListaInasistencias)



async function obtenerNoticias() {
    
    solicitarAlServidor(urlListaNoticias)
    .then(res=>{
        const Respuesta = res.Respuesta
        Respuesta.datos.forEach(noticia => {
            noticias.lista.push(noticia)
        });

        vaciarLista(ulListaInasistencias)

        noticias.lista.forEach(noticia => {
            


            switch (noticia.tipo) {
                case "inasistencia":
                    nuevoElementoInasistencia(noticia)
                    break;
            
                default:
                    break;
            }
        });
    })
}


function nuevoElementoInasistencia(elemento) {
    const liElemento = document.createElement("li")
    const pTitulo = document.createElement("p")
    pTitulo.classList.add("titulo_noticia")
    pTitulo.innerText = elemento.titulo
    const pContenido = document.createElement("p")
    pContenido.innerText = "Desde el "+elemento.fecha_pub+" Hasta el "+elemento.fecha_cad
    pContenido.classList.add("contenido_noticia")
    liElemento.appendChild(pTitulo)
    liElemento.appendChild(pContenido)
    ulListaInasistencias.appendChild(liElemento)
}


function vaciarLista(lista) {
    lista.innerHTML = ""
}