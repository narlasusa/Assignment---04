let startNumber = parseInt(prompt("Enter a number to start the countdown:"));

// Check if the input is a valid, non-negative number
if (isNaN(startNumber) || startNumber < 0) {
  // console.log("Invalid input. Please enter a valid, non-negative number.");
    alert("Invalid input. Please enter a valid, non-negative number.");

} else {
  // Use a for loop to count down from the user's number to 0
  for (let i = startNumber; i >= 0; i--) {
    // console.log(i);
    alert(i);

  }
  // console.log("Countdown finished!");
    alert("Countdown finished!");
    
}