///////////////////////////
// Get the Middle Character
///////////////////////////


// You are going to be given a word. Your job is to return the middle character of the word. 
// If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.


// EXAMPLES

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"



// My Solution

function getMiddle(s)
{
  return (s.length % 2 === 0) ? 
    s.substr( (s.length / 2) - 1, 2) : 
    s.substr(s.length / 2, 1);
}

// Best Practices

// function getMiddle(s)
// {
//   return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
// }

// Clever

// function getMiddle(s)
// {
//   return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
// }

module.exports = getMiddle;
