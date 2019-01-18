//////////////////////
// Is a number prime?
//////////////////////



// Define a function isPrime/is_prime() that takes one integer argument and returns true/True or false/False depending on if the integer is a prime.

// Per Wikipedia, a prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.




// EXAMPLES

// bool isPrime(5) = return true




// MY SOLUTION

function isPrime(n) {
  if(n <= 1) {
    return false;
  }
  for(let i = n -1; i > 1; i--) {
    if((n / i) % 1 === 0 || n <= 1) { 
      return false;
    }
  }
  return true;
}

// BEST

// function isPrime(num) {
//   for (var i = 2; i < num; i++) if (num % i == 0) return false;
//   return num >= 2; 
// }

// CLEVER

// function isPrime(num) {
//   for (var i = 2; i < num; i++) if (num % i == 0) return false;
//   return num >= 2; 
// }

module.exports = isPrime;