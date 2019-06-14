//# Every Property in javaScript has a property called constructor and that references the function that was used to construct or create an object

//? factory function

function createCircle(radius) {
  return {
    radius,
    draw: function() {
      console.log('draw from factory function');
    }
  };
}

const circleFromFF = createCircle(10);

//? constructor function

function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log('drawing');
  };
}

const circleFromCF = new Circle(5);

console.log(circleFromCF);
console.log(circleFromCF.radius);
circleFromCF.draw();

ci;
