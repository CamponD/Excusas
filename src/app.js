/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./index.html";

//import "./assets/img/rigo-baby.jpg";
//import "./assets/img/4geeks.ico";

function generaExcusa(quien, accion, objeto, cuando) {
  let grupoArreglos = [quien, accion, objeto, cuando];
  for (let i = 0; i < 3; i++) {
    let random = Math.floor(Math.random() * 4);
    let textoCambiado = document.querySelector(".excusa");
    textoCambiado.innerHTML += grupoArreglos[i][random];
  }
}

let quien = ["My dog ", "My grandma ", "The dentist ", "the neighbor's cat "];
let accion = ["bit ", "found ", "overdid it with ", "almost drowned "];
let objeto = [
  "neighbor's son ",
  "my hidden magazines ",
  "with the anesthesia ",
  "in my pool "
];
let cuando = [
  "while playing",
  "while cleaning my room",
  "during my operation",
  "while eating"
];

window.onload = function() {
  //write your code here
  generaExcusa(quien, accion, objeto, cuando);
};
