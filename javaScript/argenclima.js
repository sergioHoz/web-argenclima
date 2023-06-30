/*
    function proximoEnlaFila( arreglo,elemento){

    arreglo.push(elemento);
    return arreglo.shift();


    }

    var miArreglo = ["sergio","andres","camilo","carlos"];

    console.log(miArreglo);

    proximoEnlaFila(miArreglo,"pedro");

    console.log(miArreglo);

*/


var menu_visible = false;
let menu = document.getElementById("menu");
function mostrarOcultarMenu(){
    if(menu_visible==false){//si esta oculto
        menu.style.display = "block";
        menu_visible = true;
    }
    else{
        menu.style.display = "none";
        menu_visible = false;
    }
}


