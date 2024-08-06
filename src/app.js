/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./index.html";

//import "./assets/img/rigo-baby.jpg";
//import "./assets/img/4geeks.ico";

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
  let random1 = Math.floor(Math.random() * 4);
  let random2 = Math.floor(Math.random() * 4);
  let random3 = Math.floor(Math.random() * 4);
  let random4 = Math.floor(Math.random() * 4);

  let textoCambiado = document.querySelector(".excusa");
  textoCambiado.innerHTML =
    quien[random1] + accion[random2] + objeto[random3] + cuando[random4];
};
