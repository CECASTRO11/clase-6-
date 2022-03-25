import Element from "./render.js";
import List from "./list.js";

let myDiv = document.querySelector("#myApp");

let myButton = new Element("Click me!");

myDiv.innerHTML = myButton.button();


let myImagen = new Element("./data/logo_OK.png");

myDiv.innerHTML += myImagen.imagen();

let mySound = new Element("https://www.w3schools.com/tags/horse.ogg");

myDiv.innerHTML += mySound.sonido();

let myVideo = new Element("https://www.youtube.com/watch?v=mAr-OHaKpZY");

myDiv.innerHTML += mySound.video();


const listItems = ["item 1", "item 2", "item 3", "item 5", "item 4", "item 7", "item 6"];

let myList = new List(listItems);

myDiv.innerHTML += myList.render();