/////////////////////
// PERSISTENT BUGGER
/////////////////////



// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.


// EXAMPLE

// persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4

// TRICK

// The problem of recursion is I can't keep the counter value so I use closure




// MY SOLUTION

function persistence(num){
    // Use a closure to persist the counter value while using recursion
    function closure(n) {
        // Don't update the counter if 1 digit
        if(n.toString().length <= 1) {
            return;
        } else {
            // Update the counter and use recursion to update the number
            let newValue = n.toString().split('').reduce((accumulator, currentValue) => {
                return accumulator * currentValue;
            });
            cpt +=1;
            return closure(newValue);
        }
    }
  
    let cpt = 0;
    closure(num);
    return cpt;
  }
  
  // BEST
  
//   function persistence(num) {
//     var times = 0;
    
//     num = num.toString();
    
//     while (num.length > 1) {
//         times++;
//         num = num.split('').map(Number).reduce((a, b) => a * b).toString();
//     }
    
//     return times;
//   }
  
  // CLEVER
  
//   const persistence = num => {
//     return `${num}`.length > 1 
//         ? 1 + persistence(`${num}`.split('').reduce((a, b) => a * +b)) 
//         : 0;
//   }
  
  module.exports = persistence;