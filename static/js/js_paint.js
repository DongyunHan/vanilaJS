// const canvas = document.querySelector("#js-canvas");
const canvas = document.getElementById("js-canvas");
const ctx = canvas.getContext("2d");
const color_btns = document.getElementsByClassName("js-color");
const width_range = document.getElementById("js-range");
const mode_btn = document.getElementById("jsMode");
const save_btn = document.getElementById("jsSave");

canvas.width = 500;
canvas.height = 500;

ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 2.5;

let painting = false;
let filling = false;

const FILL = "Fill";
const PAINT = "Paint";


function stopPainting() {
  painting = false;
}

function startPainting() {
  if (!filling) {
    painting = true;
  } else {
    // console.log("filling");
    ctx.rect(0, 0, canvas.width, canvas.height);
    ctx.fill();
  }
}

function mousedownHandler(event) {
  // const x_pos = event.offsetX;
  // const y_pos = event.offSetY;
  //
  // console.log(x_pos);
  // -> it only shows the point when the mouse is downed.
  // -> we should use mousemove event to follow the mouse

  painting = true;
}

function mousemoveHandler(event) {
  const x_pos = event.offsetX;
  const y_pos = event.offsetY;

  if (!painting) {
    // before clicking
    // many pathes are created but not used.
    ctx.beginPath();
    ctx.moveTo(x_pos, y_pos);
  } else {
    ctx.lineTo(x_pos, y_pos);
    ctx.stroke();
  }
}

// function mouseupHandler(event){
//   stopPainting();
// }
//
// function mouseleaveHandler(event){
//   stopPainting();
// }

function btn_clickHandler(event) {
  // console.log(event.target.style);
  const bgColor = event.target.style.backgroundColor;
  // ctx.strokeStyle = event.srcElement.style.backgroundColor;
  ctx.strokeStyle = bgColor;
  ctx.fillStyle = bgColor;
}

function range_changeHandler(event) {
  const rangeValue = event.target.value;
  ctx.lineWidth = rangeValue;
}

function mode_clickHandler(event) {
  if (filling === true) {
    filling = false;
    mode_btn.innerText = PAINT;
  } else {
    filling = true;
    mode_btn.innerText = FILL;
  }


  // const modeBtnText = event.target.innerText;

  // if(modeBtnText == FILL){
  //   mode_btn.innerText = PAINT;
  // }else{
  //   mode_btn.innerText = FILL;
  // }

  // console.log(modeBtnText);
}

function save_clickHandler(){
  const imageURL = canvas.toDataURL();

  const saveLink = document.createElement("a");
  saveLink.href = imageURL;
  saveLink.download = "myImage";

  saveLink.click();
}

function contextmenuHandler(event){
  event.preventDefault();
}

function canvasInit(){
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}



if (canvas) {
  canvasInit();

  canvas.addEventListener("mousemove", mousemoveHandler);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
  // color_btns[0].addEventListener("click", btn_clickHandler);

  // color_btns is HtmlCollection
  // but we want array not HtmlCollection.

  // const colorBtns_array = Array.prototype.slice.call(color_btns);
  const colorBtns_array = Array.from(color_btns);
  colorBtns_array.forEach(function (color_btn) {
    color_btn.addEventListener("click", btn_clickHandler);
  });

  width_range.addEventListener("change", range_changeHandler);
  mode_btn.addEventListener("click", mode_clickHandler);
  save_btn.addEventListener("click", save_clickHandler);
  canvas.addEventListener("contextmenu", contextmenuHandler);
}
