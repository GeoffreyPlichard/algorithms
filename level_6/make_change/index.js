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




// My Solution

/**
 * For each coin value (50, 20...) I test if the value to change (ex: 91) is bigger than the coin value
 * If true I increment the counter for this coin value and push the key : value object (ex with half-dollar 50: "H":1)
 */
function makeChange(numberToChange) {
  const coins = [50, 25, 10, 5, 1];
  let change = {};
  coins.map((coinValue) => {
    let counter = 0;
    while(numberToChange >= coinValue) {
      counter += 1;
      numberToChange -= coinValue;
    }
    if(counter) {
      switch (coinValue) {
        case 50:
          change["H"] = counter;
          break;
        case 25:
          change["Q"] = counter;
          break;
        case 10:
          change["D"] = counter;
          break;
        case 5:
          change["N"] = counter;
          break;
        case 1:
          change["P"] = counter;
          break;
      }
    }
  });
  return change;
}


module.exports = makeChange;

