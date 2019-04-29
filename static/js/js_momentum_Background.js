const body_container = document.querySelector("body");

const IMAGE_NUM = 6;

function getRandom(){
  return Math.ceil(Math.random() * (IMAGE_NUM));
}

function paintImage(imgNumber){
  // createElement() 를 활용해서 Image()를 만들지 않네.
  const img = new Image();
  img.src = `static/js/images/${imgNumber}.jpg`;
  img.classList.add("bgImage");
  body_container.appendChild(img);
}

function init(){
  const random_number = getRandom();
  console.log(random_number);
  paintImage(random_number);
}

init()
