for (let i = 1; i <= 100; i++) {
  // Check for multiples of both 3 and 5 first
  // The "and" operator (&&) checks if both conditions are true
  if (i % 3 === 0 && i % 5 === 0) {
    // console.log("Marco! Polo!");
    prompt("Marco! Polo!");

  } 
  // Then check for multiples of 3
  else if (i % 3 === 0) {
    // console.log("Marco!");
    prompt("Marco!");

  } 
  // Then check for multiples of 5
  else if (i % 5 === 0) {
    //  console.log("Polo!");
    prompt("Polo!");

  } 
  // Otherwise, print the number
  else {
    // console.log(i);
    prompt(i);
    
  }
}