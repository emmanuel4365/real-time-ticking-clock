//Select clock hands
let secondHand = document.querySelector(".second-hand");
let secondHand2 = document.querySelector(".second2-hand");
let minuteHand = document.querySelector(".minute-hand");
let minuteHand2 = document.querySelector(".minute2-hand");
let hourHand = document.querySelector(".hour-hand");
let hourHand2 = document.querySelector(".hour2-hand");

// Get current time
let date = new Date();

let seconds = date.getSeconds();
let minutes = date.getMinutes();
let hours = date.getHours();
let additionalHourDegrees = minutes * 0.5;

//Current time set-up
let secondDegrees = seconds * 6;
let minuteDegrees = minutes * 6;
let hourDegrees = hours * 30 + additionalHourDegrees;

secondHand.style.transform = `rotate(${secondDegrees}deg)`;
minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
hourHand.style.transform = `rotate(${hourDegrees}deg)`;

//Get the time ticking
function tickTime() {
  seconds = new Date().getSeconds();

  secondDegrees = (seconds / 60) * 360;

  if (secondDegrees == 0) {
    minuteDegrees += 6;
    hourDegrees += 0.5;

    if (minuteDegrees > 0) {
      minuteHand.style.display = "block";
      minuteHand2.style.display = "none";
      minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
    }

    if (hourDegrees > 0) {
      hourHand.style.display = "block";
      hourHand2.style.display = "none";
      hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    }

    // console.log(secondDegrees);
    // console.log(minuteDegrees);
    // console.log(hourDegrees);
  }

  if (minuteDegrees == 360) {
    minuteHand.style.display = "none";
    minuteHand2.style.display = "block";
    minuteDegrees = 0;
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
  }

  if (hourDegrees == 360) {
    hourHand.style.display = "none";
    hourHand2.style.display = "block";
    hourDegrees = 0;
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
