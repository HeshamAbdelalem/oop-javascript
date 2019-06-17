func(); //# This function will work
func2(); //# This function will not work
console.log(name); //# will not work because it's not hoisted

//# function declaration ARE HOISTED => we can call it before we declare it
function func() {
  console.log("i'm hoisted");
}

//# function expression ARE NOT HOISTED
const func2 = function() {
  console.log("i'm not hoisted");
};

let name = 'hisham';

//## NOTE: Class Declaration & Class Experssion Are NOT Hoisting

//* class declaration
class Circle {
  //..
}

//* class expression
const Square = class {
  //..
};
