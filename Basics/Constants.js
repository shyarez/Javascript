// Constants :-- variables whos values are unchanged

const PI = 3.14;
let radius;
let circumference;

document.getElementById("mySumit") = function(){
    radius = document.getElementById("myText").ariaValueMax;
    radius = Number(radius);
    circumference = 2*PI*radius;
    document.getElementById("myH3").textContent = circumference + "cm";
}
