//////////////////
// Return Negative
//////////////////


// Write a function to split a string and convert it into an array of words. For example:

// EXEMPLE:


// "Robin Singh" ==> ["Robin", "Singh"]

// "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]



// My Solution

function stringToArray(string){
  return string.split(' ');
}

// Best Practices

function stringToArray(string){
  return string.split(' ');
}

// Clever

const stringToArray = string => string.match(/\w+/);
