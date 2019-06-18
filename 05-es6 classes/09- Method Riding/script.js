class Shape {
  move() {
    console.log('move from shape');
  }
}

class Circle extends Shape {
  move() {
    super.move(); //! <= in case we want to use the parent method
    console.log('moving from circle');
  }
}

const c = new Circle();
