console.log(document.querySelector('title').innerText);


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


localStorage.setItem('original','css/estilos.css')
localStorage.setItem('futuro','css/estilos-futuro.css')
localStorage.setItem('retro','css/estilos-retro.css')

function save() {
    if (i=="estilo-1") {
        console.warn("Guardando Tema");
        localStorage.setItem('estiloGuardado','css/estilos.css')
        var savedStyle = localStorage.getItem('estiloGuardado')
        document.getElementById('css').href.innerText=localStorage.getItem('estiloGuardado')
    }
    else if (i=="estilo-2"){
        console.warn("Guardando Tema");
        localStorage.setItem('estiloGuardado','css/estilos-futuro.css')
        var savedStyle = localStorage.getItem('estiloGuardado')
        document.getElementById('css').href.innerText=localStorage.getItem('estiloGuardado')
    }
    else if (i="estilo-3"){
        console.warn("Guardando Tema");
        localStorage.setItem('estiloGuardado','css/estilos-retro.css')
        var savedStyle = localStorage.getItem('estiloGuardado')
        document.getElementById('css').href.innerText=localStorage.getItem('estiloGuardado')
    }}
