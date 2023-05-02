
const incrementa = document.querySelector("#mayor-btn");
const disminuye = document.querySelector("#menor-btn");
const empieza= document.querySelector("#empieza-btn");
const termina= document.querySelector("#termina-btn");
const repite= document.querySelector("#repetir-btn");
const resultado= document.querySelector("#resultado");
let min = 1;
let max = 100;
let num = 0;


function busquedaBinaria () {
    num = Math.floor((min + max) / 2);
    document.querySelector("#resultado").innerHTML = `¿Estás pensando en el número ${num}?`

}

disminuye.addEventListener("click", function() {
    max = num - 1 ;
    busquedaBinaria();
});

incrementa.addEventListener("click", function() {
    min = num + 1;
    busquedaBinaria();
  });

  termina.addEventListener("click", function() {
    document.querySelector("#frase").innerHTML = `¡He ganado!`
    repite.removeAttribute("class");
    repite.setAttribute("class","col-lg-2 col-md-3 col-sm-5 btn btn-ultra-voilet btn-lg");
    incrementa.setAttribute("class","hide");
    disminuye.setAttribute("class","hide");
    termina.setAttribute("class","hide");
    empieza.setAttribute ("class","hide");
    resultado.setAttribute ("class","hide");
  });

  repite.addEventListener( "click", _=> {
        location.reload();

});
