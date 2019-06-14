function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log('Drawing inside constructor objct');
  };
}

const circle = new Circle(10);

circle.location = { x: 1, y: 2 };
circle.color = 'red';

console.log(circle);

delete circle.color;

console.log(circle);
