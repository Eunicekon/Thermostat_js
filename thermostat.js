class Thermostat{
  constructor(){
    this.DEGREES = 20;
    this.MIN_DEGREES = 10;
    this.isPowerSave = true;
  };

  currentTemperature(){
    return this.DEGREES 
  };
  
  up() {
    return this.DEGREES += 1;
  };

  down() {
    if (this.isMinimumTemp()){
      return;
    }
    return this.DEGREES -= 1;
  };

  isMinimumTemp() {
    return this.DEGREES === this.MIN_DEGREES;
  }

  isPowerSaveOn(){
    return this.isPowerSave === true;
  }

  turnPowerSaveOff(){
    return this.isPowerSave = false;
  }

  turnPowerSavingOn(){
    this.isPowerSave = true;
  }

};
module.exports = Thermostat; 