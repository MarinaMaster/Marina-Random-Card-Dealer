/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  //console.log("Hello Rigo from the console!");
  //};
  let images = document.querySelectorAll(".images");
  let number = document.getElementById("number");

  const button = document.querySelector(".button");
  button.addEventListener("click", event => {
    list();
  });

  function list() {
    const suits = ["♦", "♥", "♠", "♣"];
    const numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
    const randomSuitIndex = Math.floor(Math.random() * suits.length);
    for (const image of images) {
      image.textContent = suits[randomSuitIndex];
      image.style.color =
        image.textContent === "♦" || image.textContent === "♥"
          ? "red"
          : "black";
    }

    const randomNumbersIndex = Math.floor(Math.random() * numbers.length);
    number.textContent = numbers[randomNumbersIndex];
  }
  let timer;
  let startTime = document.querySelector(".timer");
  (function() {
    let seconds = 1;
    timer = setInterval(() => {
      startTime.innerHTML = "00:" + seconds;
      seconds++;
    }, 1000);
  })();

  const clickOnTime = setInterval(() => {
    list();
  }, 10000);

  function weightConverter(valNum) {
    document.getElementById("inputWeight").innerHTML = valNum;
  }
};
