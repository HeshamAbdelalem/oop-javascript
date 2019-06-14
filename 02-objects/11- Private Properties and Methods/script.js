function Circle(radius) {
  this.radius = radius;

  let defaultLocation = { x: 1, y: 1 }; //! we didn't use this.defaultLocation so
  let computeOptimumLocation = function(factor) {
    console.log(factor * 5);
  };

  this.draw = function() {
    computeOptimumLocation(5);
    console.log('Drawing inside constructor objct');
  };
}

const circle = new Circle(10);
console.log('TCL: circle', circle);
