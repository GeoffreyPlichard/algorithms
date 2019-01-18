////////////////
// DELETE DIGIT
////////////////



// Given an integer n, find the maximal number you can obtain by deleting exactly one digit of the given number.

// EXAMPLE

// For n = 152, the output should be 52;
// For n = 1001, the output should be 101.




// MY SOLUTION

function deleteDigit(n) {
  let originalArray = n.toString().split('');
  let len = n.toString().length;
  let result = 0;

  for(let i = 0; i < len; i++) {
    // Don't want to reuse the spliced array so create a new instance
    let newArrayInstance = Array.from(originalArray);
    newArrayInstance.splice(i, 1);
    
    if(result < parseInt(newArrayInstance.join(""))) {
      result = parseInt(newArrayInstance.join(""));
    }
  }

  return result;
}

// BEST



// CLEVER

// function deleteDigit(n) {
//   const s = String(n)
//   return Math.max(...Array.from(s, (_, i) => s.slice(0, i) + s.slice(i + 1)))
// }


// console.log(deleteDigit(152));
module.exports = deleteDigit;
