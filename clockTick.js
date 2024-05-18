//Select clock hands
let secondHand = document.querySelector(".second-hand");
let secondHand2 = document.querySelector(".second2-hand");
let minuteHand = document.querySelector(".minute-hand");
let hourHand = document.querySelector(".hour-hand");

// Get current time
let date = new Date();

let seconds = date.getSeconds();
console.log(seconds, "first");
let minutes = date.getMinutes();
let hours = date.getHours();

//Current time set-up
let secondDegrees = seconds * 6;
let minuteDegrees = minutes * 6;
let hourDegrees = hours * 30;

secondHand.style.transform = `rotate(${secondDegrees}deg)`;
minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
hourHand.style.transform = `rotate(${hourDegrees}deg)`;

//Get the time ticking
function tickTime() {
  seconds = new Date().getSeconds();

  secondDegrees = (seconds / 60) * 360;
  console.log(secondDegrees);

  if (secondDegrees == 0) {
    minuteDegrees += 6;
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
  }

  if (minuteDegrees == 72) {
    hourDegrees += 6;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  }

  if (secondDegrees >= 354) {
    secondHand.style.display = "none";
    secondHand2.style.display = "block";
  }

  if (secondDegrees == 0) {
    secondHand.style.display = "none";
    secondHand2.style.display = "block";
  }

  if (secondDegrees > 0) {
    secondHand.style.display = "block";
    secondHand2.style.display = "none";
  }

  secondHand.style.transform = `rotate(${secondDegrees}deg)`;
}

setInterval(tickTime, 1000);
