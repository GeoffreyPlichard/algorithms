///////////////
// Even or Odd
///////////////


// Create a function (or write a script in Shell) that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.




// My Solution

function even_or_odd(number) {
  return number % 2 === 0 ? 'Even' : 'Odd';
}

// Best Practices

function even_or_odd(number) {
  return number % 2 ? "Odd" : "Even"
}

// Clever

function even_or_odd(number) {
  return number % 2 ? "Odd" : "Even"
}
