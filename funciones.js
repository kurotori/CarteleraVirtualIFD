const divPrincipal = document.getElementById("principal")
const divLateral = document.getElementById("lateral")

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
            let pNoticia = document.createElement("p")
            
            let fechaN = new Date(noticia.fecha*1000)
            let fecha = fechaN.getUTCDate()
            pNoticia.innerText = noticia.titulo + " - " + fecha
            divLateral.appendChild(pNoticia)
        });
    })



    //console.log(noticias.Respuesta.datos)

} 

function cargarPrincipal() {
    
}
