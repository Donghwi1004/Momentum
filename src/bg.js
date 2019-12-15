const body = document.querySelector("body");

const IMG_NUMBER = 4;

function paintImage(imgNumber) {
  const image = new Image();
  image.src = `./src/images/${imgNumber + 1}.jpg`;
  image.classList.add("bgImage");
  body.prepend(image);
}

function generateRandom() {
  return Math.floor(Math.random() * 4);
}

function init() {
  const randomNumber = generateRandom();
  paintImage(randomNumber);
}

init();
