class Thermostat{
  constructor(){
    this.degrees = 20;
    this.MIN = 10;
    // this.powerOn = true;
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

  powerOn(){
    return this.MIN += 15;
  }
  // powerSaving(){
  //   // return this.MAXTEMP;

  //   // return this.powerOn = false;
  //   if (this.powerOn == true){
  //     return this.MAXTEMP -= 7;
  //   }else if (this.powerOn == false){
  //     return this.MAXTEMP;
  //   }
  // };

};
module.exports = Thermostat; 