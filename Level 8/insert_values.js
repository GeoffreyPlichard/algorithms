////////////////
// Invert values
////////////////


// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// EXEMPLE:

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []



// My Solution

function invert(array) {
  return array.map(n => -n || n)
}

// Best Practices

function invert(array) {
   return array.map( x => x === 0 ? x : -x);
}

// Clever

function invert(array) {
   return array.map(i => 0 - i);
}
