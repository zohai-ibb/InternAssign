let targetTime = new Date().getTime() + 10 * 60 * 1000;

function updateTimer() {
  // Get the current time
  let currentTime = new Date().getTime();

  // Calculate the remaining time
  let remainingTime = targetTime - currentTime;

  // If the remaining time is less than or equal to 0, clear the interval and display "Time's up!"
  if (remainingTime <= 0) {
    clearInterval(timerInterval);
    document.getElementById("timer").innerHTML = "Time's up!";
    return;
  }

  // Calculate minutes and seconds
  let minutes = Math.floor((remainingTime / (1000 * 60)) % 60);
  let seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

  // Display the remaining time
  document.getElementById("timer").innerHTML = `${minutes}:${
    seconds < 10 ? "0" : ""
  }${seconds}`;
}

// Update the timer every second
let timerInterval = setInterval(updateTimer, 1000);

let hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function () {
  let navBar = document.querySelector(".nav-bar");
  navBar.classList.toggle("active");
});

function closeForm() {
  document.getElementById("delayedForm").classList.remove("show");
  setTimeout(function () {
    document.getElementById("delayedForm").style.display = "none";
  }, 10); // Delay to hide form after transition
}

setTimeout(function () {
  document.getElementById("delayedForm").style.display = "block";
  document.getElementById("delayedForm").classList.add("show");
}, 15000); // Show form after 15 seconds
