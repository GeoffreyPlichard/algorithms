/////////////////////////////////
// get character from ASCII Value
/////////////////////////////////


// Get character from ASCII Value

// Write a function getChar/GetChar/get_char which takes a number and returns the corresponding ASCII char for that value.

// EXEMPLE:

// getChar(65) # => 'A'



// My Solution

function getChar(c) {
  return String.fromCharCode(c)
}

// Best Practices

const getChar = String.fromCharCode;

// Clever

const getChar = String.fromCharCode;
