let coinFlip;

// A variable to track the number of "Heads" in a row
let headStreak = 0;

// Inform the user that the game is starting
alert("Welcome to the coin flip streak game! Let's see how many Heads you can get.");

// Step 2: Create a do...while loop.
do {
    // Step 3: Within the loop, assign a randomly generated number to coinFlip.
    // The expression below generates either 0 or 1.
    coinFlip = Math.floor(Math.random() * 2);
    prompt('current streak: ' + headStreak + ' Heads. Press OK to flip again.');
    
    // Step 4: Use a conditional statement to check the result.
    if (coinFlip === 0) {
        alert("Heads");
        headStreak++; // Increment the streak counter for each "Heads"
        prompt(`Current streak: ${headStreak} Heads. Press OK to flip again.`);

    } else {
        alert("Tails");
        // The game ends on "Tails," so we can report the final streak.
        alert(`The streak is over! You had a streak of ${headStreak} Heads.`);
        // Since the game ends here, we reset the streak to 0 (optional, but good practice).
        headStreak = 0;
    }

// Step 5: Set the do...while condition to end once the coinFlip becomes "Tails".
// In this case, "Tails" is represented by the number 1.
} while (coinFlip === 0);


