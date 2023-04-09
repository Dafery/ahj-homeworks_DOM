import imgGoblin from "../img/goblin.png";

const wrapper = document.querySelector(".wrapper");
const img = document.createElement("img");
img.src = imgGoblin;

for (let i = 0; i < 16; i++) {
  const cell = document.createElement("div");
  wrapper.appendChild(cell);
}

const cells = [...document.querySelectorAll(".wrapper div")];

function getRandomIndex() {
  const oldIndex = cells.findIndex((el) => el.children.length);
  let randomIndex = Math.floor(Math.random() * 15);
  return randomIndex !== oldIndex ? randomIndex : getRandomIndex();
}

setInterval(() => {
  cells[getRandomIndex()].appendChild(img);
}, 1000);
