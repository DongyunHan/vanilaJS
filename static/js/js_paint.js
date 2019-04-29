// const canvas = document.querySelector("#js-canvas");
const canvas = document.getElementById("js-canvas");
const ctx = canvas.getContext("2d");

canvas.width = 500;
canvas.height = 500;

ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 2.5;

let painting = false;

function stopPainting(){
  painting = false;
}

function startPainting(){
  painting = true;
}

function mousedownHandler(event){
  // const x_pos = event.offsetX;
  // const y_pos = event.offSetY;
  //
  // console.log(x_pos);
  // -> it only shows the point when the mouse is downed.
  // -> we should use mousemove event to follow the mouse
  painting = true;
}

function mousemoveHandler(event){
  const x_pos = event.offsetX;
  const y_pos = event.offsetY;

  if(!painting){
    // console.log(x_pos);
    ctx.beginPath();
    ctx.moveTo(x_pos, y_pos);
  }else{
    // console.log(x_pos);
    // console.log(y_pos);

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

if(canvas){
  canvas.addEventListener("mousemove", mousemoveHandler);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
}
