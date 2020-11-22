let tempUp = document.getElementById("temp-up");
let tempDown = document.getElementById("temp-down");
let tempReset = document.getElementById("temp-reset");
let powerSaveOn = document.getElementById("powersaving-on");
let powerSaveOff = document.getElementById("powersaving-off");
let greenButton = document.getElementById("green-savingPlanet");

let defaultTemp = 20;
let minTemp = 25;
let maxTemp = 32;
let yellowButton = 25;
let redButton = 32;

tempUp.addEventListener('click', function(event){
  tempUp.style.color = "green";
});

tempDown.addEventListener('click', function(event){
  tempDown.style.color = "red";
});

powerSaveOn.addEventListener('click', function(event){
  powerSaveOn.style.color = "green";
});

powerSaveOff.addEventListener('click', function(event){
  powerSaveOff.style.color = "red";
});

let increaseTemp = defaultTemp;
function upClick(){
  increaseTemp = defaultTemp += 1;
  document.getElementById("increase").innerHTML = increaseTemp;
};

let decreaseTemp = increaseTemp;
function downClick(){
  decreaseTemp = increaseTemp -= 1;
  document.getElementById("increase").innerHTML = decreaseTemp;
};

let resetButton = defaultTemp;
function resetTemperature(){
  resetButton;
  document.getElementById("increase").innerHTML = resetButton;
};

let saveThePlanet = minTemp;
function turnOnPowerSave(){
  saveThePlanet;
  document.getElementById("increase").innerHTML = saveThePlanet;
};

let itsTooHot = maxTemp;
function turnOffPowerSave(){
  itsTooHot;
  document.getElementById("increase").innerHTML = itsTooHot;
};

greenButton.addEventListener('click', function(event){
  let settingGreenLight = 18;
  function greenBecauseLow(){
    if (settingGreenLight <= 24){
      return "You are still on a low saving mode!";
      greenButton.style.color = "green";
    }
   }
  });


