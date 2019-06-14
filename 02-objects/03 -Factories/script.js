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

function createCircle(radius) {
  return {
    radius,
    draw: function() {
      console.log(draw);
    }
  };
}

const circle = createCircle(3);

console.log(circle);
console.log(circle.radius);
// console.log(circle.draw());
