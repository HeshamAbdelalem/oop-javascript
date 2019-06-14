function Circle(radius) {
  this.radius = radius;

  this.draw = function() {
    console.log('drawing');
  };
}

const circle = new Circle(10);
