console.log(document.querySelector('title').innerText);

let estilo1="../css/estilos-futuro.css"
let estilo2="../css/estilos-retro.css"
let estilo3="../css/estilos.css"

const estilos=[estilo1,estilo2,estilo3]

console.log(estilos);


let i = "estilo-1"
console.log("Actualmente visualizando el estilo Original");

function cambio() {
    if (i=="estilo-1") {
        console.warn("Cambiando al segundo estilo (FUTURO)");
        i="estilo-2";
        console.log(i);
        document.getElementById('css').href=("css/estilos-futuro.css")
    }
    else if (i=="estilo-2"){
        console.warn("Cambiando al tercer estilo (RETRO)")
        i="estilo-3"
        console.log(i);
        document.getElementById('css').href=("css/estilos-retro.css")
    }
    else if (i="estilo-3"){
        console.warn("Volviendo al diseño original")
        i="estilo-1"
        console.log(i);
        document.getElementById('css').href=("css/estilos.css")
    }}
