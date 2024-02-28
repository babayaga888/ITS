
// Set the delay in milliseconds (5 minutes = 300000 milliseconds)
let delay = 300000 ;
//300000
// Get the current time
let startTime = new Date().getTime();

// Get the button element
var button = document.getElementById('button');

// Hide the button initially
button.style.display = "none";

// Check the elapsed time every 1000 milliseconds (1 second)
setInterval(function() {
  let elapsedTime = new Date().getTime() - startTime;
  if (elapsedTime >= delay) {
    // Show the button
    button.style.display = "block";
  }
}, 1000);
