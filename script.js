//1
function abc(){
    console.log(abc)
}
abc()

//2
function add(x,y){
    let c=x+y
    console.log(`Sum of ${x},${y} is ${c}`);
}
add(3,4)

//3
let sum = (a, b) => {
console.log(a + b)}

sum(1, 2)
//4
var x = 21;
var girl = function () {
     console.log(x);
     var x = 20;
    };
    girl ();
//5
var x = 21;
girl ();
console.log(x)
function girl() {
    console.log(x);
    var x = 20;
};

//6
var x = 21;
a();
b();

  function a() {
    
   x = 20;
  console.log(x);
};
 function b() {
    
    x = 40;
   console.log(x);
};
//7
function factorial(n){
    if(n == 0 || n == 1){
        return 1;
    }else{
        return n * factorial(n-1);
    }
}
let n = 0;
answer = factorial(n)
console.log("Factorial of " + n + " : " + answer);

//Day 2

  //1
  function FindSum(a, b){
    return a + b;
}

function DisplayData(data, batch){
    console.log(`i am from ${data} and My batch is EA${batch}`)
}

DisplayData("PrepBytes", FindSum(10, 15));     
  //2
  Abc();
const Abc = function(){
    let value = 20;
    console.log(value);
}
  //3
  var a = 10;
    (function (){
        console.log(a);
            var a = 20;
  })();

  //4
  const greet =  function(name){
    return function(m){
    
        console.log(`Hi!! ${name}, ${m}`);
    }
}
  
const greet_message = greet('EA25');
greet_message("Welcome To PrepBytes")
