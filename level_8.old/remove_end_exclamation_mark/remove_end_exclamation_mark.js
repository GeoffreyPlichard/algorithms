/////////////////////////////////////////////////////////////////////////////////
// Exclamation marks series #1: Remove a exclamation mark from the end of string
/////////////////////////////////////////////////////////////////////////////////


// Remove a exclamation mark from the end of string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

// EXEMPLE:

// remove("Hi!") === "Hi"
// remove("Hi!!!") === "Hi!!"
// remove("!Hi") === "!Hi"
// remove("!Hi!") === "!Hi"
// remove("Hi! Hi!") === "Hi! Hi"
// remove("Hi") === "Hi"



// My Solution

function remove(s){
  return s.replace( /!$/, '') 
}

// Best Practices

const remove = s => s.replace(/!$/, '');

// Clever

const remove = s => s.replace(/!$/, '');

