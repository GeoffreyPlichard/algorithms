/////////////////////
// Find the position!
/////////////////////


// When provided with a letter, return its position in the alphabet.



// My Solution

function position(letter){ 
    return "Position of alphabet: "+(letter.charCodeAt(0)-96)
}

// Best Practices

function position(letter){
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  return 'Position of alphabet: ' + (alphabet.indexOf(letter) + 1);
}

// Clever

position = l => `Position of alphabet: ${l.charCodeAt() - 96}`;
