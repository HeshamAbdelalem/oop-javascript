class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  //* Instance method
  draw() {
    console.log('drawing');
  }

  //* static method
  static parse(str) {
    const radius = JSON.parse(str).radius;
    return new Circle(radius);
  }
}

const circle = new Circle('{ "radius": 10 }');
console.log('TCL: circle', circle);

//##Note: we use static methods to create utility functions that are not tied to a particular object

class Math2 {
  static plusOne(val) {
    return val + 1;
  }
}
