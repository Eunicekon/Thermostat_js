const { test, expect } = require('@jest/globals');
const Thermostat = require('./thermostat');

let thermostat;

beforeEach(async () => {
 thermostat = new Thermostat();
});

test('Thermostat starts at 20 degrees', ()=>{
  expect(thermostat.currentTemperature()).toBe(20);
});

test('You can increase the temperature with an up function', ()=>{
  thermostat.up()
  expect(thermostat.currentTemperature()).toBe(21);
});

test('You can decrease the temperature with a down function', ()=>{
  thermostat.down()
  expect(thermostat.currentTemperature()).toBe(19);
});

test('The minimum temperature is 10 degrees', ()=>{
  for (let i = 0; i < 11; i++){
    thermostat.down();
  }
  expect(thermostat.currentTemperature()).toBe(10);
});

test('Is power saving mode is on', ()=>{
  expect(thermostat.isPowerSaveOn()).toBe(true);
});

test('Is power saving mode is off', ()=>{
  thermostat.turnPowerSaveOff();
  expect(thermostat.isPowerSaveOn()).toBe(false);
});

test('turn power saving back on', () =>{
  thermostat.turnPowerSaveOff();
  expect(thermostat.isPowerSaveOn()).toBe(false);
  thermostat.turnPowerSavingOn();
  expect(thermostat.isPowerSaveOn()).toBe(true);
});

// Turn temp to 25 degrees when Power saving Mode is activated
// Turn temp to 32 degrees when Power saving Mode is off

test('Turn temp to 25 degrees when Power saving Mode is activated', () =>{
  for (var i = 0; i < 6; i++){
    thermostat.up()
  }
  expect(thermostat.currentTemperature()).toBe(25)
})

test('If power saving mode is off, the maximum temperature is 32 degrees', () =>{
  thermostat.turnPowerSaveOff();
  for (var i = 0; i < 13; i++){
    thermostat.up()
  }
  expect(thermostat.currentTemperature()).toBe(32)
})