//## Primitives are copied by thier vlaue
//## Objects are copied by thier reference

//# Example 1

let x = 10;
let y = x;

x = 50;
console.log(x); //50
console.log(y); //10

let a = { value: 10 };
let b = a;

a.value = 50;

console.log(a.value); // 50
console.log(b.value); // 50

//# Example 2

let val = 10;
function increaseValue(number) {
  return number++;
}
increaseValue(val);
console.log(val); // 10

let obj = { value: 20 };
function increaseObj(number) {
  number.value++;
}
increaseObj(obj);
console.log(obj.value); //21
