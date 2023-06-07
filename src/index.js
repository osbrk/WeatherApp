let now = new Date();
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

let weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let weekday = weekdays[now.getDay()];

let currentDay = `${weekday} ${hours}:${minutes}`;

let currently = document.querySelector("#current-day");
currently.innerHTML = `Weather on ${currentDay}, in `;

function searchCity(event) {
  event.preventDefault();
  let input = document.querySelector("#change-city");
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${input.value}`;
}
let form = document.querySelector("form");
form.addEventListener("submit", searchCity);

let currentDegrees = document.querySelector("#current-degrees");

function changeToF(event) {
  event.preventDefault();
  let cToF = currentDegrees.innerText * 1.8 + 32;
  currentDegrees.innerHTML = Math.round(cToF);
  let tempDay1 = document.getElementById("day1");
  tempDay1.innerHTML = Math.round(tempDay1.innerText * 1.8 + 32);
  let tempDay2 = document.getElementById("day2");
  tempDay2.innerHTML = Math.round(tempDay2.innerText * 1.8 + 32);
  let tempDay3 = document.getElementById("day3");
  tempDay3.innerHTML = Math.round(tempDay3.innerText * 1.8 + 32);
  let tempDay4 = document.getElementById("day4");
  tempDay4.innerHTML = Math.round(tempDay4.innerText * 1.8 + 32);
  let tempDay5 = document.getElementById("day5");
  tempDay5.innerHTML = Math.round(tempDay5.innerText * 1.8 + 32);
  let tempDay6 = document.getElementById("day6");
  tempDay6.innerHTML = Math.round(tempDay6.innerText * 1.8 + 32);
  document.getElementById("day-degrees1").textContent = "F";
  document.getElementById("day-degrees2").textContent = "F";
  document.getElementById("day-degrees3").textContent = "F";
  document.getElementById("day-degrees4").textContent = "F";
  document.getElementById("day-degrees5").textContent = "F";
  document.getElementById("day-degrees6").textContent = "F";
}
let farenheit = document.querySelector("#farenheit");
farenheit.addEventListener("click", changeToF);

function changeToC(event) {
  event.preventDefault();
  let fToC = (currentDegrees.innerText - 32) / 1.8;
  currentDegrees.innerHTML = Math.round(fToC);
  let tempDay1 = document.getElementById("day1");
  tempDay1.innerHTML = Math.round((tempDay1.innerText - 32) / 1.8);
  let tempDay2 = document.getElementById("day2");
  tempDay2.innerHTML = Math.round((tempDay2.innerText - 32) / 1.8);
  let tempDay3 = document.getElementById("day3");
  tempDay3.innerHTML = Math.round((tempDay3.innerText - 32) / 1.8);
  let tempDay4 = document.getElementById("day4");
  tempDay4.innerHTML = Math.round((tempDay4.innerText - 32) / 1.8);
  let tempDay5 = document.getElementById("day5");
  tempDay5.innerHTML = Math.round((tempDay5.innerText - 32) / 1.8);
  let tempDay6 = document.getElementById("day6");
  tempDay6.innerHTML = Math.round((tempDay6.innerText - 32) / 1.8);

  document.getElementById("day-degrees1").textContent = "C";
  document.getElementById("day-degrees2").textContent = "C";
  document.getElementById("day-degrees3").textContent = "C";
  document.getElementById("day-degrees4").textContent = "C";
  document.getElementById("day-degrees5").textContent = "C";
  document.getElementById("day-degrees6").textContent = "C";
}
let celsius = document.querySelector("#celsius");
celsius.addEventListener("click", changeToC);
