//Select clock hands
let secondHand = document.querySelector(".second-hand");
// let minuteHand = document.querySelector(".minute-hand");
// let hourHand = document.querySelector(".hour-hand");

//set the time
function setDate() {
  const date = new Date();

  let seconds = date.getSeconds();
  //   let minutes = date.getMinutes();
  //   let hours = date.getHours();

  let secondDegrees = (seconds / 60) * 360;
  console.log(secondDegrees);
  //   let minuteDegrees = ( / 3600) * 360;
  //   console.log(minuteDegrees);
  //   let hourDegrees = (secondDegrees / 216000) * 360;
  //   console.log(hourDegrees);

  secondHand.style.transform = `rotate(${secondDegrees}deg)`;
  //   minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
  //   hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

// setInterval(setDate, 1000);
