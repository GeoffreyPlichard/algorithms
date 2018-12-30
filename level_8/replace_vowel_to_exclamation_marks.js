//////////////////////////////////////////////////////////////////////////////////////
// Exclamation marks series #11: Replace all vowel to exclamation mark in the sentence
//////////////////////////////////////////////////////////////////////////////////////


// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

// EXEMPLE:

// replace("Hi!") === "H!!"
// replace("!Hi! Hi!") === "!H!! H!!"
// replace("aeiou") === "!!!!!"
// replace("ABCDE") === "!BCD!"



// My Solution

function replace(s){
  return s.replace(/[aeiou]/gi,"!")
}

// Best Practices

function replace(s){
  return s.replace(/[aeoiu]/ig, '!')  
}

// Clever

function replace(s){
  return s.replace(/[aeoiu]/ig, '!')  
}

