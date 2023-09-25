const divPrincipal = document.getElementById("principal")
const divLateral = document.getElementById("lateral")
const liListaNoticias = document.getElementById("listaNoticias")

let datosA

async function cargarLateral() {
    //const datos = await fetch('http://localhost:3000/api/verNoticias/')
    //const noticias = await datos.json()
    fetch('http://localhost:3000/api/verNoticias', {
        method: 'GET',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(res => {
        let listado = res.Respuesta.datos
        listado.forEach(noticia => {
            let liNoticia = document.createElement("li")
            let divTitulo = document.createElement("div")
            let divFecha = document.createElement("div")
            let divBorde = document.createElement("div")
            
            let fecha_pubN = new Date(noticia.fecha_pub*1000)
            let fecha_pub = fecha_pubN.getUTCDate()+"/"+fecha_pubN.getUTCMonth()+"/"+fecha_pubN.getUTCFullYear()

            let fecha_edN = new Date(noticia.fecha_ed*1000)
            let fecha_ed = fecha_edN.getUTCDate()

            let fecha_cadN = new Date(noticia.fecha_cad*1000)
            let fecha_cad = fecha_cadN.getUTCDate()

            pNoticia.innerText = noticia.titulo + " - " + fecha_pub
            divLateral.appendChild(pNoticia)
        });
    })



    //console.log(noticias.Respuesta.datos)

} 

function cargarPrincipal() {
    
}
