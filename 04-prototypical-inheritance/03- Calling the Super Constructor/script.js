function Shape(color) {
  this.color = color;
}

Shape.prototype.duplicate = function() {
  console.log("i'm duplicated");
};

function Circle(radius, color) {
  //# this is how we call the super constructor

  Shape.call(this, color);
  this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.draw = function() {
  console.log('drawing');
};

const c = new Circle(10, 'red');

const s = new Shape();
