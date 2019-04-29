// Remember the filter / forEach / let /JSON.parse and JSON.stringify
// Remind how to use the function filter below. it is awesome.

const toDo_form = document.querySelector(".js-toDoForm");
const toDo_input = toDo_form.querySelector("input");
// const clock_time = clock_container.querySelector(".js-clock-time")
const toDo_list = document.querySelector(".js-toDoList");

const TODO_LIST = "toDoList";
let toDos = [];

function saveToDo(){
  // javascript save sth into localStorage
  // in string type.
  // -> So we should make our Object into string type.
  // -> JSON.stringify
  localStorage.setItem(TODO_LIST, JSON.stringify(toDos));
}

function loadToDos(){
  const loadedToDoList = localStorage.getItem(TODO_LIST);

  if(loadedToDoList != null){
    const parsedToDos = JSON.parse(loadedToDoList);
    // console.log(parsedToDos);

    parsedToDos.forEach(function(toDo){
      // console.log(toDo);
      paintToDo(toDo.text);
    })

    // for(i=0; i < loadedToDoList.length; i++){
    //  // this codes work will work weire.
    //  //because loadedToDoList is not the object here.
    //  //It is sting version of Object (JSON.stringify(Object))
    //   // printToDo_element(parsedToDos[i].text);
    //   console.log(parsedToDos[i]);
    // }
    // toDo_list.innerText = toDoList;
  }
}

function deleteHandler(event){
  // Always use MDN
  // when you track the Event and handler

  // 1. Remove the target from DOM
  const btn_target = event.target;
  const li_target = btn_target.parentNode;

  toDo_list.removeChild(li_target);

  // 2. Remove the target from localStorage
  const left_toDo = toDos.filter(function(toDo){
    return toDo.id != li_target.id;
  })

  // this assignment is not executable
  // without "let" declaration for "toDos"
  toDos = left_toDo;
  saveToDo();
  // console.log(left_toDo);
}

function paintToDo(text){
  // console.log(text);
  const li_element = document.createElement("li");

  const del_btn = document.createElement("button");
  const span_element = document.createElement("span");
  const newId = toDos.length + 1;

  del_btn.innerText = "❌";
  del_btn.addEventListener("click", deleteHandler);
  span_element.innerText = text;

  li_element.appendChild(span_element);
  li_element.appendChild(del_btn);
  li_element.id = newId;

  toDo_list.appendChild(li_element);

  const toDo_object = {
    text : text,
    id : newId
  };

  toDos.push(toDo_object);
  saveToDo();
}

function submitHandler(event){
  event.preventDefault();
  const cur_value = toDo_input.value;
  paintToDo(cur_value);

  toDo_input.value = "";
}

function init(){
  loadToDos();
  toDo_form.addEventListener("submit", submitHandler);

}

init();
