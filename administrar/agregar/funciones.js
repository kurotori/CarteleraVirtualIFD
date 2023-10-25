const ulListaInasistencias = document.getElementById("lista_inasistencias")
const divBaseEditor = document.getElementById("baseEditor")
const btnNuevaInasistencia = document.getElementById("btn_nuevaInasistencia")
const btnCerrarEditor = document.getElementById("btnCerrarEditor")

const h3EditorTitulo = document.getElementById("editorTitulo")

const formEditor = document.getElementById("formEditor");
const lblNoticiaTitulo = document.getElementById("noticiaTitulo")
const lblNoticiaContenido = document.getElementById("noticiaContenido")
const lblNoticiaFechaPub = document.getElementById("noticiaFechaPub")
const lblNoticiaFechaCad = document.getElementById("noticiaFechaCad")
const inptNoticiaTitulo = document.getElementById("titulo")
const inptNoticiaContenido = document.getElementById("contenido")
const inptNoticiaFechaPub = document.getElementById("fecha_pub")
const inptNoticiaFechaCad = document.getElementById("fecha_cad")
const inptNoticiaTipo = document.getElementById("tipo")
const btnAgregarNoticia = document.getElementById("btnAgregarNoticia")

const urlListaNoticias = "http://localhost:3000/api/noticias/listar.php"

btnNuevaInasistencia.addEventListener("click",abrirEditorInasistencias)
btnCerrarEditor.addEventListener("click",cerrarEditor)

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
    const pFechas = document.createElement("p")
    pFechas.innerText =  "Desde el "+elemento.fecha_pub+" Hasta el "+elemento.fecha_cad
    pFechas.classList.add("contenido_noticia")
    const pContenido = document.createElement("p")
    pContenido.innerText = elemento.contenido
    pContenido.classList.add("contenido_noticia")
    liElemento.appendChild(pTitulo)
    liElemento.appendChild(pContenido)
    liElemento.appendChild(pFechas)
    ulListaInasistencias.appendChild(liElemento)
}


function vaciarLista(lista) {
    lista.innerHTML = ""
}

function cortina(titulo) {
    if (divBaseEditor.style.display=="none"||divBaseEditor.style.display.length==0) {
        divBaseEditor.style.display="block"
        h3EditorTitulo.innerText=titulo
        inptNoticiaFechaPub.valueAsDate=new Date()
    }
    else{
        divBaseEditor.style.display="none"
    }
}

function abrirEditorInasistencias() {
    cortina("Nueva Inasistencia")
    lblNoticiaTitulo.innerText="Docente:"
    lblNoticiaContenido.innerText="Motivo:"
    lblNoticiaFechaPub.innerText="Desde el día:"
    lblNoticiaFechaCad.innerText="Hasta el día:"
    inptNoticiaTipo.value = "2"
    btnAgregarNoticia.innerText="Agregar Inasistencia"
}

function cerrarEditor() {
    cortina()
}

function agregarNoticia() {
    
    const noticia={
        titulo:inptNoticiaTitulo.value,
        contenido:inptNoticiaContenido.value,
        fecha_pub:inptNoticiaFechaPub.value,
        fecha_cad:inptNoticiaFechaCad.value
    }

    valido=false

    if (noticia.titulo.length > 1) {
        if (noticia.fecha_cad.length > 1) {
            if (noticia.fecha_cad >= noticia.fecha_pub) {
                valido=true
            }
        }
    }

    if (valido==true) {
        enviarAlServidor(noticia,)
    }
    else{
        console.log("NO")
    }
}