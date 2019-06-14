function Circle(radius) {
  //* instance members
  this.radius = radius;

  this.move = function() {
    console.log('move');
  };
}

//# Circle.prototype === c1.__proto__

//* prototype members
Circle.prototype.draw = function() {
  console.log('drawing ..');
};

const c1 = new Circle(1);
const c2 = new Circle(5);

//## we can also access our main object constructor properties and modified them

Circle.prototype.toString = function() {
  return 'Circle with radius: ' + this.radius;
};

//## NOTE: Object.keys() Returns only instance members!!!
console.log(Object.keys(c1));

//##Note: for..in loop returns all members ( instance & prototype)

for (const key in c1) {
  console.log(key); //* returns radius, move, draw, toString
}

//## hasOwnProperty() works with instance members only
c1.hasOwnProperty('radius'); // returns true
c1.hasOwnProperty('draw'); // returns false
