let person = { name: 'Hisham', age: 30 };
/*
let objectBase = Object.getPrototypeOf(person);
console.log('TCL: objectBase', objectBase);

let descriptors = Object.getOwnPropertyDescriptor(objectBase, 'toString');
console.log('TCL: descriptors', descriptors);
*/

Object.defineProperty(person, 'name', {
  writable: false, //! now we can change this property
  enumerable: false, //! this property will not show up when we use Object.keys
  configurable: false //! now we can't delete this property
});

person.name = 'magdy';
let personKeys = Object.keys(person);

console.log(person);
console.log(personKeys);
