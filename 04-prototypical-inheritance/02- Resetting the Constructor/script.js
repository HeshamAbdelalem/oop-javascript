function Shape() {
  //..
}

Shape.prototype.duplicate = function() {
  console.log("i'm duplicated");
};

function Circle(radius) {
  this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
//## Anytime we use this method and reset the prototype as a best paractise we should reset the constructor
Circle.prototype.constructor = Circle;

Circle.prototype.draw = function() {
  console.log('drawing');
};

const c = new Circle(10);

const s = new Shape();
