function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

function Shape(color) {
  this.color = color;
}

function Circle(radius, color) {
  //# this is how we call the super constructor

  Shape.call(this, color);
  this.radius = radius;
}

extend(Circle, Shape);

/* 
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;
 */

Shape.prototype.duplicate = function() {
  console.log("i'm duplicated");
};

Circle.prototype.draw = function() {
  console.log('drawing');
};

function Square(size) {
  this.size = size;
}

extend(Square, Shape);

//## Sometimes we want to overriding the method in the parent object
//# we can do that this way after the extend function

Square.prototype.duplicate = function() {
  Shape.prototype.duplicate.call(this);

  console.log('square duplicated');
};

/* 
Square.prototype = Object.create(Shape.prototype);
Square.prototype.constructor = Square;
 */
const c = new Circle(10, 'red');
const s = new Shape();
