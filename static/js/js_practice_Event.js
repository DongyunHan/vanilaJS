// Javascript is not made to
// control HTML and CSS(style)
// javascript is all about managing EVENTs

function handleResize(event){
  // console.log(event);
  console.log("I have been resized.");
}

// handleResize() call instantly
// but in this situation,
// what we want is not call it right now.
// We want to make it called when event is happened.

// window.addEventListener("resize", handleResize())
window.addEventListener("resize", handleResize);


const title = document.querySelector("title");
const BASE_COLOR = "#34495e";


// Always use MDN
// when you track the Event and handler
function handleClick(){
  const current_color = title.style.color

  if(current_color == "red"){title.style.color = "blue";}
  else if(current_color == "blue"){title.style.color = BASE_COLOR;}
  else{
    title.style.color = "red";
  }
}

function init(){
  title.style.color = "red";
  title.addEventListener("click", handleClick);
}

init();
