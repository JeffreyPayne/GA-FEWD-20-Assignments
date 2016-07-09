"use strict";

function main () {

  var box1 = document.getElementById("box1");
  var box2 = document.getElementById("box2");
  var box3 = document.getElementById("box3");
  var box4 = document.getElementById("box4");


  box1.addEventListener("click", clickedbox1);
  box2.addEventListener("click", clickedbox2);
  box3.addEventListener("click", clickedbox3);
  box4.addEventListener("click", clickedbox4);

}


function clickedbox1 () {
  var box1 = document.getElementById("box1");
  var box2 = document.getElementById("box2");
  var box3 = document.getElementById("box3");
  var box4 = document.getElementById("box4");

  box1.style.transform = "slidedown(50px)";
  box2.style.transform = "rotate(67.5deg)";
  box3.style.transform = "rotate(22.5deg)";
  box4.style.transform = "rotate(45deg)";
}


function clickedbox2 () {
  var box1 = document.getElementById("box1");
  var box2 = document.getElementById("box2");
  var box3 = document.getElementById("box3");
  var box4 = document.getElementById("box4");

  box1.style.transform = "rotate(22.5deg)";
  box2.style.transform = "rotate(45deg)";
  box3.style.transform = "rotate(45deg)";
  box4.style.transform = "rotate(67.5deg)";
}


function clickedbox3 () {
  var box1 = document.getElementById("box1");
  var box2 = document.getElementById("box2");
  var box3 = document.getElementById("box3");
  var box4 = document.getElementById("box4");

  box1.style.transform = "rotate(67.5deg)";
  box2.style.transform = "rotate(45deg)";
  box3.style.transform = "rotate(45deg)";
  box4.style.transform = "rotate(22.5deg)";
}


function clickedbox4 () {
  var box1 = document.getElementById("box1");
  var box2 = document.getElementById("box2");
  var box3 = document.getElementById("box3");
  var box4 = document.getElementById("box4");

  box1.style.transform = "rotate(45deg)";
  box2.style.transform = "rotate(22.5deg)";
  box3.style.transform = "rotate(67.5deg)";
  box4.style.transform = "rotate(45deg)";
}


window.addEventListener("load", main);