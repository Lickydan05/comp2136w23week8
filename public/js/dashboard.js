"use strict";

const $ = (selector) => document.querySelector(selector);

const postalRegEx =
  /^[ABCDEFGHIJKLMNOPQRSTUVWXY]\d[ABCDEFGHIJKLMNOPQRSTUVWXY][ -]?\d[ABCDEFGHIJKLMNOPQRSTUVWXY]\d$/i;

const onReset = (evt) => {
  $("#notifications").checked = true;
  $("#eco").checked = true;
  $("#temperature").checked = 21;
  $("#location").checked = "L7W 4T8";
  
  evt.preventDefault();
};

const onSubmit = (evt) => {

  let notificationsOn = $("#notifications").checked;

$("#setting_notifications").textContent = notificationsOn ? "On" : "Off";


  let lightingModeOptions = document.querySelectorAll("[name='lighting_mode']");

  for (let i = 0; i < lightingModeOptions.length; i++){
    if(lightingModeOptions[i].checked){
      $("#setting_lighting_mode").textContent = lightingModeOptions[i].value;
    };

  }
  let location = $("#location").value;

  if(postalRegEx.test(location)){
    $("#setting_location").textContent = location;
  } else{
    $("#setting_location").textContent = "Please set a properly 'X0X 0X0' formatted address."
  }

  let temp = $("#temperature").value;
  
  if (typeof temp == "string"){
    $("#setting_temperature").textContent = temp;
    if (temp > 30) {
      $("#setting_temperature").textContent = "The maximum temperature is 30, please choose a lower temperature";
    } else if (temp < 5) {
      $("#setting_temperature").textContent = "The minimum temperature is 5, please choose a higher temperature";
    }
  } else {
    $("#setting_temperature").textContent = "This is not a number, please select a valid number for your temperature";
  }
  //TODO:: Validate the temperature by checking the range and if it's a number
  //TODO:: Display an error if not valid

  evt.preventDefault();
};

document.addEventListener("DOMContentLoaded", () => {
  $("#date_display").textContent = new Date().toDateString();
  $("#reset_form").addEventListener("reset", onReset);
  $("#update_settings").addEventListener("click", onSubmit);
});
