Car.prototype = {
  height: 1400,
  long: 4900,
  carName: 'BMW'
}

function Car(color, owner) {
  this.color = color;
  this.owner = owner;
}


var car1 = new Car('pink', 'lsf');
var car2 = new Car('green', 'xqm');
console.log(car1);