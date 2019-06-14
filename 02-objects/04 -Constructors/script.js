/* const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1
  },
  draw: function() {
    console.log('draw');
  }
};
 */
//* object literals not a good way to creaat an object and duplicated if this object has atleaset 1 method

// factory function
/* function createCircle(radius) {
  return {
    radius,
    draw: function() {
      console.log('draw');
    }
  };
}

const circle = createCircle(3); */

//constructor function

function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log('drawing');
  };
}

const circle = new Circle(5);

console.log(circle);
console.log(circle.radius);
circle.draw();
