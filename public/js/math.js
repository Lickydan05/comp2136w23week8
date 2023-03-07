"use strict";

const $ = (selector) => document.querySelector(selector);

const division = ()=>{
    var div1 = $("#division_1").value;
    var div2 = $("#division_2").value;
    var result = div1/div2;

    $("#division_result").value = result.toFixed(2);
    
    $("#int_division_result").value = parseInt(result);

    $("#floor_division_result").value = Math.floor(result);

    $("#ceiling_division_result").value = Math.ceil(result);

    $("#rounded_division_result").value = Math.round(result);
};

const modulo = ()=>{
    var mod1 = $("#modulo_1").value;
    var mod2 = $("#modulo_2").value;
    var mod_result = mod1 % mod2

    $("#modulo_result").value = mod_result
};

const forLoopIteration = ()=>{
    let limit = $("#for_limit").value;
    let increments = parsefloat($("#for_increment").value);
    let direction = $("#for_increment_direction").value;
    let counter = parsefloat($("#for_counter").value);

    if (direction === "negative") {
        increments = increments * -1
    }; 

    for (let iterator = 0; iterator < limits; iterator++){
        counter = counter + increments;
    };
    
    $("#for_result").value = counter;



};

//Add all calculation functions
document.addEventListener("DOMContentLoaded", () => {
    $("#division_btn").addEventListener("click", division);
    $("#modulo_btn").addEventListener("click", modulo);
    $("#for_loop_btn").addEventListener("click", forLoopIteration);
});
