const _radius = Symbol();
const _draw = Symbol();

class Circle {
  constructor(radius) {
    this[_radius] = radius;
  }

  [_draw]() {}
}

const circle = new Circle(20);
console.log('TCL: circle', circle);
