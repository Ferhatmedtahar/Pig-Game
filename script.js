"use strict";
let pic = document.querySelector(".dice");
let generator = document.querySelector(".btn--roll");
let player = document.querySelector(".btn--hold");
let reset = document.querySelector(".btn--new");

let current1 = 0;
let current2 = 0;
let scorep1 = 0;
let scorep2 = 0;
//select score and the cuurent score for the player1
let score1 = document.querySelector("#score--0");
score1.textContent = "0";
let p1Current = document.getElementById("current--0");
//select score and the cuurent score for the player2

let score2 = document.getElementById("score--1");
score2.textContent = "0";
let p2Current = document.getElementById("current--1");
//start now
let turn = document.querySelectorAll(".player");

let number = Math.round(Math.random() * 6);
console.log(number);
//what the generator event listner does

player.addEventListener("click", function () {
  if (turn[0].classList.contains("player--active")) {
    turn[0].classList.remove("player--active");
    turn[1].classList.add("player--active");
    p1Current.textContent = "0";
    scorep1 += current1;
    current1 = 0;
    score1.textContent = scorep1;
    number = Math.round(Math.random() * 6);
  } else {
    turn[1].classList.remove("player--active");
    turn[0].classList.add("player--active");
    p2Current.textContent = "0";
    scorep2 += current2;
    current2 = 0;
    score2.textContent = scorep2;
    number = Math.round(Math.random() * 6);
  }
});

//generate the dicec and current score and the score for both players
generator.addEventListener("click", function () {
  if (turn[0].classList.contains("player--active")) {
    number = Math.round(Math.random() * 6);
    if (number === 1) {
      pic.src = "dice-1.png";
      current1 = 0;
      p1Current.textContent = current1;
      turn[0].classList.remove("player--active");
      turn[1].classList.add("player--active");
    }
    if (number === 2) {
      pic.src = "dice-2.png";
      current1 += number;
      p1Current.textContent = current1;
    }
    if (number === 3) {
      pic.src = "dice-3.png";
      current1 += number;
      p1Current.textContent = current1;
    }
    if (number === 4) {
      pic.src = "dice-4.png";
      current1 += number;
      p1Current.textContent = current1;
    }
    if (number === 5) {
      pic.src = "dice-5.png";
      current1 += number;
      p1Current.textContent = current1;
    }
    if (number === 6) {
      pic.src = "dice-6.png";
      current1 += number;
      p1Current.textContent = current1;
    }
  } else {
    number = Math.round(Math.random() * 6);
    if (number === 1) {
      pic.src = "dice-1.png";
      current2 = 0;
      p2Current.textContent = current2;
      turn[1].classList.remove("player--active");
      turn[0].classList.add("player--active");
    }
    if (number === 2) {
      pic.src = "dice-2.png";
      current2 += number;
      p2Current.textContent = current2;
    }
    if (number === 3) {
      pic.src = "dice-3.png";
      current2 += number;
      p2Current.textContent = current2;
    }
    if (number === 4) {
      pic.src = "dice-4.png";
      current2 += number;
      p2Current.textContent = current2;
    }
    if (number === 5) {
      pic.src = "dice-5.png";
      current2 += number;
      p2Current.textContent = current2;
    }
    if (number === 6) {
      pic.src = "dice-6.png";
      current2 += number;
      p2Current.textContent = current2;
    }
  }
});

reset.addEventListener("click", function () {
  score1.textContent = "0";
  score2.textContent = "0";
  p1Current.textContent = "0";
  p2Current.textContent = "0";
  current2 = 0;
  current1 = 0;
  scorep2 = 0;
  scorep1 = 0;
});
