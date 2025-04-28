// 1. Car constructor
function Car(make, model) {
  this.make = make;
  this.model = model;
}

// Add getMakeModel() to Car’s prototype
Car.prototype.getMakeModel = function() {
  return this.make + ' ' + this.model;
};


// 2. SportsCar constructor
function SportsCar(make, model, topSpeed) {
  // Inherit make & model
  Car.call(this, make, model);
  // Own property
  this.topSpeed = topSpeed;
}

// Inherit Car’s prototype
SportsCar.prototype = Object.create(Car.prototype);
// Correct the constructor pointer
SportsCar.prototype.constructor = SportsCar;

// Add getTopSpeed() to SportsCar’s prototype
SportsCar.prototype.getTopSpeed = function() {
  return this.topSpeed;
};


// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
