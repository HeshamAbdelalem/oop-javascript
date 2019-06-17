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

Circle.prototype.draw = function() {
  console.log('drawing');
};

const c = new Circle(10);

const s = new Shape();
