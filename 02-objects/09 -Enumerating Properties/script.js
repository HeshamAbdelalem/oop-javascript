function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log('Drawing inside constructor objct');
  };
}

const circle = new Circle(10);

for (let key in circle) {
  console.log(key, circle[key]);

  if (typeof key !== 'function') {
    console.log(key, circle[key]);
  }
}

const keys = Object.keys(circle);
console.log('TCL: keys', keys);

if ('radius' in circle) {
  console.log('Yes, Radius in circle');
}
