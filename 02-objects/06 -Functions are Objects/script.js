//? constructor function

function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log('drawing');
  };
}

const circle1 = new Circle(20);

circle1.draw();
