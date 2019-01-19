//////////////////
// Reverse Letter
//////////////////


// Given a string str, reverse it omitting all non-alphabetic characters.

// EXEMPLE:

// For str = "krishan", the output should be "nahsirk".

// For str = "ultr53o?n", the output should be "nortlu".



// My Solution

function reverseLetter(str) {
  return str.replace(/[^a-z]/g, "").split("").reverse().join("");
}

// Best Practices

// reverseLetter=(s)=>s.replace(/[^a-z]/gi,'').split('').reverse().join('');

// Clever

// function reverseLetter(str) {
//   return [...str].reduce((s, c) => /[A-Z]/i.test(c) ? c + s : s, "")
// }

module.exports = reverseLetter;