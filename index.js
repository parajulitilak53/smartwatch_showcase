var blackColor = document.getElementById("color-1");
var redColor = document.getElementById("color-2");
var purpleColor = document.getElementById("color-3");
var pinkColor = document.getElementById("color-4");
var watchImage = document.getElementById("watch");
var date = new Date();
// var timeString =
//   date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
var dateTime = document.getElementById("time");
var timeText = document.getElementById("currentTime");
// var timeShow = document.getElementById("time-text");
var heartRate = document.getElementById("heart-rate");
var rateHeart = document.getElementById("heartRate-wrapper");

function time() {
  var today = new Date();
  document.getElementById("currentTime").innerHTML =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  setTimeout(function () {
    time();
  }, 1000);
}
time();

blackColor.addEventListener("click", function () {
  watchImage.src = "assets/iOeUBV7.png";
  watchImage.alt = "smart-watch-black";
});

redColor.addEventListener("click", function () {
  watchImage.src = "assets/PTgQlim.png";
  watchImage.alt = "smart-watch-red";
});

purpleColor.addEventListener("click", function () {
  watchImage.src = "assets/xSIK4M8.png";
  watchImage.alt = "smart-watch-purple";
});

pinkColor.addEventListener("click", function () {
  watchImage.src = "assets/Zygu7I3.png";
  watchImage.alt = "smart-watch-pink";
});

dateTime.addEventListener("click", function () {
  rateHeart.style.display = "none";
  timeText.style.display = "initial";
  timeShow.innerHTML = timeString;
});

heartRate.addEventListener("click", function () {
  timeText.style.display = "none";
  rateHeart.style.display = "initial";
  // rateHeart.innerHTML = rateHeart;
});

let randomNum = document.getElementById("heartRate");

function randomNumber() {
  randomNum.innerHTML = Math.floor(Math.random() * 51) + 80;
  console.log(randomNum.innerHTML);
}
randomNumber();
