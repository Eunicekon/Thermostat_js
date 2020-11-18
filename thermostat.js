class Thermostat{
  constructor(){
    this.degrees = 20
    this.MIN = 10;
  };

  currentTemperature(){
    return this.degrees 
  };
  
  up() {
    this.degrees += 1;
  };

  down() {
    this.degrees -= 1;
  };



};
module.exports = Thermostat; 