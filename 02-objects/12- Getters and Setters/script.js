function Circle(radius) {
  this.radius = radius;

  let defaultLocation = { x: 1, y: 1 }; //! we didn't use this.defaultLocation so

  this.draw = function() {
    console.log('Drawing inside constructor objct');
  };

  Object.defineProperty(this, 'defaultLocation', {
    get: function() {
      return defaultLocation;
    },
    set: function(value) {
      if (!value.x || !value.y) {
        throw new Error('Add x and y');
      } else {
        defaultLocation = value;
      }
    }
  });
}

const circle = new Circle(10);

console.log('TCL: circle', circle);
