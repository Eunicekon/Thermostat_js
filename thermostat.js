class Thermostat{
  constructor(){
    this.degrees = 20;
    this.MIN = 10;
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

};
module.exports = Thermostat; 