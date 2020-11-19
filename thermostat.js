class Thermostat{
  constructor(){
    this.DEGREES = 20;
    this.MIN_DEGREES = 10;
    this.isPowerSave = true;
    this.MAX_LIMIT_TEMP = 32;
    this.MIN_LIMIT_TEMP = 25;
  };

  currentTemperature(){
    return this.DEGREES 
  };
  
  up() {
    if(this.isMaximumTem()){
      return;
    }
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

  isMaximumTem(){
    if (this.isPowerSaveOn() === false){
      return this.DEGREES === this.MAX_LIMIT_TEMP;
    }
    return this.DEGREES === this.MIN_LIMIT_TEMP;
  }

  resetDegrees(){
    this.DEGREES = 20;
  }

};
module.exports = Thermostat; 