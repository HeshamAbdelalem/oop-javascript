//* Whats the four core concepts in OOP?
//# 1- Encapsulation -> reduce complecity + increase reusabillity
//Note: in OOP you group related variables and functions that operate on them into objects and this is what we call encapsulation
// this is how we do it in oop
//NOTE: the best functions those with no parameters
let employee = {
  baseSalary: 30_000,
  overtime: 10,
  rate: 20,
  getWage: function() {
    return this.baseSalary + this.overtime * this.rate;
  }
};
employee.getWage();

//and this is how we do it without OOP

let baseSalary = 30_000;
let overtime = 10;
let rate = 20;

function getWage(baseSalary, overtime, rate) {
  return baseSalary + overtime * rate;
}

//? ــــــــــــــــــــــــــــــــــــــــــــــــــــــــــ
//# 2- Abstraction -> reduce complexity + isolate impact of changes
//Note: we can hide some of the properties and methods from the outside and this gives us a couple of benefits: 1- simpler interface, 2- reduce the impact of change

//? ـــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــ
//# 3- Inheritance -> eliminate redundant code
//Note: is a mechanism that allows you to elimitate redundant code

//? ـــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــ
//# 4-Polymorphism -> refactor ugly switch/case statements
//Note: Poly means Many, Morphism means Form , In OOP polymorphism is a technique that allows you to get rid of long if..else or switch..case statements
