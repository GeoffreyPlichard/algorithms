/////////////////
// MAKE CHANGE
/////////////////

// Write a method make_change (makeChange in JavaScript) that will determine the minimum number of coins needed to make change for a given amount in American currency.

// Coins used will be half-dollars, quarters, dimes, nickels, and pennies, worth 50¢, 25¢, 10¢, 5¢ and 1¢, respectively. 
// They'll be represented by the symbols H, Q, D, N and P (symbols in Ruby, strings in JavaScript.

// The argument passed in will be an integer representing the value in cents. 
// The return value should be a hash (an object in JavaScript) with the symbols as keys, and the numbers of coins as values. 
// Coins that are not used should not be included in the hash. If the argument passed in is 0, then the method should return an empty hash.

// Example

// makeChange(0) --> {}
// makeChange(1) --> {"P":1}
// makeChange(43) --> {"Q":1,"D":1,"N":1,"P":3}
// makeChange(91) --> {"H":1,"Q":1,"D":1,"N":1,"P":1}


// MINE

function makeChange(amount) {
  let coins = [50, 25, 10, 5, 1];
  let change = {};
  coins.map((value) => {
    let nb = 0;
    // On teste si le montant total est plus grand que la valeur de la pièce
    // Si oui on incrémente le nombre de la pièce en cours
    while(amount >= value) {
      nb += 1;
      amount -= value;
    }
    if(nb) {
      // Pour chaque pièce on rajoute sa clé et la valeur, si il y en a
      switch (value) {
        case 50:
          change["H"] = nb;
          break;
        case 25:
          change["Q"] = nb;
          break;
        case 10:
          change["D"] = nb;
          break;
        case 5:
          change["N"] = nb;
          break;
        case 1:
          change["P"] = nb;
          break;
      }
    }
  });
  return change;
}

// BEST



// CLEVER

console.log(makeChange(91));

module.exports = makeChange;

