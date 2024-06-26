function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector("body");
const colorText = document.querySelector(".color");
const changeColorBtn = document.querySelector(".change-color");
changeColorBtn.addEventListener("click", bodyColor);

function bodyColor() {
  body.style.backgroundColor = getRandomHexColor();
  colorText.textContent = body.style.backgroundColor;
}
