/* 
function Circle(radius) {
  this.radius = radius;

  this.draw = function(){
    console.log('drawing')
  }
} 
*/

class Circle {
  constructor(radius) {
    this.radius = radius;

    this.move = function() {
      //! this method will be on the object itself not on prototype
      console.log('moving');
    };
  }

  draw() {
    //! this method will be on the prototype itself
    console.log('drawing');
  }
}

let c = new Circle(5);
