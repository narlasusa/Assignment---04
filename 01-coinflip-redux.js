let coinFlip = Math.random(); 
prompt('Welcome to the coin flip game!');
let numberOfTrysInput = prompt('How many times do you want to flip the coin?'); 
let numberOfTrys = parseInt(numberOfTrysInput,10);

for (let i = 0; i < numberOfTrys; i++) {
  coinFlip = Math.random() < 0.5 ? 'heads' : 'tails';
  alert(coinFlip);
}
  
