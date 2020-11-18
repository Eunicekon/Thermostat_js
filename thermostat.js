class Thermostat{
  constructor(){
    this.DEGREES = 20;
    this.MIN_DEGREES = 10;
    // this.MAXTEMP = 32;
  };

  currentTemperature(){
    return this.DEGREES 
  };
  
  up() {
    return this.DEGREES += 1;
  };

  down() {
    if (this.minimumTemp()){
      return
    }
    return this.DEGREES -= 1;
  };

  minimumTemp() {
    return this.DEGREES === this.MIN_DEGREES;
  }

  // powerOn(){
  //   return this.MIN += 15;
  // }

  // powerOff(){
  //   return this.MIN += 22;
  // }

};
module.exports = Thermostat; 