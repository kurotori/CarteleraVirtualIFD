const divPrincipal = document.getElementById("principal")
const divLateral = document.getElementById("lateral")

let datosA

function cargarLateral() {
    divLateral.innerHTML="Probando";
    datosA = divPrincipal.innerHTML;
    console.log(datosA)
} 

let datos="";
async function obtenerNoticiasWeb() {
   /// const respuestaWeb = await fetch("https://ifdmelo.cfe.edu.uy/");
    //const datosWeb = await respuestaWeb.blob()
    //console.log(datosWeb)

    fetch('https://ifdmelo.cfe.edu.uy/').then(
        respuesta=>{
            datos = respuesta.blob();
        }
    );
    

}