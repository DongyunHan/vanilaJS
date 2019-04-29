const form_container = document.querySelector(".js-form");
const input_name = form_container.querySelector("input");
const greeting = document.querySelector(".js-greetings");

const USER_ID = "username";
const SHOWING_ON = "showing";

function saveUsername(text){
  localStorage.setItem(USER_ID, text);
}

function submitHandler(event){
  event.preventDefault();

  const curr_name = input_name.value;
  // input_name.innerText == input_name.value
  // print(input_name.innerText);
  // print(input_name.value);
  saveUsername(curr_name);
  paintGreeting(curr_name);
}

function askForName(){
  form_container.classList.add(SHOWING_ON);
  form_container.addEventListener("submit", submitHandler)
}

function paintGreeting(text){
  form_container.classList.remove(SHOWING_ON);
  greeting.classList.add(SHOWING_ON);

  greeting.innerText = `Hello ${text}`;
}

function loadName(){
  const cur_username = localStorage.getItem(USER_ID)

  if(cur_username === null){
    askForName();
  }else{
    paintGreeting(cur_username);
  }
}

function init(){
  // form_container.addEventListener("click", clickHandler);
  loadName();
}

init();
