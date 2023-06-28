function CIRCULO() {
    let figura = document.getElementById("FIGURAS");
    figura.classList.remove("RECTANGULO","TRIANGULO");
    figura.classList.toggle("CIRCULO");
}
function RECTANGULO(){
    let figura = document.getElementById("FIGURAS");
    figura.classList.remove("CIRCULO","TRIANGULO");
    figura.classList.toggle("RECTANGULO");
}
function TRIANGULO(){
    let figura = document.getElementById("FIGURAS");
    figura.classList.remove("CIRCULO","RECTANGULO");
    figura.classList.toggle("TRIANGULO");
}
function GIRO(){
    let figura = document.getElementById("FIGURAS");
    figura.classList.remove("TRIANGULO");
    figura.classList.toggle("GIRO");
}
function ARRIBA(){
    let figura = document.getElementById("FIGURAS");
    figura.classList.remove("TRIANGULO","CIRCULO","RECTANGULO","GIRO");
    figura.classList.toggle("ARRIBA");
}
function ABAJO(){
    let figura = document.getElementById("FIGURAS");
    figura.classList.remove("TRIANGULO","CIRCULO","RECTANGULO","GIRO","ARRIBA");
    figura.classList.toggle("ABAJO");
}
function IZQUIERDA(){
    let figura = document.getElementById("FIGURAS");
    figura.classList.remove("TRIANGULO","CIRCULO","RECTANGULO","GIRO","ARRIBA","ABAJO");
    figura.classList.toggle("IZQUIERDA");
}
function DERECHA(){
    let figura = document.getElementById("FIGURAS");
    figura.classList.remove("TRIANGULO","CIRCULO","RECTANGULO","GIRO","ARRIBA","ABAJO","IZQUIERDA");
    figura.classList.toggle("DERECHA");
}
function OCULTAR(){
    let figura = document.getElementById("FIGURAS");
    figura.classList.remove("TRIANGULO","CIRCULO","RECTANGULO","GIRO","ARRIBA","ABAJO","IZQUIERDA","DERECHA");
    figura.classList.toggle("OCULTar");

}
function GIF(){
    let figura=document.getElementById("FIGURAS");
    figura.classList.remove("TRIANGULO","CIRCULO","RECTANGULO","GIRO","ARRIBA","ABAJO","IZQUIERDA","DERECHA","OCULTO");
    figura.classList.toggle("GIF");

}
function DEGRADADO(){
    let figura = document.getElementById("FIGURAS");
    figura.classList.remove("TRIANGULO","CIRCULO","RECTANGULO","GIRO","ARRIBA","ABAJO","IZQUIERDA","DERECHA","OCULTO");
    figura.classList.toggle("DEGRADADO");
}
function PANEL_LATERAL(){
    const panel = document.querySelector(".PANEL_IZ");
    panel.classList.toggle("ACTIVO");
}

function PANEL_SUPERIOR(){
    const panel = document.querySelector(".PANEL_SUP");
    panel.classList.toggle("ACTIVO");
}