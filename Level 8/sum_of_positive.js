//////////////////
// Sum of positive
//////////////////


// You get an array of numbers, return the sum of all of the positives ones.

// EXEMPLE:


// [1,-4,7,12] => 1 + 7 + 12 = 20



// My Solution

function positiveSum(arr) {
  return arr.filter( x => {
   if(x >= 0) return x;
  }).reduce( (a, b) => {
   return a + b;
  }, 0);
}

// Best Practices

function positiveSum(arr) {
  var total = 0;    
  for (i = 0; i < arr.length; i++) {    // setup loop to go through array of given length
    if (arr[i] > 0) {                   // if arr[i] is greater than zero
      total += arr[i];                  // add arr[i] to total
    }
  }
  return total;                         // return total
}

// Clever

function positiveSum(arr) {
  return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
}