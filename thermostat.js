class Thermostat{
  constructor(){
    this.DEGREES = 20;
    this.MIN_DEGREES = 10;
    this.isPowerSave = true;
    this.MAX_LIMIT_TEMP = 32;
    this.MIN_LIMIT_TEMP = 25;
    this.defaultDegrees = 20;
    this.DEGREES = this.defaultDegrees;
    this.MEDIUM_ENERGY_USAGE_LIMIT = 18;
    this.HIGH_ENERGY_USAGE_LIMIT = 25;
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
    this.DEGREES = this.defaultDegrees;
  }

  energyUsage() {
    if (this.DEGREES < this.MEDIUM_ENERGY_USAGE_LIMIT) {
      return 'low-usage';
    }
    if (this.DEGREES <= this.HIGH_ENERGY_USAGE_LIMIT) {
      return 'medium-usage';
    }
    return 'high-usage';
  }

};
module.exports = Thermostat; 