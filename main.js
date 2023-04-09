/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/img/goblin.png
const goblin_namespaceObject = __webpack_require__.p + "2dbd01ce16c0fa83cb67.png";
;// CONCATENATED MODULE: ./src/js/app.js

const wrapper = document.querySelector(".wrapper");
const img = document.createElement("img");
img.src = goblin_namespaceObject;
for (let i = 0; i < 16; i++) {
  const cell = document.createElement("div");
  wrapper.appendChild(cell);
}
const cells = [...document.querySelectorAll(".wrapper div")];
function getRandomIndex() {
  const oldIndex = cells.findIndex(el => el.children.length);
  let randomIndex = Math.floor(Math.random() * 15);
  return randomIndex !== oldIndex ? randomIndex : getRandomIndex();
}
setInterval(() => {
  cells[getRandomIndex()].appendChild(img);
}, 1000);
;// CONCATENATED MODULE: ./src/index.js


// TODO: write your code in app.js
/******/ })()
;