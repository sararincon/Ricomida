//Tooltip
var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

//Alerta
const btnCorreo = document.getElementById("boton-correo");

function onClickEventButton() {
  alert("El correo fue enviado correctamente...");
  // btnCorreo.classList.add();
  return 0;
}

btnCorreo.onclick = onClickEventButton; //a la propiendad onClick de la variable btnCorre le estoy asignando un valor

//Declarando Variables
const cambioIngredientes = document.getElementById("cambioColorIngredientes");
const cambioPreparacion = document.getElementById("cambioColorPreparacion");

//Cambiando color a Rojo "Ingredientes"
function cambioColorI() {
  cambioIngredientes.classList.add("colorRojo");
}
cambioIngredientes.ondblclick = cambioColorI;

//Cambiando color a Rojo "Preparacion"
function cambioColorP() {
  cambioPreparacion.classList.add("colorRojo");
}
cambioPreparacion.ondblclick = cambioColorP;

//Esconder Texto 1 Card 1
const clickHide1 = document.getElementById("cardTitleUno");
const hide1 = document.getElementById("cardTextUno");

function hiddenEvent1() {
  hide1.classList.toggle("d-none");
}

clickHide1.onclick = hiddenEvent1;

//Esconder Texto 2 Card 2
const clickHide2 = document.getElementById("cardTitleDos");
const hide2 = document.getElementById("cardTextDos");

function hiddenEvent2() {
  hide2.classList.toggle("d-none");
}

clickHide2.onclick = hiddenEvent2;

//Esconder Texto 3 Card 3
const clickHide3 = document.getElementById("cardTitleTres");
const hide3 = document.getElementById("cardTextTres");

function hiddenEvent3() {
  hide3.classList.toggle("d-none");
}

clickHide3.onclick = hiddenEvent3;

//tooltip
