const clock_container = document.querySelector(".js-clock");
const clock_time = clock_container.querySelector("h1");
// const clock_time = clock_container.querySelector(".js-clock-time")

function getTime(){

  current_time = new Date();
  cur_hour = current_time.getHours();
  cur_min = current_time.getMinutes();
  cur_sec = current_time.getSeconds();

  clock_time.innerText = `${cur_hour < 10 ? `0${cur_hour}` : cur_hour}:${
    cur_min < 10 ? `0${cur_min}` : cur_min}:${
      cur_sec < 10 ? `0${cur_sec}` : cur_sec}`;
}


function init(){
  //Always remember the divide and conquer
  // Do not mistake with getTime()
  setInterval(getTime,1000);
}

init();
