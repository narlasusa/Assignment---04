let coinFlip;
let streak = 0;
prompt('Welcome to the coin flip game!'); 

do {coinFlip = Math.random() < 0.5 ? 'heads' : 'tails'
    if (coinFlip === 'heads')
        alert ('heads' + streak) 
    else 
        alert ('tails' + streak);
    streak++;
    } while (coinFlip === 'tails');

