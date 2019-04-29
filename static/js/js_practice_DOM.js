// default 로 변수 설정은 const로
// 필요할 경우에만 let을 사용함.  use let only you need it.

// console is also one of the Objects
// console.log(console);

// `` -> backtick

// document is also an Object
// and it has a lot .
console.log(document)
// What DOM(Document Object Module) is
// : javascript make html to Object using html tags
// : like we just learned like myInfo.
const title = document.getElementById("title");

// now title is an Object
console.log(title);
console.error(title);

// You can see what you can do from below
// by using DOM of title
console.dir(title);
console.log(title.innerText);

title.style.color = "red";
title.innerHTML = "WOW DOM!";

// now let's see what can we do
// with document object
console.dir(document);
document.title = "I am Watcing you!";
