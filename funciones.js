const divPrincipal = document.getElementById("principal")
const divLateral = document.getElementById("lateral")
const liListaNoticias = document.getElementById("listaNoticias")

let datosA

async function cargarLateral() {
    liListaNoticias.innerHTML=""
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
            divTitulo.classList.add("noticiaTitulo")
            let divFecha = document.createElement("div")
            divFecha.classList.add("noticiaFecha")
            let divBorde = document.createElement("div")
            divBorde.classList.add("noticiaBorde")
            
            let fecha_pubN = new Date(noticia.fecha_pub*1000)
            let fecha_pub = "Publicado el " + fecha_pubN.getUTCDate()+"/"+fecha_pubN.getUTCMonth()+"/"+fecha_pubN.getUTCFullYear()+"<br>"
            let fecha_cad=""
    

            let fecha_edN = new Date(noticia.fecha_ed*1000)
            let fecha_ed = fecha_edN.getUTCDate()

            if (noticia.fecha_cad!=null) {
                let fecha_cadN = new Date(noticia.fecha_cad*1000)
                fecha_cad = "Válido hasta " + fecha_cadN.getUTCDate()+"/"+fecha_cadN.getUTCMonth()+"/"+fecha_cadN.getUTCFullYear()+"<br>"
            }
            else{
                fecha_cad=""
            }
            

            divTitulo.innerHTML=noticia.titulo
            divFecha.innerHTML=fecha_pub+fecha_cad


            liNoticia.appendChild(divTitulo)
            liNoticia.appendChild(divFecha)
            liNoticia.appendChild(divBorde)
            liListaNoticias.appendChild(liNoticia)
           
        });
    })



    //console.log(noticias.Respuesta.datos)

} 

function cargarPrincipal() {
    
}
