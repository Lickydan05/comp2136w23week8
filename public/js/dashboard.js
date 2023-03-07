"use strict";

const $ = (selector) => document.querySelector(selector);

const postalRegEx =
  /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i;

const onReset = (evt) => {
  $("#notifications").checked = true;
  $("#eco").checked = true;
  $("#temperature").checked = 21;
  $("#location").checked = "L7W 4T8";
  
  evt.preventDefault();
};

const onSubmit = (evt) => {
  //TODO::Reset any errors before submitting

  //TODO:: Set notifications since it doesn't need to be validated
  let notificationsOn = $("#notifications").checked;

$("#setting_notifications").textContent = notificationsOn ? "On" : "Off";


  //TODO:: Set lighting mode with a for loop since it doesn't need to be validated
  let lightingModeOptions = document.querySelectorAll("[name='lighting_mode']");

  for (let i = 0; i < lightingModeOptions.length; i++){
    if(lightingModeOptions[i].checked){
      $("#setting_lighting_mode").textContent = lightingModeOptions[i].value;
    };

  }

  //TODO:: Validate the postal code with the Regular Expression,
  //TODO:: Display an error if not valid
  let location = $("#setting_location").value;

  if(postalRegEx.test(location)){
    // if the postal code is valid this code will run,
  } else{
    // add your logic here if the postal code is not valid
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
