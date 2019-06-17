const Circle = function() {
  this.draw = function() {
    console.log(this);
  };
};

const circle = new Circle();
circle.draw();

const draw = circle.draw;

draw();
