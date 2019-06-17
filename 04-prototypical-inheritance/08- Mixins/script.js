const canEat = {
  eat: function() {
    console.log('eating');
  }
};

const canWalk = {
  walk: function() {
    console.log('walking');
  }
};

const canSwim = {
  swim: function() {
    console.log('swimming');
  }
};

function Person() {}
function Fish() {}

//* we can simplify this code with a function
/* 
Object.assign(Person.prototype, canEat, canWalk);
Object.assign(Fish.prototype, canSwim, canEat);
 */
function mixins(targetConstructor, ...sources) {
  //! ...sources => rest operator
  Object.assign(targetConstructor.prototype, ...sources); //! ...sources => spread operator
  Person;
}

mixins(Person, canEat, canWalk);
mixins(Fish, canEat, canSwim);

let hisham = new Person();
console.log('TCL: hisham', hisham);

let goldenFish = new Fish();
console.log('TCL: goldenFish', goldenFish);
