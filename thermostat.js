class Thermostat{
  constructor(){
    this.degrees = 20;
    this.MIN = 10;
    this.powerOn = true;
    this.MAXTEMP = 32;

  };

  currentTemperature(){
    return this.degrees 
  };
  
  up() {
    return this.degrees += 1;
  };

  down() {
    return this.degrees -= 1;
  };

  minimumTemp() {
    return this.MIN;
  }

  maximumTemp(){
    return this.MAXTEMP;
  }

};
module.exports = Thermostat; 