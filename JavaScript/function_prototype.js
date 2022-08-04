function Car(){
    this.numberOfDoors= 5;
    this.brand= "Toyota";
    //this.start= function(){};
    //this.stop= function(){};
  }
  Car.prototype.start= function(){};
  Car.prototype.stop= function(){};
  
  var luxuryCar= new Car();
  
  //let´s add a new property to the Car function prototype
  Car.prototype.author="Mairi";