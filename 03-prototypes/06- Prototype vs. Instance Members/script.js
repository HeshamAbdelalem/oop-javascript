function Circle(radius) {
  //* instance members
  this.radius = radius;
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
