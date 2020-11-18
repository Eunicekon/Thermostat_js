const { test, expect } = require('@jest/globals');
const Thermostat = require('./thermostat');

let thermostat;

beforeEach(async () => {
 thermostat = new Thermostat;
});

test('Thermostat starts at 20 degrees', ()=>{
  expect(thermostat.currentTemperature()).toBe(20);
});

test('You can increase the temperature with an up function', ()=>{
  thermostat.up()
  expect(thermostat.currentTemperature()).toBe(21);
});

test('You can decrease the temperature with an down function', ()=>{
  thermostat.down()
  expect(thermostat.currentTemperature()).toBe(19);
});

test('The minimum temperature is 10 degrees', ()=>{
  expect(thermostat.minimumTemp()).toEqual(10);
});