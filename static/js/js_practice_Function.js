// default 로 변수 설정은 const로
// 필요할 경우에만 let을 사용함.  use let only you need it.

const myInfo = {
  name : "handy",
  friends : ["kuma", "bbok"],
  where : "ulsan"
};

// console is also one of the Object
// console.log(console);

function hello1(name){
  console.log("Hello! Mr.", name)
}

function hello2(name){
  console.log("Hello! Mr." + name)
}

// `` -> backtick
function hello_new(name){
  console.log(`Hello! Mr.${name}`)
}

hello1(myInfo.name);
hello2(myInfo.friends[0]);
hello_new(myInfo.friends[1]);

/////////////////////////////////

const calculator = {
  plus : function(a, b){
    return a + b;
  },
  minus : function(a, b){
    return a - b;
  },
  multiply : function(a, b){
    return a*b;
  },
  divide : function(a, b){
    if(b != 0)
      return a / b;
    else
      return null;
  },
  pow : function(a,b){
    return a**b;
  },
  square : function(a){
    return a**2;
  }
}

console.log(calculator.plus(1,2));
console.log(calculator.minus(1,2));
console.log(calculator.multiply(2, 10));
console.log(calculator.divide(5, 0.5));
console.log(calculator.square(5,5));
