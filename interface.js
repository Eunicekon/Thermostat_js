let tempUp = document.getElementById("temp-up");
let tempDown = document.getElementById("temp-down");
let tempReset = document.getElementById("temp-reset");
let powerSaveOn = document.getElementById("powersaving-on");
let powerSaveOff = document.getElementById("powersaving-off");

let startTemp = 10;
let defaultTemp = 20;
let minTemp = 25;
let maxTemp = 32;
let resetTemp = 0;
let powerOn = " ";
let powerOff = " ";

tempUp.addEventListener('click', function(event){
  tempUp.style.color = "green";
});

tempDown.addEventListener('click', function(event){
  tempDown.style.color = "red";
});

let increaseTemp = startTemp;
function upClick(){
  increaseTemp += 1;
  document.getElementById("increase").innerHTML = increaseTemp;
};

let decreaseTemp = increaseTemp;
function downClick(){
  decreaseTemp = increaseTemp -= 1;
  document.getElementById("increase").innerHTML = decreaseTemp;
}

let resetButton = startTemp;
function resetTemperature(){
  resetButton = startTemp;
  document.getElementById("increase").innerHTML = resetButton;
}