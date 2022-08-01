//function used to buyld ("constructor") an object
function Car(numberOfDoors, brand){
  this.numberOfDoors= numberOfDoors;
  this.brand= brand;
}
// object creation using the "new" operator on the function call
var myNewCar= new Car(5, "Toyota");

var literalCar = {
  numberofDoors : 4,
  brand : "nissan",
};

var luxuryCar= new Car(5, "mercedes")